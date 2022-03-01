import React from 'react';

export function ListUserList() {
  const users = [
    { name: 'Davi', age: 19 },
    { name: 'John', age: 29 },
    { name: 'Gabo', age: 39 },
    { name: 'Gabriel', age: 49 },
    { name: 'Johny', age: 59 },
    { name: 'Elder', age: 79 },
    { name: 'Elefante', age: 89 },
  ];

  const listagemNome = users.map((users) => <li key={users.name}>{users.name}</li>);
  const listagemIdade = users.map((users) => <li key={users.name}>{users.age}</li>);

  return (
    <>
      <ul>
        {listagemNome},{listagemIdade}
      </ul>
    </>
  );
}
