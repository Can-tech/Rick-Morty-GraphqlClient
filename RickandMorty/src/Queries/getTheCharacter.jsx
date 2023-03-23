// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int!) {
    characters(page: $page) {
      results {
        name
        image
        location {
          name
        }
        species
      }
      info {
        next
      }
    }
  }
`;
