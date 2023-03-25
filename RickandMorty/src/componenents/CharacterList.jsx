import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../Queries/getTheCharacter";
import { useEffect, useState, useRef } from "react";

export default function CharacterList({ filter }) {
  const [page, setPage] = useState(1);
  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });
  const [isElementVisible, setIsElementVisible] = useState();
  const myRef = useRef();
  let filteredData;

  useEffect(() => {
    myRef.current =
      document.querySelectorAll(".cardBox")[
        document.querySelectorAll(".cardBox").length - 1
      ] || document.querySelector("#cardGrid");
    console.log(myRef?.current);
    if (data && data.characters) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setIsElementVisible(entry.isIntersecting);
        },
        { threshold: 1 }
      );

      observer.observe(myRef.current);

      return () => {
        observer.unobserve(myRef.current);
      };
    }
  });

  useEffect(() => {
    if (isElementVisible) {
      fetchMore({
        variables: { page: data.characters.info.next },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;

          return {
            characters: {
              ...fetchMoreResult.characters,
              results: [
                ...prev.characters.results,
                ...fetchMoreResult.characters.results,
              ],
            },
          };
        },
      });
    }
  }, [isElementVisible]);

  console.log(data?.characters?.info?.next);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  filteredData = data.characters.results;
  if (filter[0].length > 0) {
    filteredData = filteredData.filter((element) => {
      return filter[0].includes(element.gender);
    });
  }
  if (filter[1].length > 0) {
    filteredData = filteredData.filter((element) =>
      filter[1].includes(element.species)
    );
  }
  if (filter[2].length > 0) {
    filteredData = filteredData.filter((element) =>
      filter[2].includes(element.status)
    );
  }
  return (
    <Grid.Container
      gap={2}
      justify="flex-start"
      css={{
        height: "100%",
      }}
      className="scrollingbox"
      id="cardGrid"
    >
      {filteredData.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card
            isHoverable
            isPressable
            variant="bordered"
            borderWeight="light"
            className="cardBox"
          >
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.image}
                objectFit="cover"
                width="100%"
                height={"8em"}
                alt={item.name}
              />
            </Card.Body>
            <Card.Footer css={{}}>
              <Row css={{ flexDirection: "column", height: "7em" }}>
                <div>
                  {" "}
                  <Text>
                    <b>Name: </b>
                    {item.name}
                  </Text>
                </div>
                <div>
                  <Text
                    css={{
                      color: "white",
                      fontWeight: "$semibold",
                      fontSize: "$sm",
                    }}
                  >
                    <b>Species: </b>
                    {item.species}
                  </Text>
                </div>
                <div>
                  {" "}
                  <Text>
                    <b>Location: </b>
                    {item.location.name}
                  </Text>
                </div>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}
