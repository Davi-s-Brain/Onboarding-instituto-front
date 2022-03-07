import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LIMIT } from '../../atomic/constants/constants';
import { getUsersQuery } from '../../services/usersRequest';
import {
  ButtonDetailsStyled,
  ButtonStyled,
  CreateUserButtonStyled,
  Details,
  DivStyled,
  DivTitleStyled,
  H2Styled,
  LiStyled,
  SubtitleStyled,
  UlStyled,
} from './user-list.component.style';

export const UserList = () => {
  interface usersType {
    id: string | number;
    name: string;
    email: string;
  }

  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  const createUser = () => {
    {
      navigate('/add-user');
    }
  };

  const userDetails = (id: string | number) => {
    navigate(`/user-details/${id}`);
  };

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
          <Details>
            <ButtonDetailsStyled onClick={() => userDetails(users.id)}>Detalhes</ButtonDetailsStyled>
            <LiStyled>{users.name}</LiStyled>
          </Details>
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
        <CreateUserButtonStyled onClick={createUser}>Criar usuário</CreateUserButtonStyled>
      </DivTitleStyled>

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
};
