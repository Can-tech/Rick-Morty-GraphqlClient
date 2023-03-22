import { useState } from "react";
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
import "./assets/get_schwifty.ttf";
import "./App.css";
import Stars from "./componenents/stars";
import {
  Container,
  Card,
  Row,
  Text,
  Input,
  Col,
  Image,
} from "@nextui-org/react";
import AdultSwimPage from "./ScrollPages/AdultSwimPage";
import RickMortyTextPage from "./ScrollPages/RickMortyTextPage";
import ImagePage from "./ScrollPages/ImagePage";
import MainPage from "./ScrollPages/MainPage";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ScrollContainer>
        <AdultSwimPage />
        <RickMortyTextPage />
        <ImagePage />
        <MainPage />
      </ScrollContainer>
    </div>
  );
}

export default App;
