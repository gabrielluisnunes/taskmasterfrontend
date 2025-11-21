import React, { type ReactNode } from 'react'; 
import styled from 'styled-components'; 
import Sidebar from './SideBar';
import Header from './Header'; 
import { Home, MessageSquare, ListTodo, Users, Calendar } from 'lucide-react'; 

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

const tempNavItems: NavItem[] = [
  { name: 'Dashboard', icon: Home, count: 0, active: true, url: '/dashboard' },
  { name: 'Messages', icon: MessageSquare, count: 6, active: false, url: '/messages' },
  { name: 'My Tasks', icon: ListTodo, count: 0, active: false, url: '/mytasks' },
  { name: 'Friends', icon: Users, count: 0, active: false, url: '/friends' },
  { name: 'Calendar', icon: Calendar, count: 2, active: false, url: '/calendar' },
];

const tempFriends: Friend[] = [
    { name: 'Michie', status: 'online', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'John', status: 'online', avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Sarah', status: 'online', avatar: 'https://i.pravatar.cc/150?img=3' },
    { name: 'David', status: 'online', avatar: 'https://i.pravatar.cc/150?img=4' },
];

interface MainLayoutProps {
  children: ReactNode;
}

const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f9fafb; /* bg-gray-50 */
`;

const ContentWrapper = styled.div`
  flex: 1; /* flex-1 */
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  padding: 2rem; /* p-8 */
  flex: 1; /* flex-1 */
  overflow-y: auto; /* overflow-y-auto */
`;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <MainContainer>
      {}
      <Sidebar 
          navItems={tempNavItems} 
          friends={tempFriends} 
      /> 
      
      {}
      <ContentWrapper>
        <Header /> 
        <MainContent>
          {children}
        </MainContent>
      </ContentWrapper>
    </MainContainer>
  );
};

export default MainLayout;