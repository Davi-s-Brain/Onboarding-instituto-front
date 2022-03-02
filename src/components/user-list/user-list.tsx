import { useQuery } from '@apollo/client';
import React from 'react';
import { getUsersQuery } from '../../services/usersRequest';
import { Div, H4, Li, Subtitle, Ul } from './user-list.component.style';

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

  const usersData = data?.users?.nodes?.map((users: { name: string; email: string }) => users);

  const usersList = usersData?.map((users: usersType) => {
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
      <H4>NOME: EMAIL:</H4>
      <Ul>{usersList}</Ul>
    </>
  );
}
