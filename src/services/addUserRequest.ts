import { gql } from '@apollo/client';

export const AddUserMutation = gql`
  mutation createUser($data: UserInputType!) {
    createUser(data: $data) {
      name
      phone
      birthDate
      email
      role
    }
  }
`;
