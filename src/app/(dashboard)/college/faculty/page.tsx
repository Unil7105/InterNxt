'use client';

import { useState } from 'react';
import { 
  Users, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Star,
  FileText,
  Calendar,
  Eye
} from 'lucide-react';

import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function FacultyDashboard() {
  const [activeTab, setActiveTab] = useState('students');

  // Mock user data
  const user = {
    name: 'Prof. Kumar',
    email: 'kumar@university.edu',
    role: 'college',
    avatar: '/avatars/prof-kumar.jpg',
  };

  const notifications = 3;

  // Mock data
  const stats = {
    totalStudents: 15,
    activeInternships: 12,
    completedInternships: 2,
    needAttention: 1,
  };

  const pendingActions = [
    { id: 1, type: 'work_logs', count: 5, message: 'Work logs awaiting review', icon: FileText },
    { id: 2, type: 'evaluations', count: 2, message: 'Mid-term evaluations due', icon: Star },
    { id: 3, type: 'final', count: 1, message: 'Final evaluation pending', icon: CheckCircle },
  ];

  const assignedStudents = [
    {
      id: 1,
      name: 'John Doe',
      department: 'CSE',
      year: '3rd Year',
      company: 'TechCorp Solutions',
      position: 'Frontend Developer',
      progress: 85,
      workLogsStatus: 'up-to-date',
      lastSubmission: '2 days ago',
      performance: 4.5,
      status: 'ongoing',
    },
    {
      id: 2,
      name: 'Jane Smith',
      department: 'CSE',
      year: '3rd Year',
      company: 'DataFlow Inc',
      position: 'Data Science Intern',
      progress: 72,
      workLogsStatus: 'pending',
      lastSubmission: '5 days ago',
      performance: 4.0,
      pendingLogs: 2,
      status: 'ongoing',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      department: 'CSE',
      year: '4th Year',
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      progress: 100,
      workLogsStatus: 'up-to-date',
      lastSubmission: '1 week ago',
      performance: 5.0,
      status: 'completed',
    },
  ];

  const workLogsForReview = [
    {
      id: 1,
      studentName: 'John Doe',
      date: 'Jan 15, 2024',
      hours: 8,
      company: 'TechCorp',
      tasks: 'Implemented user authentication module and fixed dashboard bugs',
      status: 'pending',
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      date: 'Jan 14, 2024',
      hours: 7,
      company: 'DataFlow',
      tasks: 'Created machine learning model for customer segmentation',
      status: 'pending',
    },
  ];

  const getWorkLogBadge = (status: string) => {
    if (status === 'up-to-date') {
      return <Badge className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full text-xs">✓ Up-to-date</Badge>;
    }
    return <Badge className="bg-yellow-50 text-yellow-600 px-2 py-0.5 rounded-full text-xs">⚠ Pending</Badge>;
  };

  const getStatusBadge = (status: string) => {
    const config = {
      ongoing: { label: 'Ongoing', className: 'bg-blue-50 text-blue-600' },
      completed: { label: 'Completed', className: 'bg-green-50 text-green-600' },
      at_risk: { label: 'At Risk', className: 'bg-red-50 text-red-600' },
    };
    const { label, className } = config[status as keyof typeof config] || config.ongoing;
    return <Badge className={`${className} px-2 py-0.5 rounded-full text-xs font-medium`}>{label}</Badge>;
  };

  return (
    <MainLayout user={user} notifications={notifications}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Faculty Mentor Dashboard</h1>
            <p className="text-gray-600">
              You are mentoring {stats.totalStudents} students this semester
            </p>
          </div>
        </div>

        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Welcome, {user.name}! 👋
              </h2>
              <p className="text-gray-600">
                {pendingActions.reduce((sum, action) => sum + action.count, 0)} items need your attention
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">My Students</p>
                <p className="text-2xl font-bold text-blue-600">{stats.totalStudents}</p>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active</p>
                <p className="text-2xl font-bold text-green-600">{stats.activeInternships}</p>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Completed</p>
                <p className="text-2xl font-bold text-purple-600">{stats.completedInternships}</p>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Need Attention</p>
                <p className="text-2xl font-bold text-orange-600">{stats.needAttention}</p>
              </div>
              <div className="p-2 bg-orange-50 rounded-lg">
                <AlertCircle className="h-5 w-5 text-orange-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Pending Actions */}
        <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
          <CardHeader className="border-b border-gray-200 pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900">
              Pending Actions
            </CardTitle>
            <CardDescription>Items requiring your review</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pendingActions.map((action) => (
                <div key={action.id} className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <action.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{action.count}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{action.message}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="students">My Students</TabsTrigger>
            <TabsTrigger value="reviews">Pending Reviews</TabsTrigger>
          </TabsList>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assignedStudents.map((student) => (
                <Card key={student.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={`/avatars/${student.name.toLowerCase().replace(' ', '-')}.jpg`} />
                        <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-base font-semibold text-gray-900">
                          {student.name}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {student.department} - {student.year}
                        </CardDescription>
                      </div>
                      {getStatusBadge(student.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Internship Details */}
                    <div>
                      <p className="text-sm font-medium text-gray-700">{student.position}</p>
                      <p className="text-xs text-gray-500">{student.company}</p>
                    </div>

                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium text-blue-600">{student.progress}%</span>
                      </div>
                      <Progress value={student.progress} className="h-2" />
                    </div>

                    {/* Work Logs Status */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Work Logs:</span>
                        {getWorkLogBadge(student.workLogsStatus)}
                      </div>
                      {student.pendingLogs && (
                        <p className="text-xs text-yellow-600">{student.pendingLogs} logs pending review</p>
                      )}
                      <p className="text-xs text-gray-500">Last: {student.lastSubmission}</p>
                    </div>

                    {/* Performance */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Performance:</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < Math.floor(student.performance) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="text-sm font-medium ml-1">{student.performance}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-3 w-3 mr-1" />
                        View Details
                      </Button>
                      {student.pendingLogs ? (
                        <Button size="sm" className="flex-1">
                          Review Logs
                        </Button>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-4 mt-6">
            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Work Logs Awaiting Review
                </CardTitle>
                <CardDescription>
                  Review and provide feedback on student work logs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {workLogsForReview.map((log) => (
                  <Card key={log.id} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900">{log.studentName}</h4>
                          <p className="text-xs text-gray-500">
                            {log.company} • {log.date} • {log.hours} hours
                          </p>
                        </div>
                        <Badge className="bg-yellow-50 text-yellow-600">Pending</Badge>
                      </div>
                      <p className="text-sm text-gray-700 mb-4">{log.tasks}</p>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Approve
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Provide Feedback
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
