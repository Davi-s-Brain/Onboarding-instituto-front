import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddUserMutation } from '../../services/addUserRequest';
import { ButtonStyled, FormsStyled, H3Styled, InputStyled, LabelStyled, ListStyled } from './add-user.component.style';

export const Adduser = () => {
  const today = new Date().toISOString().split('T')[0];
  const navigation = useNavigate();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');

  const token = localStorage.getItem('token');

  const [newUser, { loading: LoadingButton }] = useMutation(AddUserMutation, {
    context: {
      headers: {
        Authorization: token,
      },
    },

    onError: (error) => {
      console.log(error);
    },

    onCompleted: () => {
      alert('Usuario Cadastrado com Sucesso');
      navigation('/user-list');
    },
  });

  const sendRegisters = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    newUser({
      variables: {
        data: { name, password, birthDate, phone, role, email },
      },
    });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleBirthDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(e.target.value);
  };

  const handleCPF = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(e.target.value);
  };

  return (
    <FormsStyled onSubmit={sendRegisters}>
      <H3Styled>Crie uma conta</H3Styled>
      <LabelStyled> Nome: </LabelStyled>

      <InputStyled
        type='text'
        required
        placeholder='Digite seu nome completo'
        value={name}
        onChange={handleName}
        title='Seu nome deve Possuir ao menos 3 caracteres'
      />

      <LabelStyled> Email: </LabelStyled>
      <InputStyled
        type='email'
        required
        placeholder='email@example.com'
        value={email}
        onChange={handleEmail}
        pattern="/(^[a-zA-Z0-9.!#$%&'*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)$/" //errado
      />

      <LabelStyled> Senha: </LabelStyled>
      <InputStyled
        type='password'
        required
        value={password}
        onChange={handlePassword}
        pattern='(^(?=.*\d)(?=.*[a-zA-Z]).{7,}$)'
      />

      <LabelStyled> Telefone: </LabelStyled>
      <InputStyled
        type='tel'
        required
        value={String(phone)}
        onChange={handlePhone}
        pattern='/(^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4})$/' //errado
        title='Digite um nuúmero de telefone válido com 9 caracteres e DDD.'
      />

      <LabelStyled> Data de aniversário: </LabelStyled>
      <InputStyled
        type='date'
        required
        value={birthDate}
        onChange={handleBirthDate}
        max={today}
        title='Somente datas anteriores a hoje'
      />

      <LabelStyled> CPF: </LabelStyled>
      <InputStyled
        type='number'
        required
        value={cpf}
        onChange={handleCPF}
        title='Digite seu CPF no formato xxx.xxx.xxx-xx'
        pattern='/(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})/'
      />

      <ListStyled
        value={role}
        name='role'
        required
        placeholder='Selecione uma das opções'
        onChange={(e) => setRole(e.target.value)}
      >
        <option value='user'>User</option>
        <option value='admin'>Admin</option>
      </ListStyled>
      <ButtonStyled type='submit' disabled={LoadingButton}>
        {LoadingButton ? 'Loading...' : 'Cadastrar'}
      </ButtonStyled>
    </FormsStyled>
  );
};
