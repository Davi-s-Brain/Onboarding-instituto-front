import { gql } from '@apollo/client';

export const getUsersQuery = gql`
  query users($offset: Int, $limit: Int) {
    users(pageInfo: { offset: $offset, limit: $limit }) {
      nodes {
        name
        email
      }
      pageInfo {
        offset
        limit
      }
    }
  }
`;
