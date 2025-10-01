'use client';

import { ReactNode } from 'react';
import { Header } from './header';
import { Sidebar } from './sidebar';

interface MainLayoutProps {
  children: ReactNode;
  user?: {
    name: string;
    email: string;
    role: string;
    avatar?: string;
  };
  notifications?: number;
  showSidebar?: boolean;
}

export function MainLayout({ 
  children, 
  user, 
  notifications = 0, 
  showSidebar = true 
}: MainLayoutProps) {
  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <Header user={user} notifications={notifications} />
      
      <div className="flex flex-1 overflow-hidden">
        {showSidebar && (
          <aside className="hidden lg:block">
            <Sidebar userRole={user?.role as 'student' | 'college' | 'company'} />
          </aside>
        )}
        
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
