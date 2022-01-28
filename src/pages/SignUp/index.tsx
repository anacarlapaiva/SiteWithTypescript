import React from 'react';
import Form from '../../components/Form';
import Navbar from '../../components/Navbar';
import { PrincipalContainer } from './styles';

const SignUp = () => {
  return (
    <PrincipalContainer>
      <Navbar showButtonSignUp={false}/>
      <Form />
    </PrincipalContainer>
  );
};

export default SignUp;
