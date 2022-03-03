import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loginQuery } from '../../services/loginRequest';
import { ButtonStyled, FormsStyled, InputStyled, LabelStyled, TitleStyled } from './login.component.style';

export function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const animation = <Spinner animation='border' />;

  const [login, { loading: LoadingButton }] = useMutation(loginQuery, {
    onError: () => {
      alert('Login ou senha inválidos, tente novamente!');
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

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  return (
    <>
      <FormsStyled onSubmit={sendForm}>
        <TitleStyled>Bem vindo(a) à Taqtile!</TitleStyled>
        <LabelStyled> Email: </LabelStyled>
        <InputStyled
          id='email'
          type='email'
          required
          placeholder='email@example.com'
          value={email}
          onChange={handleEmail}
          pattern="/^[a-zA-Z0-9.!#$%&'*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
        />
        <LabelStyled> Senha: </LabelStyled>
        <InputStyled
          id='senha'
          type='password'
          required
          value={password}
          onChange={handlePassword}
          pattern='(^(?=.*\d)(?=.*[a-zA-Z]).{7,}$)'
        />
        <ButtonStyled className='btn-doido' variant='outline-primary' type='submit' disabled={LoadingButton}>
          {LoadingButton ? animation : 'Submit'}
        </ButtonStyled>
      </FormsStyled>
    </>
  );
}
