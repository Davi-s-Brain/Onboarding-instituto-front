import React from 'react';
import { Input, Button, Label, Forms, Title } from './Login.component.style';

export default function Login():JSX.Element {
  return (
    <Forms className='App'>
      <Title>Bem vindo(a) à Taqtile!</Title>
      <Label > Email: </Label>
      <Input type='Email' />
      <Label > Senha: </Label>
      <Input type='Senha' />
      <Button>Submit</Button>
    </Forms>
  );
}
