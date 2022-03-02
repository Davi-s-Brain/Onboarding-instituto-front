import { useQuery } from '@apollo/client';
import React from 'react';
import { getUsersQuery } from '../../services/usersRequest';
import { Div, DivTitle, H2, Li, Subtitle, Ul } from './user-list.component.style';

export function ListUserList() {
  interface usersType {
    name: string;
    email: string;
  }

  const token = localStorage.token;
  const limit = 12;
  const offset = 10;
  const { data } = useQuery(getUsersQuery, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
      offset,
      limit,
    },
  });

  const usersList = data?.users?.nodes?.map((users: usersType) => {
    return (
      <React.Fragment key={users.email}>
        <Div>
          <Li>{users.name}</Li>
          <Li>{users.email}</Li>
        </Div>
      </React.Fragment>
    );
  });

  return (
    <>
      <Subtitle>Listagem de usuários</Subtitle>
      <DivTitle>
        <H2>NOME: </H2> <H2>EMAIL: </H2>
      </DivTitle>
      <Ul>{usersList}</Ul>
    </>
  );
}
