import React, { useState } from 'react';
import styled from 'styled-components';
import { User, Lock, Settings, Mail, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';


const RegisterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f3f4f6;
`;

const RegisterFormContainer = styled.div`
    background-color: white;
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
    color: #6b7280;
    margin-bottom: 2rem;
    font-size: 1rem;
`;

const InputGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    transition: border-color 200ms;

    &:focus-within {
        border-color: #1f2937;
    }
`;

const InputField = styled.input`
    border: none;
    outline: none;
    flex-grow: 1;
    font-size: 1rem;
    margin-left: 0.75rem;
    color: #1f2937;

    &::placeholder {
        color: #9ca3af;
    }
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 1rem;
    background-color: black;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 200ms;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;

    &:hover {
        background-color: #374151;
    }
`;

const LogoHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    color: #1f2937;
    font-size: 1.5rem;
    font-weight: 700;
`;

const LinkText = styled.p`
    margin-top: 1.5rem;
    font-size: 0.875rem;
    color: #6b7280;
    
    a {
        color: black;
        font-weight: 600;
        text-decoration: none;
        transition: color 200ms;
        
        &:hover {
            color: #4b5563;
        }
    }
`;

const Register: React.FC = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            return;
        }

        // Aqui você chamaria a API para registrar o usuário.

        if (name && email && password) {
            console.log ('Usuário registrado:', { name, email });
            alert ('Registro bem-sucedido! Por favor, faça login.');
            navigate('/login');
        } else {
            setError('Por favor, preencha todos os campos.');
        }
    };

    return (
        <RegisterWrapper>
            <RegisterFormContainer>
                <form onSubmit={handleRegister}>

                    <LogoHeader>
                        <Settings size={24} />
                        TaskMaster
                    </LogoHeader>

                    <Title>Criar Conta</Title>
                    <Subtitle>Registre-se para gerenciar suas tarefas</Subtitle>

                    <InputGroup>
                        <User size={20} color="#9ca3af" />
                        <InputField
                            type="text"
                            placeholder="Nome Completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </InputGroup>
                    <InputGroup>
                        <Mail size={20} color="#9ca3af" />
                        <InputField
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </InputGroup>

                    <InputGroup>
                        <Lock size={20} color="#9ca3af" />
                        <InputField
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </InputGroup>

                    <InputGroup>
                        <Lock size={20} color="#9ca3af" />
                        <InputField
                            type="password"
                            placeholder="Confirmar Senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </InputGroup>

                    {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

                    <SubmitButton type="submit">
                        Registrar <ArrowRight size={20} />
                    </SubmitButton>
                </form>

                <LinkText>
                    Já tem uma conta? <Link to="/login">Faça login</Link>
                </LinkText>
            </RegisterFormContainer>
        </RegisterWrapper>
    );
};

export default Register;