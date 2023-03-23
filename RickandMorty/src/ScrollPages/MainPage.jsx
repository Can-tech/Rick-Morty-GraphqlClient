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
  Checkbox,
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
            height: "85vh",
          }}
        >
          <Col span={3} style={{ height: "100%" }}>
            <Row>
              <Text
                h1
                size={60}
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  marginTop: "-0.3em",
                }}
                weight="bold"
                style={{ backgroundColor: "white" }}
              >
                Filter
              </Text>
            </Row>
            <Row style={{ height: "100%" }}>
              <Col
                style={{
                  border: "white solid 2px",
                  marginRight: "2em",
                  borderRadius: "10px",
                  overflow: "scroll",
                  height: "87%",
                }}
                className="scrollingbox"
              >
                <div
                  style={{
                    border: "white solid 2px",
                    margin: "1em",
                    borderRadius: "10px",
                  }}
                >
                  <Checkbox.Group
                    defaultValue={["buenos-aires"]}
                    label="Select Gender"
                    labelColor="secondary"
                    color="gradient"
                    css={{ margin: "1em", color: "white" }}
                  >
                    <Checkbox value="buenos-aires">
                      <p style={{ color: "white" }}>Male</p>
                    </Checkbox>
                    <Checkbox value="sydney">
                      <p style={{ color: "white" }}>Female</p>
                    </Checkbox>
                    <Checkbox value="london">
                      <p style={{ color: "white" }}>Unknown</p>
                    </Checkbox>
                  </Checkbox.Group>
                </div>
                <div
                  style={{
                    border: "white solid 2px",
                    margin: "1em",
                    borderRadius: "10px",
                  }}
                >
                  <Checkbox.Group
                    defaultValue={["buenos-aires"]}
                    label="Select Gender"
                    labelColor="secondary"
                    color="gradient"
                    css={{ margin: "1em", color: "white" }}
                  >
                    <Checkbox value="buenos-aires">
                      <p style={{ color: "white" }}>Male</p>
                    </Checkbox>
                    <Checkbox value="sydney">
                      <p style={{ color: "white" }}>Female</p>
                    </Checkbox>
                    <Checkbox value="london">
                      <p style={{ color: "white" }}>Unknown</p>
                    </Checkbox>
                  </Checkbox.Group>
                </div>
                <div
                  style={{
                    border: "white solid 2px",
                    margin: "1em",
                    borderRadius: "10px",
                  }}
                >
                  <Checkbox.Group
                    defaultValue={["buenos-aires"]}
                    label="Select Gender"
                    labelColor="secondary"
                    color="gradient"
                    css={{ margin: "1em", color: "white" }}
                  >
                    <Checkbox value="buenos-aires">
                      <p style={{ color: "white" }}>Male</p>
                    </Checkbox>
                    <Checkbox value="sydney">
                      <p style={{ color: "white" }}>Female</p>
                    </Checkbox>
                    <Checkbox value="london">
                      <p style={{ color: "white" }}>Unknown</p>
                    </Checkbox>
                  </Checkbox.Group>
                </div>
              </Col>
            </Row>
          </Col>
          {/* ---CARDS--- */}
          <Col span={9} style={{ height: "100%" }}>
            <div className="mainFrameForTheCharactersList">
              <CharacterList />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
