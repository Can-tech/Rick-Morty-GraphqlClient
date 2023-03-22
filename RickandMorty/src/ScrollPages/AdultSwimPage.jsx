import {
  Animator,
  ScrollPage,
  batch,
  Fade,
  MoveOut,
  Sticky,
} from "react-scroll-motion";

const AdultSwimPage = () => {
  return (
    <div>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -300))}>
          <span
            style={{ fontSize: "40px", fontWeight: "bold", color: "white" }}
          >
            [ADULTSWIM]
          </span>
          <span style={{ color: "white" }}>TM</span>
        </Animator>
      </ScrollPage>
    </div>
  );
};

export default AdultSwimPage;
