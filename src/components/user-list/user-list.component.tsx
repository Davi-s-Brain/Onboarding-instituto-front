import { useQuery } from '@apollo/client';
import React from 'react';
import { getUsersQuery } from '../../services/usersRequest';
import { DivStyled, DivTitleStyled, H2Styled, LiStyled, SubtitleStyled, UlStyled } from './user-list.component.style';

export function UserList() {
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
        <DivStyled>
          <LiStyled>{users.name}</LiStyled>
          <LiStyled>{users.email}</LiStyled>
        </DivStyled>
      </React.Fragment>
    );
  });

  return (
    <>
      <SubtitleStyled>Listagem de usuários</SubtitleStyled>
      <DivTitleStyled>
        <H2Styled>NOME: </H2Styled> <H2Styled>EMAIL: </H2Styled>
      </DivTitleStyled>
      <UlStyled>{usersList}</UlStyled>
    </>
  );
}
