import {
  Animator,
  ScrollPage,
  batch,
  Fade,
  Move,
  Sticky,
} from "react-scroll-motion";
import rickimage from "../assets/ricknoback.png";

const FadeUp = batch(Fade(), Move(), Sticky());

const ImagePage = () => {
  return (
    <div>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "40px" }}>
            <img src={rickimage} alt="rick and morty image" />
          </span>
        </Animator>
      </ScrollPage>
    </div>
  );
};

export default ImagePage;
