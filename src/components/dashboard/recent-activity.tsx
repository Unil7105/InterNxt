'use client';

import { 
  Briefcase, 
  FileText, 
  Calendar, 
  Award,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp
} from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ActivityItem {
  id: string;
  type: 'application' | 'interview' | 'work_log' | 'certificate' | 'deadline';
  title: string;
  description: string;
  timestamp: Date;
  status: 'success' | 'warning' | 'info' | 'error';
  actionUrl?: string;
}

const mockActivities: ActivityItem[] = [
  {
    id: '1',
    type: 'application',
    title: 'Application Shortlisted',
    description: 'Your application for Frontend Developer at TechCorp has been shortlisted',
    timestamp: new Date('2024-01-20T10:30:00'),
    status: 'success',
    actionUrl: '/student/applications',
  },
  {
    id: '2',
    type: 'interview',
    title: 'Interview Scheduled',
    description: 'Interview scheduled for Data Science Intern at DataFlow Inc on Feb 10, 2024',
    timestamp: new Date('2024-01-19T14:15:00'),
    status: 'info',
    actionUrl: '/student/applications',
  },
  {
    id: '3',
    type: 'work_log',
    title: 'Work Log Approved',
    description: 'Your work log for Week 2 has been approved by your mentor',
    timestamp: new Date('2024-01-18T09:45:00'),
    status: 'success',
    actionUrl: '/student/work-logs',
  },
  {
    id: '4',
    type: 'deadline',
    title: 'Application Deadline',
    description: 'Full Stack Developer at StartupXYZ closes in 3 days',
    timestamp: new Date('2024-01-17T16:20:00'),
    status: 'warning',
    actionUrl: '/student/internships',
  },
  {
    id: '5',
    type: 'certificate',
    title: 'Certificate Generated',
    description: 'Your certificate for React Internship has been generated',
    timestamp: new Date('2024-01-16T11:30:00'),
    status: 'success',
    actionUrl: '/student/certificates',
  },
];

const iconMap = {
  application: Briefcase,
  interview: Calendar,
  work_log: FileText,
  certificate: Award,
  deadline: Clock,
};

const statusConfig = {
  success: {
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  warning: {
    icon: AlertCircle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  info: {
    icon: Clock,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  error: {
    icon: AlertCircle,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
};

export function RecentActivity() {
  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return 'Yesterday';
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
      <CardHeader className="border-b border-gray-200 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900">
              Recent Activity
            </CardTitle>
            <CardDescription>
              Your latest updates and notifications
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-200">
          {mockActivities.map((activity) => {
            const IconComponent = iconMap[activity.type];
            const StatusIcon = statusConfig[activity.status].icon;
            const statusStyle = statusConfig[activity.status];

            return (
              <div key={activity.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${statusStyle.bgColor} ${statusStyle.borderColor} border`}>
                    <IconComponent className={`h-4 w-4 ${statusStyle.color}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-gray-900 truncate">
                        {activity.title}
                      </h4>
                      <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                        {formatTimeAgo(activity.timestamp)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {activity.description}
                    </p>
                    {activity.actionUrl && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mt-2 h-6 px-2 text-xs text-blue-600 hover:text-blue-700"
                      >
                        View Details
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export function SkillMatchRecommendations() {
  const recommendations = [
    {
      id: '1',
      title: 'Frontend Developer Intern',
      company: 'TechCorp Solutions',
      skillMatch: 95,
      skills: ['React', 'JavaScript', 'TypeScript'],
      stipend: 15000,
      location: 'Bangalore',
    },
    {
      id: '2',
      title: 'Data Science Intern',
      company: 'DataFlow Inc',
      skillMatch: 88,
      skills: ['Python', 'Machine Learning', 'Data Analysis'],
      stipend: 20000,
      location: 'Mumbai',
    },
    {
      id: '3',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      skillMatch: 92,
      skills: ['React', 'Node.js', 'MongoDB'],
      stipend: 12000,
      location: 'Delhi',
    },
  ];

  return (
    <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
      <CardHeader className="border-b border-gray-200 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900">
              Recommended for You
            </CardTitle>
            <CardDescription>
              Internships that match your skills
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-200">
          {recommendations.map((internship) => (
            <div key={internship.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">
                    {internship.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {internship.company} • {internship.location}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full text-xs font-medium">
                      ₹{internship.stipend.toLocaleString()}/month
                    </Badge>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">
                        {internship.skillMatch}% match
                      </span>
                    </div>
                  </div>
                </div>
                <Button size="sm" className="ml-4">
                  Apply
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
