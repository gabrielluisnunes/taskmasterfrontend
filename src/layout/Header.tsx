import React from 'react';
import styled from 'styled-components';
import { Search, Calendar, Bell } from 'lucide-react';
import { useAppStore } from '../store/useAppStore'; 



const HeaderContainer = styled.header`
    background-color: white; 
    padding: 1rem 2rem;
    border-bottom: 1px solid #e5e7eb; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 80px; /* Altura fixa para alinhar com o design */
`;

const SearchBar = styled.div`
    flex-grow: 1; 
    max-width: 400px; 
    margin-right: 2rem;
    position: relative;
    /* Ajuste para garantir que o SearchBar alinhe bem no centro do Header */
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 3rem; 
    border: 1px solid #d1d5db; 
    border-radius: 0.75rem; 
    font-size: 0.875rem;
    color: #4b5563;
    outline: none;
    transition: border-color 200ms;

    &:focus {
        border-color: black;
    }

    &::placeholder {
        color: #9ca3af;
    }
`;


const SearchIconWrapper = styled(Search)`
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
    color: #9ca3af;
`;

const ActionGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem; 
`;

const ActionButton = styled.button`
    background-color: #f3f4f6; 
    border: none;
    border-radius: 50%;
    padding: 0.75rem; 
    cursor: pointer;
    transition: background-color 200ms;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    &:hover {
        background-color: #e5e7eb; 
    }
`;


const IconStyle = styled.div`
    width: 1.25rem; 
    height: 1.25rem; 
    color: #6b7280;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NotificationBadge = styled.span`
    position: absolute;
    top: 5px;
    right: 5px;
    width: 10px;
    height: 10px;
    background-color: #ef4444; 
    border-radius: 50%;
`;

const UserProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem; 
    padding-left: 1.5rem; 
    border-left: 1px solid #e5e7eb; 
`;

const UserDetails = styled.div`
    p {
        font-size: 0.875rem; 
        font-weight: 600; 
        color: #111827;
        line-height: 1;
    }
    span {
        font-size: 0.75rem; 
        color: #6b7280;
        line-height: 1;
    }
`;

const Avatar = styled.img`
    width: 2.75rem; 
    height: 2.75rem; 
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid black; 
`;


const Header: React.FC = () => {
    const { user, notificationsCount } = useAppStore(); 

    return (
        <HeaderContainer>
            
            {}
            <SearchBar>
                {}
                <SearchIconWrapper />
                <SearchInput placeholder="Start searching here..." />
            </SearchBar>

            {}
            <ActionGroup>
                {}
                <ActionButton>
                    <IconStyle><Calendar /></IconStyle>
                </ActionButton>
                
                {}
                <ActionButton>
                    <IconStyle><Bell /></IconStyle>
                    {notificationsCount > 0 && <NotificationBadge />}
                </ActionButton>
            </ActionGroup>

            {}
            <UserProfile>
                <UserDetails>
                    <p>{user.name}</p> 
                    <span>{user.title}</span>
                </UserDetails>
                <Avatar src={user.avatarUrl} alt="User Avatar" />
            </UserProfile>

        </HeaderContainer>
    );
};

export default Header;