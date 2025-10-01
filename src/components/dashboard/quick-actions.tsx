'use client';

import Link from 'next/link';
import { 
  Briefcase, 
  FileText, 
  Calendar, 
  Award,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DASHBOARD_CARDS } from '@/lib/constants';

interface QuickActionsProps {
  userRole: 'student' | 'college' | 'company';
}

const iconMap = {
  Briefcase,
  FileText,
  Calendar,
  Award,
  Users: Briefcase,
  BarChart: FileText,
  GraduationCap: Award,
  Plus: Briefcase,
  FileCheck: FileText,
};

export function QuickActions({ userRole }: QuickActionsProps) {
  const actions = DASHBOARD_CARDS[userRole.toUpperCase() as keyof typeof DASHBOARD_CARDS] || DASHBOARD_CARDS.STUDENT;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {actions.map((action, index) => {
        const IconComponent = iconMap[action.icon as keyof typeof iconMap] || Briefcase;
        
        return (
          <Card 
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 group cursor-pointer"
          >
            <Link href={action.href}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${action.color} group-hover:scale-105 transition-transform duration-200`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {action.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {action.description}
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>
        );
      })}
    </div>
  );
}

export function StudentQuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {/* Profile Completeness */}
      <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Profile Completeness
            </h3>
            <p className="text-2xl font-bold text-blue-600 mt-1">85%</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg">
            <CheckCircle className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Complete your profile to increase visibility
        </p>
      </Card>

      {/* Active Applications */}
      <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Active Applications
            </h3>
            <p className="text-2xl font-bold text-green-600 mt-1">3</p>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full text-xs font-medium">
            +2 this week
          </Badge>
        </div>
      </Card>

      {/* Upcoming Deadlines */}
      <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Upcoming Deadlines
            </h3>
            <p className="text-2xl font-bold text-orange-600 mt-1">2</p>
          </div>
          <div className="p-3 bg-orange-50 rounded-lg">
            <Clock className="h-6 w-6 text-orange-600" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full text-xs font-medium">
            Next: 3 days
          </Badge>
        </div>
      </Card>
    </div>
  );
}
