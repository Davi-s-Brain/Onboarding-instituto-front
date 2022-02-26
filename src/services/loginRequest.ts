import { gql } from '@apollo/client';

export const loginQuery = gql`
  mutation login($data: LoginInputType!) {
    login(data: $data) {
      token
      user {
        name
        email
      }
    }
  }
`;
