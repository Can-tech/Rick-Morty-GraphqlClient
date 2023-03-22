import {
  Animator,
  ScrollPage,
  batch,
  FadeIn,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

const RickMortyTextPage = () => {
  return (
    <div>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <span
            style={{
              fontSize: "110px",
              fontWeight: "bold",
              fontFamily: "get_schwifty",
              color: "#13b0c8",
              textShadow:
                "2px 0 #cedd5a, -2px 0 #cedd5a, 0 2px #cedd5a, 0 -2px #cedd5a, 2px 2px #cedd5a, -2px -2px #cedd5a, 2px -2px #cedd5a, -2px 2px #cedd5a",
            }}
          >
            Rick
          </span>
          <span
            style={{
              fontSize: "75px",
              fontWeight: "bold",
              fontFamily: "get_schwifty",
              color: "#13b0c8",
              textShadow:
                "2px 0 #cedd5a, -2px 0 #cedd5a, 0 2px #cedd5a, 0 -2px #cedd5a, 2px 2px #cedd5a, -2px -2px #cedd5a, 2px -2px #cedd5a, -2px 2px #cedd5a",
            }}
          >
            {" "}
            and{" "}
          </span>
          <span
            style={{
              fontSize: "110px",
              fontWeight: "bold",
              fontFamily: "get_schwifty",
              color: "#13b0c8",
              textShadow:
                "2px 0 #cedd5a, -2px 0 #cedd5a, 0 2px #cedd5a, 0 -2px #cedd5a, 2px 2px #cedd5a, -2px -2px #cedd5a, 2px -2px #cedd5a, -2px 2px #cedd5a",
            }}
          >
            Morty
          </span>
        </Animator>
      </ScrollPage>
    </div>
  );
};

export default RickMortyTextPage;
