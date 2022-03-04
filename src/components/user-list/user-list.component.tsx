import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { LIMIT } from '../../atomic/constants/constants';
import { getUsersQuery } from '../../services/usersRequest';
import {
  ButtonStyled,
  DivStyled,
  DivTitleStyled,
  H2Styled,
  LiStyled,
  SubtitleStyled,
  UlStyled,
} from './user-list.component.style';

export const UserList = () => {
  const [offset, setOffset] = useState(0);

  interface usersType {
    name: string;
    email: string;
  }

  const token = localStorage.token;
  const magicNumber = 12;
  const limit = LIMIT;
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

  const pageInfo = {
    hasNextPage: data?.users?.pageInfo?.hasNextPage,
    hasPreviousPage: data?.users?.pageInfo?.hasPreviousPage,
  };
  const { hasNextPage, hasPreviousPage } = pageInfo;

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

  const nextPage = () => {
    setOffset(offset + magicNumber);
  };

  const previousPage = () => {
    setOffset(offset - magicNumber);
  };

  return (
    <>
      <SubtitleStyled>Listagem de usuários</SubtitleStyled>

      <DivTitleStyled>
        <H2Styled>NOME: </H2Styled> <H2Styled>EMAIL: </H2Styled>
      </DivTitleStyled>

      <UlStyled>{usersList}</UlStyled>

      <DivTitleStyled>
        <ButtonStyled onClick={previousPage} disabled={!hasPreviousPage}>
          Anterior
        </ButtonStyled>

        <ButtonStyled onClick={nextPage} disabled={!hasNextPage}>
          Proxima
        </ButtonStyled>
      </DivTitleStyled>
    </>
  );
}
