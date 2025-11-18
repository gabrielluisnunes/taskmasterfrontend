import React from 'react';
import { Home, MessageSquare, ListTodo, Users, Calendar, Settings } from 'lucide-react';


interface NavItem {
  name: string;
  icon: React.ElementType; 
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

const Sidebar: React.FC<SidebarProps> = ({ navItems, friends }) => {
  return (
    <div className="w-72 bg-white flex flex-col border-r border-gray-100 min-h-screen">
      
      {/* 1. Logo e Título (Topo) */}
      <div className="p-6 border-b border-gray-100">
        {/*  Conteúdo do Logo  */}
        <div className="flex items-center space-x-2">
          <Settings className="w-6 h-6 text-gray-800" /> 
          <span className="text-xl font-bold text-gray-900">TaskMaster.</span>
        </div>
      </div>

      {/* 2. Links de Navegação */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
            
            <a
                key={item.name}
                href={item.url}
                className={`flex items-center justify-between p-3 rounded-xl transition-colors duration-200
                ${item.active 
                    ? 'bg-black text-white font-semibold shadow-lg' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
                }
            >
                <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                </div>
                {item.count > 0 && (
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full 
                    ${item.active ? 'bg-white text-black' : 'bg-red-500 text-white'}`
                    }>
                    {item.count}
                    </span>
                )}
            </a>
        ))}
      </nav>

      {/* 3. Seção Amigos e Chat */}
      <div className="p-4 border-t border-gray-100">
        <h3 className="text-sm font-semibold text-gray-500 mb-3">FRIENDS</h3>
        <div className="space-y-3 mb-6">
          {friends.map((friend, index) => (
            
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img src={friend.avatar} alt={friend.name} className="w-10 h-10 rounded-full object-cover" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{friend.name}</p>
                  <p className="text-xs text-gray-500">online</p>
                </div>
              </div>
              <span className="text-xs font-medium bg-red-500 text-white px-2 py-0.5 rounded-full">+2</span>
            </div>
          ))}
        </div>

        {/* Chat de Michie */}
        {}
        <div className="bg-gray-50 p-4 rounded-xl space-y-2">
            <p className="text-sm font-semibold">Michie 👋</p>
            <div className="text-xs text-gray-600">
                <p>Today we will move on to the wireframe process</p>
                <p className="text-right text-gray-400 mt-1">12:30</p>
            </div>
            <button className="w-full text-center py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                Okay Michie
            </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;