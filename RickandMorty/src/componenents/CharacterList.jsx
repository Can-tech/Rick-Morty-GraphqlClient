import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useQuery } from "@apollo/client";

import { GET_CHARACTERS } from "../Queries/getTheCharacter";
import { useEffect, useState, useRef } from "react";

export default function CharacterList() {
  const {
    loading: data_loading,
    error,
    data,
    fetchMore,
    variables,
  } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
  });
  const [isElementVisible, setIsElementVisible] = useState();
  const myRef = useRef();

  // useEffect(() => {
  //   console.log(myRef.current);
  // });
  useEffect(() => {
    myRef.current =
      document.querySelectorAll(".cardBox")[
        document.querySelectorAll(".cardBox").length - 1
      ];
    if (myRef.current) {
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

  console.log(data.characters.info.next);
  console.log(isElementVisible);

  // useEffect(() => {
  //   const observerOptions = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 1.0,
  //   };

  //   const observerCallback = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         console.log("Intersection detected!");
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(
  //     observerCallback,
  //     observerOptions
  //   );

  //   const target = document?.querySelector(".cardBox:last-child");
  //   observer.observe(target);
  // }, [loading]);

  if (data_loading) {
    return <p>Loading...</p>;
  }
  if (error) return <p>Error : {error.message}</p>;
  return (
    <Grid.Container
      gap={2}
      justify="flex-start"
      css={{
        height: "100%",
      }}
      className="scrollingbox"
      id="cardGrid"
      ref={myRef}
    >
      {data.characters.results.map((item, index) => (
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
