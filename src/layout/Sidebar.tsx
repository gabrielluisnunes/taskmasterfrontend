import React from 'react';
import styled, { css } from 'styled-components';
import { Settings } from 'lucide-react'; 

interface NavItem {
  name: string;
  icon: React.ElementType<{ className?: string }>; 
  count: number;
  active: boolean;
  url: string;
}

interface Friend {
  name: string;
  status: 'online' | 'offline';
  avatar: string;
}

interface SidebarProps {
  navItems: NavItem[];
  friends: Friend[];
}

const SidebarContainer = styled.div`
  width: 288px; /* w-72 */
  background-color: white; 
  display: flex;
  flex-direction: column;
  border-right: 1px solid #f3f4f6; 
  min-height: 100vh;
`;

const LogoSection = styled.div`
  padding: 1.5rem; 
  border-bottom: 1px solid #f3f4f6; 
  display: flex;
  align-items: center;
  gap: 0.5rem; 
`;

const NavSection = styled.nav`
  flex: 1; 
  padding: 1rem; 
  display: flex;
  flex-direction: column;
  gap: 0.5rem; 
`;

const NavItemLink = styled.a<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem; 
  border-radius: 0.75rem; 
  transition: all 200ms ease;
  text-decoration: none;

  ${props =>
    props.active
      ? css`
          background-color: black;
          color: white;
          font-weight: 600; 
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); 
        `
      : css`
          color: #4b5563; 
          &:hover {
            background-color: #f3f4f6; 
            color: #111827; 
          }
        `}
`;

const NavCountBadge = styled.span<{ active: boolean }>`
  font-size: 0.75rem; 
  font-weight: 500; 
  padding: 0.125rem 0.5rem; 
  border-radius: 9999px; 
  
  ${props =>
    props.active
      ? css`
          background-color: white;
          color: black;
        `
      : css`
          background-color: #ef4444; 
          color: white;
        `}
`;

const FriendsSection = styled.div`
  padding: 1rem; 
  border-top: 1px solid #f3f4f6; 
`;




const Sidebar: React.FC<SidebarProps> = ({ navItems, friends }) => {
  return (
    <SidebarContainer>
      
      {/* 1. Logo e Título (Topo) */}
      <LogoSection>
        <Settings className="w-6 h-6" style={{ color: '#1f2937' }} /> {}
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>TaskMaster.</span>
      </LogoSection>

      {/* 2. Links de Navegação */}
      <NavSection>
        {navItems.map((item) => (
          <NavItemLink
            key={item.name}
            href={item.url}
            active={item.active} 
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}> {}
              <item.icon style={{ width: '1.25rem', height: '1.25rem' }} /> {}
              <span>{item.name}</span>
            </div>
            
            {item.count > 0 && (
              <NavCountBadge active={item.active}>
                {item.count}
              </NavCountBadge>
            )}
          </NavItemLink>
        ))}
      </NavSection>

      {}
      <FriendsSection>
        <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#6b7280', marginBottom: '0.75rem' }}>FRIENDS</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}> {}
          {friends.map((friend, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ position: 'relative' }}>
                  <img src={friend.avatar} alt={friend.name} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', bottom: 0, right: 0, width: '0.75rem', height: '0.75rem', backgroundColor: '#10b981', borderRadius: '50%', border: '2px solid white' }}></span>
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>{friend.name}</p>
                  <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>online</p>
                </div>
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 500, backgroundColor: '#ef4444', color: 'white', padding: '0.125rem 0.5rem', borderRadius: '9999px' }}>+2</span>
            </div>
          ))}
        </div>
      </FriendsSection>
    </SidebarContainer>
  );
};

export default Sidebar;