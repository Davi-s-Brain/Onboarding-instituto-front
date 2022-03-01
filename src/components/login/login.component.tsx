import { ApolloError, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loginQuery } from '../../services/loginRequest';
import { Forms, Input, Label, Title } from './login.component.style';

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

  console.log(data);

  return (
    <>
      <style type='text/css'>
        {`
          .btn-doido {
            background-color: rgb(93, 0, 180);
            font-weight: bold;
            height: 50px;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 20px;
            outline-style: none;
            width: 400px;
            color: white;
          }
        `}
      </style>
      <Forms onSubmit={sendForm}>
        <Title>Bem vindo(a) à Taqtile!</Title>
        <Label> Email: </Label>
        <Input
          id='email'
          type='email'
          required
          placeholder='email@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          pattern="/^[a-zA-Z0-9.!#$%&'*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
        />
        <Label> Senha: </Label>
        <Input
          id='senha'
          type='password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          pattern='(^(?=.*\d)(?=.*[a-zA-Z]).{7,}$)'
        />
        <Button className='btn-doido' variant='outline-primary' type='submit' disabled={LoadingButton}>
          {LoadingButton ? animation : 'Submit'}
        </Button>
      </Forms>
    </>
  );
}
