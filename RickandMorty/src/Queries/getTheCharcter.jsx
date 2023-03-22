// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";

export const GET_CHARACTRERS = gql`
  query {
    characters {
      results {
        name
        image
        location {
          name
        }
        species
      }
    }
  }
`;
