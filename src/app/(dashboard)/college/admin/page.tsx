'use client';

import { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  FileText,
  Building2,
  Download,
  Upload,
  Search,
  Filter
} from 'lucide-react';

import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function CollegeAdminDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');

  // Mock user data
  const user = {
    name: 'Dr. Sharma',
    email: 'sharma@university.edu',
    role: 'college',
    avatar: '/avatars/dr-sharma.jpg',
  };

  const notifications = 5;

  // Mock data
  const stats = {
    totalStudents: 450,
    activeInternships: 287,
    complianceRate: 92,
    pendingApprovals: 12,
  };

  const departments = [
    { name: 'Computer Science', total: 120, active: 102, completed: 18, compliance: 85 },
    { name: 'Mechanical', total: 90, active: 65, completed: 25, compliance: 72 },
    { name: 'Electronics', total: 110, active: 86, completed: 24, compliance: 78 },
    { name: 'Civil', total: 80, active: 58, completed: 22, compliance: 73 },
    { name: 'Chemical', total: 50, active: 36, completed: 14, compliance: 70 },
  ];

  const riskAlerts = [
    { id: 1, type: 'critical', count: 23, message: 'Students without internship placements', icon: AlertTriangle, color: 'text-red-600 bg-red-50' },
    { id: 2, type: 'warning', count: 15, message: 'Students with incomplete work logs', icon: FileText, color: 'text-yellow-600 bg-yellow-50' },
    { id: 3, type: 'info', count: 8, message: 'Flagged companies pending review', icon: Building2, color: 'text-orange-600 bg-orange-50' },
    { id: 4, type: 'pending', count: 12, message: 'Students nearing completion deadline', icon: CheckCircle, color: 'text-blue-600 bg-blue-50' },
  ];

  const recentStudents = [
    { id: 1, name: 'John Doe', department: 'CSE', status: 'ongoing', progress: 85, company: 'TechCorp' },
    { id: 2, name: 'Jane Smith', department: 'Mech', status: 'searching', progress: 0, company: '-' },
    { id: 3, name: 'Mike Johnson', department: 'ECE', status: 'ongoing', progress: 72, company: 'DataFlow' },
    { id: 4, name: 'Sarah Williams', department: 'CSE', status: 'completed', progress: 100, company: 'StartupXYZ' },
    { id: 5, name: 'Tom Brown', department: 'Civil', status: 'ongoing', progress: 45, company: 'BuildTech' },
  ];

  const getStatusBadge = (status: string) => {
    const config = {
      ongoing: { label: 'Ongoing', className: 'bg-blue-50 text-blue-600' },
      searching: { label: 'Searching', className: 'bg-yellow-50 text-yellow-600' },
      completed: { label: 'Completed', className: 'bg-green-50 text-green-600' },
      at_risk: { label: 'At Risk', className: 'bg-red-50 text-red-600' },
    };
    const { label, className } = config[status as keyof typeof config] || config.searching;
    return <Badge className={`${className} px-2 py-0.5 rounded-full text-xs font-medium`}>{label}</Badge>;
  };

  return (
    <MainLayout user={user} notifications={notifications}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">College Admin Dashboard</h1>
            <p className="text-gray-600">
              Managing {stats.totalStudents} students across 12 departments
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Bulk Upload
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Welcome back, {user.name}! 🎓
              </h2>
              <p className="text-gray-600">
                Compliance Rate: {stats.complianceRate}% • {stats.pendingApprovals} items need your attention
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Students</p>
                <p className="text-2xl font-bold text-blue-600">{stats.totalStudents}</p>
                <p className="text-xs text-gray-500 mt-1">Across all departments</p>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Internships</p>
                <p className="text-2xl font-bold text-green-600">{stats.activeInternships}</p>
                <p className="text-xs text-gray-500 mt-1">{Math.round((stats.activeInternships / stats.totalStudents) * 100)}% of total</p>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Compliance Rate</p>
                <p className="text-2xl font-bold text-purple-600">{stats.complianceRate}%</p>
                <p className="text-xs text-gray-500 mt-1">Target: 95%</p>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Pending Approvals</p>
                <p className="text-2xl font-bold text-orange-600">{stats.pendingApprovals}</p>
                <p className="text-xs text-gray-500 mt-1">Requires action</p>
              </div>
              <div className="p-2 bg-orange-50 rounded-lg">
                <FileText className="h-5 w-5 text-orange-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Risk Alerts */}
        <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
          <CardHeader className="border-b border-gray-200 pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  Risk Alerts & Notifications
                </CardTitle>
                <CardDescription>Items requiring your attention</CardDescription>
              </div>
              <Button variant="outline" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {riskAlerts.map((alert) => (
                <div key={alert.id} className={`p-4 rounded-lg border ${alert.color}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <alert.icon className="h-5 w-5" />
                    <span className="text-2xl font-bold">{alert.count}</span>
                  </div>
                  <p className="text-sm font-medium">{alert.message}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Department Performance */}
        <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
          <CardHeader className="border-b border-gray-200 pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900">
              Department-wise Performance
            </CardTitle>
            <CardDescription>
              Internship compliance across departments
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {departments.map((dept, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">{dept.name}</span>
                    <span className="text-gray-600">
                      {dept.active} / {dept.total} active ({dept.compliance}%)
                    </span>
                  </div>
                  <Progress value={dept.compliance} className="h-2" />
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{dept.completed} completed</span>
                    <span>{dept.total - dept.active - dept.completed} searching</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Student Management Table */}
        <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
          <CardHeader className="border-b border-gray-200 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Student Directory
                </CardTitle>
                <CardDescription>
                  Manage and monitor student internships
                </CardDescription>
              </div>
              <Button size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Bulk Upload
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search students..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="cse">Computer Science</SelectItem>
                  <SelectItem value="mech">Mechanical</SelectItem>
                  <SelectItem value="ece">Electronics</SelectItem>
                  <SelectItem value="civil">Civil</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Table */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold">Name</TableHead>
                    <TableHead className="font-semibold">Department</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold">Company</TableHead>
                    <TableHead className="font-semibold">Progress</TableHead>
                    <TableHead className="font-semibold text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentStudents.map((student) => (
                    <TableRow key={student.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.department}</TableCell>
                      <TableCell>{getStatusBadge(student.status)}</TableCell>
                      <TableCell>{student.company}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full" 
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-600">{student.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
