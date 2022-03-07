import { gql } from '@apollo/client';

export const getUsersQuery = gql`
  query users($offset: Int, $limit: Int) {
    users(pageInfo: { offset: $offset, limit: $limit }) {
      nodes {
        id
        name
        email
      }
      pageInfo {
        offset
        limit
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;
