import React, { useState } from 'react';
import styled from 'styled-components';
import { LogIn, User, Lock, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore'; 


const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f3f4f6; 
`;

const LoginFormContainer = styled.div`
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


const Login: React.FC = () => {
    const navigate = useNavigate();
    const loginUser = useAppStore((state) => state.login);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Simulação de autenticação: FUTURAMENTE aqui haverá uma chamada à API.
        if (email === 'teste@taskmaster.com' && password === '123456') {
            loginUser('Kim So Men', 'UI/UX Designer', 'https://i.pravatar.cc/150?img=5');
            
            
            navigate('/dashboard');
        } else {
            setError('Email ou senha incorretos. Use: teste@taskmaster.com / 123456');
        }
    };

    return (
        <LoginWrapper>
            <LoginFormContainer>
                <form onSubmit={handleLogin}>
                    
                    <LogoHeader>
                        <Settings size={24} />
                        TaskMaster.
                    </LogoHeader>

                    <Title>Acesse sua conta</Title>
                    <Subtitle>Insira suas credenciais para continuar.</Subtitle>

                    {}
                    <InputGroup>
                        <User size={20} color="#9ca3af" />
                        <InputField 
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </InputGroup>

                    {}
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
                    
                    {error && <p style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '0.875rem' }}>{error}</p>}

                    {}
                    <SubmitButton type="submit">
                        <LogIn size={20} />
                        Entrar
                    </SubmitButton>
                </form>
            </LoginFormContainer>
        </LoginWrapper>
    );
};

export default Login;