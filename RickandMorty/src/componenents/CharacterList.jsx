import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useQuery } from "@apollo/client";

import { GET_CHARACTRERS } from "../Queries/gettheCharcter";

export default function CharacterList() {
  const { loading, error, data } = useQuery(GET_CHARACTRERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  return (
    <Grid.Container
      gap={2}
      justify="flex-start"
      css={{
        height: "100vh",
        overflow: "scroll",
      }}
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
