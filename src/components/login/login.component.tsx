import React, { useState } from 'react';
import { Input, Button, Label, Forms, Title } from './login.component.style';

export function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Forms>
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
