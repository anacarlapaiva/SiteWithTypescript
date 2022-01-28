import React, {   useState } from 'react';
import { Button } from '../../globalStyles';
import Input from '../Input';
import { FormComponent, FormContainer, RightSide, RightSideImage, Wrap } from './styles'
import { RegisterForm } from '../../validation/schemas/register'
import useFormValidation from '../../validation/useFormValidation'
import img from '../../images/formImage.png'

const Form: React.FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const form = {name, email, password};
    const { validateError, handleErrorMessage } = useFormValidation<RegisterForm>("register");

    const handleSubmit = async () => {
        const result = await validateError(form);
        console.log(result)
        if(result){
            console.log("Faz o tratamento de registro")
        }
    }

    return (
        <>
            <Wrap>
                <FormComponent>
                    <h1>Faça sua conta!</h1>
                    <FormContainer> 
                    <label htmlFor='email'>Nome:</label>
                        <Input
                            name="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            {...handleErrorMessage("name")}
                        />
                        <label htmlFor='email'>E-mail:</label>
                        <Input
                            name="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            {...handleErrorMessage("email")}
                        />
                        <label htmlFor='password'>Senha:</label>
                        <Input
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            {...handleErrorMessage("password")}

                        />
                    </FormContainer>
                    <Button type="button" onClick={handleSubmit} fontBig big primary>
                        Cadastre-se
                    </Button>
                </FormComponent>
                <RightSide>
                    <RightSideImage src={img} alt="Image form" />
                </RightSide>
            </Wrap>
        </>
    );
};

export default Form;
