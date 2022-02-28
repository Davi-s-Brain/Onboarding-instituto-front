import styled from 'styled-components';

export const Body = styled.body `
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Input = styled.input `
  height: 30px;
  width: 400px;
  border-radius: 5px;
`;

export const Button = styled.button `
  background-color: rgb(93, 0, 180);
  font-weight: bold;
  height: 50px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  outline-style: none;
  width: 400px;
  color: white;
`;

export const Label = styled.label `
  font-family: Arial;
  font-weight: bold;
  display: block;
  margin-right: 365px;
  margin-top: 12px;
  margin-bottom: 12px;  
`;

export const Forms = styled.form `
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  width: 60vw;
  align-items: center;
`;

export const Title = styled.h1`
  font: bold 30px arial, sans-serif;
`;