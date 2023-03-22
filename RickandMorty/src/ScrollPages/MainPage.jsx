import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

import {
  Container,
  Card,
  Row,
  Text,
  Input,
  Col,
  Image,
  blueDark,
} from "@nextui-org/react";

import CharacterList from "../componenents/CharacterList";
import searchImage from "../assets/search.png";

const MainPage = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Container>
        {/* <Row
          css={{
            marginTop: "2em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <Text
            weight="bold"
            style={{
              textAlign: "center",
              fontSize: "30px",
            }}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
          >
            I'm Pickle Rick!
          </Text>
          <Text
            weight="normal"
            style={{
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              fontSize: "15px",
              color: "black",
            }}
          >
            {" "}
            -Rick Sanchez
          </Text>
        </Row> */}
        <Row
          css={{
            marginTop: "1em",
            textAlign: "center",
            height: "10vh",
          }}
        >
          <Col>
            <Input
              clearable
              placeholder="Search for the characters"
              size="xl"
              width="60%"
              contentLeft={<Image src={searchImage} />}
              contentLeftStyling={true}
            />
          </Col>
        </Row>
        <Row
          style={{
            marginTop: "1em",
            height: "5vh",
            backgroundColor: "white",
          }}
        >
          <Col
            span={3}
            style={{
              display: "flex",
            }}
          >
            <Text
              h1
              size={60}
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
                marginTop: "-0.3em",
              }}
              weight="bold"
            >
              Filter
            </Text>
          </Col>
          <Col span={9} style={{ overflow: "hidden" }}>
            <div className="mainFrameForTheCharactersList" style={{}}>
              <CharacterList />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
