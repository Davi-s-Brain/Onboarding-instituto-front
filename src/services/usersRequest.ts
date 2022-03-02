import { gql } from '@apollo/client';

export const getUsersquery = gql`
  query users($offset: Int, $limit: Int) {
    users(pageInfo: { offset: $offset, limit: $limit }) {
      nodes {
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
