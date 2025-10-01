'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Briefcase, 
  FileText, 
  Calendar, 
  Award, 
  Users, 
  BarChart, 
  GraduationCap,
  Settings,
  HelpCircle
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { ROUTES } from '@/lib/constants';

interface SidebarProps {
  userRole?: 'student' | 'college' | 'company';
  className?: string;
}

const navigationItems = {
  student: [
    {
      title: 'Dashboard',
      href: ROUTES.STUDENT.DASHBOARD,
      icon: Home,
    },
    {
      title: 'Internships',
      href: ROUTES.STUDENT.INTERNSHIPS,
      icon: Briefcase,
    },
    {
      title: 'Applications',
      href: ROUTES.STUDENT.APPLICATIONS,
      icon: FileText,
    },
    {
      title: 'Work Logs',
      href: ROUTES.STUDENT.WORK_LOGS,
      icon: Calendar,
    },
    {
      title: 'Certificates',
      href: ROUTES.STUDENT.CERTIFICATES,
      icon: Award,
    },
  ],
  college: [
    {
      title: 'Admin Dashboard',
      href: ROUTES.COLLEGE.ADMIN,
      icon: BarChart,
    },
    {
      title: 'Faculty Dashboard',
      href: ROUTES.COLLEGE.FACULTY,
      icon: GraduationCap,
    },
    {
      title: 'Students',
      href: ROUTES.COLLEGE.STUDENTS,
      icon: Users,
    },
    {
      title: 'Reports',
      href: ROUTES.COLLEGE.REPORTS,
      icon: BarChart,
    },
  ],
  company: [
    {
      title: 'Dashboard',
      href: ROUTES.COMPANY.DASHBOARD,
      icon: Home,
    },
    {
      title: 'Internships',
      href: ROUTES.COMPANY.INTERNSHIPS,
      icon: Briefcase,
    },
    {
      title: 'Applications',
      href: ROUTES.COMPANY.APPLICATIONS,
      icon: FileText,
    },
    {
      title: 'Interns',
      href: ROUTES.COMPANY.INTERNS,
      icon: Users,
    },
  ],
};

export function Sidebar({ userRole = 'student', className }: SidebarProps) {
  const pathname = usePathname();
  const items = navigationItems[userRole] || navigationItems.student;

  return (
    <div className={cn('flex h-full w-64 flex-col border-r border-gray-200 bg-white', className)}>
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto space-y-1 p-4">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 p-4 flex-shrink-0">
        <div className="space-y-1">
          <Link
            href="/settings"
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              pathname === '/settings'
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            )}
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
          <Link
            href="/help"
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              pathname === '/help'
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            )}
          >
            <HelpCircle className="h-4 w-4" />
            Help & Support
          </Link>
        </div>
      </div>
    </div>
  );
}
