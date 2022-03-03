import { ApolloError, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loginQuery } from '../../services/loginRequest';
import { Btn, Forms, Input, Label, Title } from './login.component.style';

export function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const animation = <Spinner animation='border' />;

  const [login, { data, loading: LoadingButton }] = useMutation(loginQuery, {
    onError: (error: ApolloError) => {
      alert('Login ou senha inválidos, tente novamente!');
      console.log(error.message);
    },

    onCompleted: (e) => {
      const tokenValue = e.login.token;
      localStorage.setItem('token', tokenValue);

      alert('Bem vindo(a)!');
      navigate('/user-list');
    },
  });

  const sendForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    login({
      variables: {
        data: { email, password },
      },
    });
  };

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  return (
    <>
      <Forms onSubmit={sendForm}>
        <Title>Bem vindo(a) à Taqtile!</Title>
        <Label> Email: </Label>
        <Input
          id='email'
          type='email'
          required
          placeholder='email@example.com'
          value={email}
          onChange={handleEmail}
          pattern="/^[a-zA-Z0-9.!#$%&'*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
        />
        <Label> Senha: </Label>
        <Input
          id='senha'
          type='password'
          required
          value={password}
          onChange={handlePassword}
          pattern='(^(?=.*\d)(?=.*[a-zA-Z]).{7,}$)'
        />
        <Btn className='btn-doido' variant='outline-primary' type='submit' disabled={LoadingButton}>
          {LoadingButton ? animation : 'Submit'}
        </Btn>
      </Forms>
    </>
  );
}
