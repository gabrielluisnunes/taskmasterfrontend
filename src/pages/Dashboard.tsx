import React from 'react';
import styled from 'styled-components';
import Card from '../components/Dashboard/Card';
import { MoreHorizontal, Calendar, TrendingUp } from 'lucide-react'; 

const DashboardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr; 
    gap: 1.5rem; 
    
    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

const Dashboard: React.FC = () => {
    return (
        <DashboardGrid>
            
            <Card style={{ gridColumn: 'span 1' }}>
                <CardHeader>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1f2937' }}>Today Tasks</h3>
                    <MoreHorizontal size={20} color="#9ca3af" />
                </CardHeader>
                <div style={{ padding: '2rem 0', textAlign: 'center', color: '#6b7280' }}>
                    <TrendingUp size={32} style={{ marginBottom: '0.5rem' }} />
                    <p>Nenhuma tarefa pendente. Os dados serão carregados aqui.</p>
                </div>
            </Card>

            <Card style={{ gridColumn: 'span 1' }}>
                <CardHeader>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1f2937' }}>Calendar</h3>
                    <Calendar size={20} color="#9ca3af" />
                </CardHeader>
                <div style={{ padding: '2rem 0', textAlign: 'center', color: '#6b7280' }}>
                    <p>O calendário interativo será montado aqui.</p>
                </div>
            </Card>
            
            <Card style={{ gridColumn: 'span 3', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0' }}> 
                <p style={{ fontWeight: 600, color: '#047857' }}>
                    🔔 Aviso (Placeholder): Você está pronto para começar! Aguardando dados da API.
                </p>
            </Card>
            
            <Card style={{ gridColumn: 'span 2' }}>
                <CardHeader>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1f2937' }}>Task Progress</h3>
                    <MoreHorizontal size={20} color="#9ca3af" />
                </CardHeader>
                <div style={{ padding: '4rem 0', textAlign: 'center', color: '#6b7280' }}>
                    <p>Aqui será o gráfico de barras/progresso (usaremos Recharts).</p>
                </div>
            </Card>
            
            <Card style={{ gridColumn: 'span 1' }}>
                <CardHeader>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1f2937' }}>Task Timeline</h3>
                    <MoreHorizontal size={20} color="#9ca3af" />
                </CardHeader>
                <div style={{ padding: '4rem 0', textAlign: 'center', color: '#6b7280' }}>
                    <p>Este card exibirá o cronograma do projeto.</p>
                </div>
            </Card>

        </DashboardGrid>
    );
};

export default Dashboard;