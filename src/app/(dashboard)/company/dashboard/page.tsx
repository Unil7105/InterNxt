'use client';

import { useState } from 'react';
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  Star,
  Plus,
  FileCheck,
  Clock,
  CheckCircle,
  Calendar,
  Award
} from 'lucide-react';

import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function CompanyDashboard() {
  // Mock user data
  const user = {
    name: 'TechCorp Solutions',
    email: 'hr@techcorp.com',
    role: 'company',
    avatar: '/logos/techcorp.png',
  };

  const notifications = 8;

  // Mock data
  const stats = {
    activePositions: 8,
    totalApplications: 127,
    activeInterns: 45,
    completionRate: 94,
  };

  const quickActions = [
    {
      title: 'Post New Internship',
      description: 'Create a new internship position',
      icon: Plus,
      color: 'bg-blue-50 text-blue-600',
      href: '/company/internships/new',
    },
    {
      title: 'Review Applications',
      description: '23 new applications',
      icon: FileCheck,
      color: 'bg-green-50 text-green-600',
      href: '/company/applications',
      badge: 23,
    },
    {
      title: 'Manage Interns',
      description: '45 active interns',
      icon: Users,
      color: 'bg-purple-50 text-purple-600',
      href: '/company/interns',
    },
  ];

  const activeListings = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      status: 'active',
      applications: 23,
      shortlisted: 3,
      hired: 2,
      deadline: 'Feb 15, 2024',
    },
    {
      id: 2,
      title: 'Data Science Intern',
      status: 'active',
      applications: 45,
      shortlisted: 8,
      hired: 3,
      deadline: 'Feb 20, 2024',
    },
    {
      id: 3,
      title: 'Backend Developer',
      status: 'closed',
      applications: 89,
      shortlisted: 15,
      hired: 5,
      postedDate: 'Dec 1, 2023',
    },
  ];

  const activeInterns = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Frontend Developer',
      progress: 85,
      workLogs: 'up-to-date',
      performance: 5,
      due: 'Feb 15, 2024',
      avatar: '/avatars/john-doe.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Data Science',
      progress: 72,
      workLogs: 'pending',
      pendingLogs: 2,
      performance: 4,
      due: 'Mar 20, 2024',
      avatar: '/avatars/jane-smith.jpg',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      position: 'Backend Developer',
      progress: 90,
      workLogs: 'up-to-date',
      performance: 5,
      due: 'Feb 28, 2024',
      avatar: '/avatars/mike-johnson.jpg',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'application',
      message: 'New application for Frontend Developer position',
      time: '2 hours ago',
      icon: FileCheck,
    },
    {
      id: 2,
      type: 'interview',
      message: 'Interview scheduled with Sarah Williams',
      time: '5 hours ago',
      icon: Calendar,
    },
    {
      id: 3,
      type: 'work_log',
      message: 'John Doe submitted work log for review',
      time: '1 day ago',
      icon: CheckCircle,
    },
    {
      id: 4,
      type: 'completion',
      message: 'Mike Johnson completed internship',
      time: '2 days ago',
      icon: Award,
    },
  ];

  const getStatusBadge = (status: string) => {
    const config = {
      active: { label: 'Active', className: 'bg-green-50 text-green-600' },
      closed: { label: 'Closed', className: 'bg-gray-50 text-gray-600' },
      paused: { label: 'Paused', className: 'bg-yellow-50 text-yellow-600' },
    };
    const { label, className } = config[status as keyof typeof config] || config.active;
    return <Badge className={`${className} px-2 py-0.5 rounded-full text-xs font-medium`}>{label}</Badge>;
  };

  return (
    <MainLayout user={user} notifications={notifications}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Company Dashboard</h1>
            <p className="text-gray-600">
              Managing {stats.activeInterns} active interns across {stats.activePositions} positions
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Post New Internship
          </Button>
        </div>

        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Welcome back, {user.name}! 🚀
              </h2>
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-50 text-purple-600 px-3 py-1">
                  <Star className="h-3 w-3 mr-1" />
                  Premium Verified
                </Badge>
                <span className="text-gray-600">Completion Rate: {stats.completionRate}%</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Internships</p>
                <p className="text-2xl font-bold text-blue-600">{stats.activePositions}</p>
                <p className="text-xs text-gray-500 mt-1">Open positions</p>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <Briefcase className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Applications</p>
                <p className="text-2xl font-bold text-green-600">{stats.totalApplications}</p>
                <Badge className="bg-green-50 text-green-600 px-2 py-0.5 text-xs mt-1">
                  +23 new
                </Badge>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <FileCheck className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Interns</p>
                <p className="text-2xl font-bold text-purple-600">{stats.activeInterns}</p>
                <p className="text-xs text-gray-500 mt-1">Currently working</p>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Completion Rate</p>
                <p className="text-2xl font-bold text-orange-600">{stats.completionRate}%</p>
                <p className="text-xs text-gray-500 mt-1">Success rate</p>
              </div>
              <div className="p-2 bg-orange-50 rounded-lg">
                <TrendingUp className="h-5 w-5 text-orange-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
          <CardHeader className="border-b border-gray-200 pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900">
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickActions.map((action, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-lg ${action.color} group-hover:scale-105 transition-transform`}>
                      <action.icon className="h-6 w-6" />
                    </div>
                    {action.badge && (
                      <Badge className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                        {action.badge}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Listings and Interns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Listings */}
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
            <CardHeader className="border-b border-gray-200 pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Your Internship Listings
                  </CardTitle>
                  <CardDescription>Active and recent postings</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Post New
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {activeListings.map((listing) => (
                <div key={listing.id} className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-gray-900">{listing.title}</h4>
                    {getStatusBadge(listing.status)}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                    <span>{listing.applications} Applications</span>
                    <span>•</span>
                    <span>{listing.shortlisted} Shortlisted</span>
                    <span>•</span>
                    <span>{listing.hired} Hired</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {listing.status === 'active' ? `Deadline: ${listing.deadline}` : `Posted: ${listing.postedDate}`}
                    </span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                        Manage
                      </Button>
                      {listing.status === 'active' && (
                        <Button size="sm" className="h-7 px-2 text-xs">
                          Edit
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Active Interns */}
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
            <CardHeader className="border-b border-gray-200 pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Current Interns
                  </CardTitle>
                  <CardDescription>Active internship progress</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {activeInterns.map((intern) => (
                <div key={intern.id} className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={intern.avatar} />
                      <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                        {intern.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900">{intern.name}</h4>
                      <p className="text-xs text-gray-600">{intern.position}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${i < intern.performance ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Progress: {intern.progress}%</span>
                      <span className="text-gray-500">Due: {intern.due}</span>
                    </div>
                    <Progress value={intern.progress} className="h-1.5" />
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Work Logs:</span>
                        {intern.workLogs === 'up-to-date' ? (
                          <Badge className="bg-green-50 text-green-600 px-2 py-0 text-xs">✓ Current</Badge>
                        ) : (
                          <Badge className="bg-yellow-50 text-yellow-600 px-2 py-0 text-xs">
                            ⚠ {intern.pendingLogs} Pending
                          </Badge>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
          <CardHeader className="border-b border-gray-200 pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900">
              Recent Activity
            </CardTitle>
            <CardDescription>Latest updates and notifications</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <activity.icon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
