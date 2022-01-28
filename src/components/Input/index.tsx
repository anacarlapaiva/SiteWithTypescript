import React from 'react';
import { Container, HelperText, InputComponent } from './styles';

interface InputProps {
    name: string;
    type: string;
    value?: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?:  boolean;
    helperText?: string;
}

const Input: React.FC<InputProps> = ({name, type, value, placeholder, onChange, error, helperText}) => {
    return (
        <Container>
            <InputComponent
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                error={error}
            />
            <HelperText error={error}>{helperText}</HelperText>
        </Container>
    )
}

export default Input;
