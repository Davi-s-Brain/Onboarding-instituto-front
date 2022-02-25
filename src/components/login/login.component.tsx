import React from 'react';
import { Input, Button, Label, Forms, Title } from './login.component.style';

export function Login(): JSX.Element {
  return (
    <Forms>
      <Title>Bem vindo(a) à Taqtile!</Title>
      <Label> Email: </Label>
      <Input id='email' type='Email' placeholder='email@example.com' />
      <Label> Senha: </Label>
      <Input id='senha' type='Senha' />
      <Button>Submit</Button>
    </Forms>
  );
}
