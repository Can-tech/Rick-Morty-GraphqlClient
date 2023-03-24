import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../Queries/getTheCharacter";
import { useEffect, useState, useRef } from "react";

export default function CharacterList() {
  const [page, setPage] = useState(1);
  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });
  const [isElementVisible, setIsElementVisible] = useState();
  const myRef = useRef();

  useEffect(() => {
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
  }, [data]);

  useEffect(() => {
    if (isElementVisible) {
      setPage((page) => page + 1);
    }
  }, [isElementVisible]);

  useEffect(() => {
    if (page > 1) {
      fetchMore({
        variables: { page },
      });
    }
  }, [page]);