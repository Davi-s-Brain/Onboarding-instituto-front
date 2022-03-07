import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getUserByIdQuery } from '../../services/getUserById';
import { DivStyled, LiStyled, SectionStyled, TitleStyled, UlStyled } from './user-details.component.style';

export const UserDatail = () => {
  const token = localStorage.getItem('token');
  const { id } = useParams();

  const { data } = useQuery(getUserByIdQuery, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
      id,
    },
  });

  console.log(data?.user?.id);

  return (
    <SectionStyled>
      <TitleStyled>Detalhes do usuário</TitleStyled>
      <DivStyled>
        <UlStyled>
          <LiStyled>Nome: {data?.user?.name}</LiStyled>
          <LiStyled>Email: {data?.user?.email}</LiStyled>
          <LiStyled>Id: {data?.user?.id}</LiStyled>
          <LiStyled>Aniversário: {data?.user?.birthDate}</LiStyled>
          <LiStyled>Telefone: {data?.user?.phone}</LiStyled>
          <LiStyled>Permissão de acesso: {data?.user?.role}</LiStyled>
        </UlStyled>
      </DivStyled>
    </SectionStyled>
  );
};
