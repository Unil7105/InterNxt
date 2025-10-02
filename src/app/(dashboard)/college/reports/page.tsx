'use client';

import { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Calendar,
  Users,
  Building2,
  CheckCircle,
  AlertTriangle,
  FileText,
  PieChart,
  Activity,
  Target,
  Award,
  Clock
} from 'lucide-react';

import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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

export default function CollegeReportsPage() {
  const [reportType, setReportType] = useState('overview');
  const [timeRange, setTimeRange] = useState('current_semester');

  // Mock user data
  const user = {
    name: 'Dr. Sharma',
    email: 'sharma@university.edu',
    role: 'college',
    avatar: '/avatars/dr-sharma.jpg',
  };

  const notifications = 5;

  // Mock data for reports
  const overviewStats = {
    totalStudents: 450,
    placedStudents: 287,
    placementRate: 63.8,
    avgStipend: 18500,
    topPerformingDept: 'Computer Science',
    complianceRate: 92,
    avgGPA: 8.3,
    totalCompanies: 45
  };

  const departmentStats = [
    { name: 'Computer Science', total: 120, placed: 95, rate: 79.2, avgStipend: 22000, avgGPA: 8.7 },
    { name: 'Mechanical', total: 90, placed: 65, rate: 72.2, avgStipend: 16500, avgGPA: 8.1 },
    { name: 'Electronics', total: 110, placed: 78, rate: 70.9, avgStipend: 19500, avgGPA: 8.4 },
    { name: 'Civil', total: 80, placed: 52, rate: 65.0, avgStipend: 14500, avgGPA: 7.9 },
    { name: 'Chemical', total: 50, placed: 32, rate: 64.0, avgStipend: 18000, avgGPA: 8.2 },
  ];

  const companyStats = [
    { name: 'TechCorp Solutions', students: 25, avgStipend: 25000, rating: 4.8, type: 'Technology' },
    { name: 'DataFlow Analytics', students: 18, avgStipend: 22000, rating: 4.6, type: 'Data Science' },
    { name: 'StartupXYZ Technologies', students: 15, avgStipend: 20000, rating: 4.5, type: 'Startup' },
    { name: 'BuildTech Corp', students: 12, avgStipend: 16000, rating: 4.3, type: 'Construction' },
    { name: 'ChemTech Industries', students: 10, avgStipend: 18000, rating: 4.4, type: 'Chemical' },
  ];

  const monthlyTrends = [
    { month: 'Jan', placed: 45, applications: 120 },
    { month: 'Feb', placed: 52, applications: 135 },
    { month: 'Mar', placed: 38, applications: 110 },
    { month: 'Apr', placed: 41, applications: 125 },
    { month: 'May', placed: 35, applications: 98 },
    { month: 'Jun', placed: 48, applications: 140 },
  ];

  const skillDemand = [
    { skill: 'React/JavaScript', demand: 95, students: 120, gap: -25 },
    { skill: 'Python', demand: 88, students: 95, gap: -7 },
    { skill: 'Machine Learning', demand: 75, students: 60, gap: -15 },
    { skill: 'Data Analysis', demand: 70, students: 80, gap: 10 },
    { skill: 'Cloud Computing', demand: 65, students: 45, gap: -20 },
    { skill: 'Mobile Development', demand: 60, students: 70, gap: 10 },
  ];

  const complianceReport = [
    { category: 'Work Logs Submission', current: 92, target: 95, status: 'warning' },
    { category: 'Mentor Meetings', current: 88, target: 90, status: 'warning' },
    { category: 'Mid-term Reviews', current: 95, target: 95, status: 'good' },
    { category: 'Final Presentations', current: 78, target: 85, status: 'critical' },
    { category: 'Documentation', current: 85, target: 90, status: 'warning' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600 bg-green-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'critical': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="h-4 w-4" />;
      case 'warning': return <AlertTriangle className="h-4 w-4" />;
      case 'critical': return <AlertTriangle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <MainLayout user={user} notifications={notifications}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
            <p className="text-gray-600">
              Comprehensive insights into student internship performance and trends
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-48">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Time Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current_semester">Current Semester</SelectItem>
                <SelectItem value="last_semester">Last Semester</SelectItem>
                <SelectItem value="academic_year">Academic Year</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Report Type Selector */}
        <div className="flex gap-2">
          <Button
            variant={reportType === 'overview' ? 'default' : 'outline'}
            onClick={() => setReportType('overview')}
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Overview
          </Button>
          <Button
            variant={reportType === 'department' ? 'default' : 'outline'}
            onClick={() => setReportType('department')}
          >
            <Users className="h-4 w-4 mr-2" />
            Department Analysis
          </Button>
          <Button
            variant={reportType === 'company' ? 'default' : 'outline'}
            onClick={() => setReportType('company')}
          >
            <Building2 className="h-4 w-4 mr-2" />
            Company Analysis
          </Button>
          <Button
            variant={reportType === 'compliance' ? 'default' : 'outline'}
            onClick={() => setReportType('compliance')}
          >
            <Target className="h-4 w-4 mr-2" />
            Compliance
          </Button>
        </div>

        {/* Overview Report */}
        {reportType === 'overview' && (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Placement Rate</p>
                    <p className="text-3xl font-bold text-blue-600">{overviewStats.placementRate}%</p>
                    <p className="text-xs text-gray-500 mt-1">{overviewStats.placedStudents} of {overviewStats.totalStudents} students</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Average Stipend</p>
                    <p className="text-3xl font-bold text-green-600">₹{overviewStats.avgStipend.toLocaleString()}</p>
                    <p className="text-xs text-gray-500 mt-1">Per month</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Compliance Rate</p>
                    <p className="text-3xl font-bold text-purple-600">{overviewStats.complianceRate}%</p>
                    <p className="text-xs text-gray-500 mt-1">Target: 95%</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Partner Companies</p>
                    <p className="text-3xl font-bold text-orange-600">{overviewStats.totalCompanies}</p>
                    <p className="text-xs text-gray-500 mt-1">Active partnerships</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <Building2 className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Monthly Trends */}
            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
              <CardHeader className="border-b border-gray-200 pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900">Monthly Placement Trends</CardTitle>
                <CardDescription>Placement and application trends over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {monthlyTrends.map((trend, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-gray-900">{trend.month}</span>
                        <span className="text-gray-600">{trend.placed} placed / {trend.applications} applications</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${(trend.placed / trend.applications) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500 w-12 text-right">
                          {Math.round((trend.placed / trend.applications) * 100)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skill Demand Analysis */}
            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
              <CardHeader className="border-b border-gray-200 pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900">Skill Demand vs Supply</CardTitle>
                <CardDescription>Industry demand vs student skill availability</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {skillDemand.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-gray-900">{skill.skill}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-gray-600">Demand: {skill.demand}%</span>
                          <span className="text-gray-600">Students: {skill.students}</span>
                          <Badge className={skill.gap < 0 ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}>
                            {skill.gap < 0 ? `${Math.abs(skill.gap)} gap` : `${skill.gap} surplus`}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${skill.demand}%` }}
                          ></div>
                        </div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${(skill.students / 120) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Department Analysis */}
        {reportType === 'department' && (
          <div className="space-y-6">
            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
              <CardHeader className="border-b border-gray-200 pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900">Department Performance</CardTitle>
                <CardDescription>Placement statistics by department</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {departmentStats.map((dept, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{dept.name}</h3>
                          <p className="text-sm text-gray-600">{dept.placed} of {dept.total} students placed</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{dept.rate}%</div>
                          <div className="text-sm text-gray-500">Placement Rate</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Placement Progress</span>
                          <span>{dept.rate}%</span>
                        </div>
                        <Progress value={dept.rate} className="h-3" />
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Avg Stipend: </span>
                            <span className="font-medium">₹{dept.avgStipend.toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Avg GPA: </span>
                            <span className="font-medium">{dept.avgGPA}/10</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Company Analysis */}
        {reportType === 'company' && (
          <div className="space-y-6">
            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
              <CardHeader className="border-b border-gray-200 pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900">Company Performance</CardTitle>
                <CardDescription>Top performing companies and their statistics</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold">Company</TableHead>
                        <TableHead className="font-semibold">Students</TableHead>
                        <TableHead className="font-semibold">Avg Stipend</TableHead>
                        <TableHead className="font-semibold">Rating</TableHead>
                        <TableHead className="font-semibold">Type</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {companyStats.map((company, index) => (
                        <TableRow key={index} className="hover:bg-gray-50">
                          <TableCell className="font-medium">{company.name}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-gray-400" />
                              <span>{company.students}</span>
                            </div>
                          </TableCell>
                          <TableCell>₹{company.avgStipend.toLocaleString()}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <span className="font-medium">{company.rating}</span>
                              <span className="text-yellow-500">★</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                              {company.type}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Compliance Report */}
        {reportType === 'compliance' && (
          <div className="space-y-6">
            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
              <CardHeader className="border-b border-gray-200 pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900">Compliance Dashboard</CardTitle>
                <CardDescription>Track compliance across different categories</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {complianceReport.map((item, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(item.status)}
                          <span className="font-medium text-gray-900">{item.category}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-600">Target: {item.target}%</span>
                          <Badge className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                            {item.current}%
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Current Progress</span>
                          <span>{item.current}%</span>
                        </div>
                        <Progress value={item.current} className="h-2" />
                        <div className="text-xs text-gray-500">
                          {item.current < item.target ? `${item.target - item.current}% below target` : 'Target achieved'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
