import { ApolloError, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { loginQuery } from '../../services/loginRequest';
import { Button, Forms, Input, Label, Title } from './login.component.style';

export function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { data, loading }] = useMutation(loginQuery, {
    onError: (error: ApolloError) => {
      alert('Login ou senha inválidos, tente novamente!');
      console.log(error.message);
    },

    onCompleted: (e: any) => {
      const tokenValue = e.login.token;
      localStorage.setItem('token', tokenValue);
      const token = localStorage.token;

      alert('Bem vindo(a)!');
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

  console.log(loading, data);

  return (
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
      <Button>Submit</Button>
    </Forms>
  );
}
