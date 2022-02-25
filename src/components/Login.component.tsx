import React from 'react';
import { Input, Button, Label, Forms, Title } from './Login.component.style';
import Validator from './data_validator';

export default function Login(): JSX.Element {
  return (
    <Forms >
      <Title>Bem vindo(a) à Taqtile!</Title>
      <Label> Email: </Label>
      <Input id='email' type='Email' placeholder='email@example.com' />
      <Label> Senha: </Label>
      <Input id='senha' type='Senha' />
      <Button onSubmit={Validator}>Submit</Button>
    </Forms>
  );
}
