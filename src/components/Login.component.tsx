import React from 'react';
import { Input, Button, Label, Forms, Title } from './Login.component.style';

export function Login():JSX.Element {
  return (
    <Forms className='App'>
      <Title>Bem vindo(a) à Taqtile!</Title>
      <Label > Email: </Label>
      <Input type='email' />
      <Label > Senha: </Label>
      <Input type='senha' />
      <Button>Submit</Button>
    </Forms>
  );
}
