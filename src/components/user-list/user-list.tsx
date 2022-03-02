import React from 'react';
import { Div, H4, Li, Subtitle, Ul } from './user-list.component.style';

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

  const usersList = users.map((item) => {
    return (
      <React.Fragment key={item.name}>
        <Div>
            <Li>
              {item.name}
            </Li>
            <Li>
              {item.age}
            </Li>
        </Div>
      </React.Fragment>
    );
  });

  return (
    <>
      <Subtitle>Listagem de usuários</Subtitle>
      <H4>NOME: IDADE:</H4>
      <Ul>{usersList}</Ul>
    </>
  );
}
