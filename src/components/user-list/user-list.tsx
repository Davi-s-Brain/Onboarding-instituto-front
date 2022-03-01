import React from 'react';
import { Li, Subtitle, Ul } from './user-list.component.style';

export function ListUserList() {
  const users = [
    { name: 'Davi', age: 19 },
    { name: 'John', age: 29 },
    { name: 'Gabo', age: 39 },
    { name: 'Gabriel', age: 49 },
    { name: 'Johny', age: 59 },
    { name: 'Elder', age: 79 },
    { name: 'Elefante', age: 89 },
    { name: 'Donald', age: 109 },
  ];

  const listagemNome = users.map((users) => <li key={users.name}>{users.name}</li>);
  const listagemIdade = users.map((users) => <li key={users.name}>{users.age}</li>);

  return (
    <>
      <Subtitle>Listagem de usuários</Subtitle>
      <Ul>
        <Li>
          <p>NOME:</p>
          <br />
          {listagemNome}
        </Li>
        <Li>
          <p>IDADE:</p>
          <br />
          {listagemIdade}
        </Li>
      </Ul>
    </>
  );
}
