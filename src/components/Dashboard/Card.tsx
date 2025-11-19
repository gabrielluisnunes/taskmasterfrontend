import React, { type ReactNode } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: white;
    border-radius: 1rem; 
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06);
`;

interface CardProps {
    children: ReactNode;
    title?: string;
    style?: React.CSSProperties; 
}

const Card: React.FC<CardProps> = ({ children, title, style }) => {
    return (
        <CardContainer style={style}>
            {title && (
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#1f2937' }}>
                    {title}
                </h2>
            )}
            {children}
        </CardContainer>
    );
};

export default Card;