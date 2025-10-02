'use client';

import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  CheckCircle, 
  XCircle, 
  Clock,
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Star,
  MoreVertical,
  FileText,
  MessageSquare,
  Send,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  Award,
  BookOpen,
  Target,
  BarChart3,
  Clock3
} from 'lucide-react';

import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CompanyInterns() {
  // Mock user data
  const user = {
    name: 'TechCorp Solutions',
    email: 'hr@techcorp.com',
    role: 'company',
    avatar: '/logos/techcorp.png',
  };

  const notifications = 8;

  // Mock interns data
  const interns = [
    {
      id: '1',
      student: {
        name: 'John Doe',
        email: 'john.doe@university.edu',
        phone: '+91 98765 43210',
        college: 'University of Technology',
        cgpa: 8.5,
        year: '3rd Year',
        skills: ['React', 'JavaScript', 'TypeScript', 'CSS'],
        avatar: '/avatars/john-doe.jpg',
      },
      internship: {
        title: 'Frontend Developer Intern',
        startDate: '2024-01-15',
        endDate: '2024-04-15',
        duration: '3 months',
        stipend: 15000,
      },
      status: 'active',
      progress: 75,
      performance: 4.5,
      workLogs: {
        total: 12,
        submitted: 10,
        pending: 2,
        lastSubmitted: '2024-01-20',
      },
      tasks: {
        completed: 8,
        total: 12,
        overdue: 1,
      },
      attendance: 95,
      mentor: 'Sarah Johnson',
      nextReview: '2024-02-15',
      achievements: ['Best Code Quality', 'Team Player Award'],
    },
    {
      id: '2',
      student: {
        name: 'Jane Smith',
        email: 'jane.smith@university.edu',
        phone: '+91 98765 43211',
        college: 'University of Technology',
        cgpa: 9.2,
        year: '4th Year',
        skills: ['Python', 'Machine Learning', 'Data Analysis', 'SQL'],
        avatar: '/avatars/jane-smith.jpg',
      },
      internship: {
        title: 'Data Science Intern',
        startDate: '2023-12-01',
        endDate: '2024-06-01',
        duration: '6 months',
        stipend: 20000,
      },
      status: 'active',
      progress: 60,
      performance: 4.8,
      workLogs: {
        total: 20,
        submitted: 18,
        pending: 2,
        lastSubmitted: '2024-01-18',
      },
      tasks: {
        completed: 12,
        total: 15,
        overdue: 0,
      },
      attendance: 98,
      mentor: 'Dr. Michael Chen',
      nextReview: '2024-02-10',
      achievements: ['Innovation Award', 'Research Excellence'],
    },
    {
      id: '3',
      student: {
        name: 'Mike Johnson',
        email: 'mike.johnson@university.edu',
        phone: '+91 98765 43212',
        college: 'University of Technology',
        cgpa: 8.8,
        year: '3rd Year',
        skills: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
        avatar: '/avatars/mike-johnson.jpg',
      },
      internship: {
        title: 'Full Stack Developer Intern',
        startDate: '2024-01-01',
        endDate: '2024-04-01',
        duration: '3 months',
        stipend: 12000,
      },
      status: 'active',
      progress: 40,
      performance: 4.2,
      workLogs: {
        total: 8,
        submitted: 6,
        pending: 2,
        lastSubmitted: '2024-01-15',
      },
      tasks: {
        completed: 4,
        total: 10,
        overdue: 2,
      },
      attendance: 88,
      mentor: 'Alex Rodriguez',
      nextReview: '2024-02-05',
      achievements: [],
    },
    {
      id: '4',
      student: {
        name: 'Sarah Williams',
        email: 'sarah.williams@university.edu',
        phone: '+91 98765 43213',
        college: 'University of Technology',
        cgpa: 9.0,
        year: '4th Year',
        skills: ['React Native', 'JavaScript', 'iOS', 'Android'],
        avatar: '/avatars/sarah-williams.jpg',
      },
      internship: {
        title: 'Mobile App Developer Intern',
        startDate: '2023-11-01',
        endDate: '2024-03-01',
        duration: '4 months',
        stipend: 18000,
      },
      status: 'completed',
      progress: 100,
      performance: 4.9,
      workLogs: {
        total: 16,
        submitted: 16,
        pending: 0,
        lastSubmitted: '2024-01-10',
      },
      tasks: {
        completed: 12,
        total: 12,
        overdue: 0,
      },
      attendance: 100,
      mentor: 'Lisa Wang',
      nextReview: null,
      achievements: ['Outstanding Performance', 'Client Appreciation'],
    },
    {
      id: '5',
      student: {
        name: 'David Brown',
        email: 'david.brown@university.edu',
        phone: '+91 98765 43214',
        college: 'University of Technology',
        cgpa: 7.8,
        year: '3rd Year',
        skills: ['Java', 'Spring Boot', 'MySQL', 'Git'],
        avatar: '/avatars/david-brown.jpg',
      },
      internship: {
        title: 'Backend Developer Intern',
        startDate: '2024-01-10',
        endDate: '2024-04-10',
        duration: '3 months',
        stipend: 10000,
      },
      status: 'at_risk',
      progress: 25,
      performance: 3.2,
      workLogs: {
        total: 6,
        submitted: 3,
        pending: 3,
        lastSubmitted: '2024-01-12',
      },
      tasks: {
        completed: 2,
        total: 8,
        overdue: 3,
      },
      attendance: 75,
      mentor: 'Tom Wilson',
      nextReview: '2024-01-30',
      achievements: [],
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedIntern, setSelectedIntern] = useState<any>(null);

  const getStatusBadge = (status: string) => {
    const config = {
      active: { label: 'Active', className: 'bg-green-50 text-green-600' },
      completed: { label: 'Completed', className: 'bg-blue-50 text-blue-600' },
      at_risk: { label: 'At Risk', className: 'bg-red-50 text-red-600' },
      terminated: { label: 'Terminated', className: 'bg-gray-50 text-gray-600' },
    };
    const { label, className } = config[status as keyof typeof config] || config.active;
    return <Badge className={`${className} px-2 py-0.5 rounded-full text-xs font-medium`}>{label}</Badge>;
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-blue-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const filteredInterns = interns.filter(intern => {
    const matchesSearch = intern.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         intern.student.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         intern.internship.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || intern.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusCounts = {
    all: interns.length,
    active: interns.filter(intern => intern.status === 'active').length,
    completed: interns.filter(intern => intern.status === 'completed').length,
    at_risk: interns.filter(intern => intern.status === 'at_risk').length,
  };

  const overallStats = {
    totalInterns: interns.length,
    activeInterns: interns.filter(intern => intern.status === 'active').length,
    completedInterns: interns.filter(intern => intern.status === 'completed').length,
    averageProgress: Math.round(interns.reduce((acc, intern) => acc + intern.progress, 0) / interns.length),
    averagePerformance: (interns.reduce((acc, intern) => acc + intern.performance, 0) / interns.length).toFixed(1),
  };

  return (
    <MainLayout user={user} notifications={notifications}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Intern Management</h1>
            <p className="text-gray-600">
              Track progress and manage {overallStats.totalInterns} interns across your programs
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button>
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Interns</p>
                <p className="text-2xl font-bold text-blue-600">{overallStats.totalInterns}</p>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <User className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Interns</p>
                <p className="text-2xl font-bold text-green-600">{overallStats.activeInterns}</p>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Avg Progress</p>
                <p className="text-2xl font-bold text-purple-600">{overallStats.averageProgress}%</p>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg">
                <BarChart3 className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Avg Performance</p>
                <p className="text-2xl font-bold text-orange-600">{overallStats.averagePerformance}/5</p>
              </div>
              <div className="p-2 bg-orange-50 rounded-lg">
                <Star className="h-5 w-5 text-orange-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Status Filter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Object.entries(statusCounts).map(([status, count]) => (
            <Card 
              key={status} 
              className={`bg-white border rounded-xl shadow-sm p-4 cursor-pointer transition-all duration-200 ${
                statusFilter === status 
                  ? 'border-blue-300 bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setStatusFilter(status)}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{count}</div>
                <div className="text-sm font-medium text-gray-500 capitalize">
                  {status === 'all' ? 'Total' : status.replace('_', ' ')}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by name, college, or position..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="at_risk">At Risk</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Interns List */}
        <div className="space-y-4">
          {filteredInterns.map((intern) => (
            <Card key={intern.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={intern.student.avatar} />
                      <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                        {intern.student.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{intern.student.name}</h3>
                        {getStatusBadge(intern.status)}
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(intern.performance) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                          <span className="text-sm text-gray-500 ml-1">{intern.performance}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="h-4 w-4" />
                            <span>{intern.student.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <GraduationCap className="h-4 w-4" />
                            <span>{intern.student.college}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <User className="h-4 w-4" />
                            <span>Mentor: {intern.mentor}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>{intern.internship.duration} • ₹{intern.internship.stipend.toLocaleString()}/month</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Target className="h-4 w-4" />
                            <span>Tasks: {intern.tasks.completed}/{intern.tasks.total}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock3 className="h-4 w-4" />
                            <span>Attendance: {intern.attendance}%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Position:</h4>
                        <p className="text-sm text-gray-600">{intern.internship.title}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Progress:</h4>
                        <div className="flex items-center gap-3">
                          <Progress value={intern.progress} className="flex-1 h-2" />
                          <span className="text-sm font-medium text-gray-900">{intern.progress}%</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Work Logs Status:</h4>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-600">{intern.workLogs.submitted} Submitted</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-yellow-500" />
                            <span className="text-gray-600">{intern.workLogs.pending} Pending</span>
                          </div>
                          {intern.tasks.overdue > 0 && (
                            <div className="flex items-center gap-1">
                              <AlertCircle className="h-4 w-4 text-red-500" />
                              <span className="text-red-600">{intern.tasks.overdue} Overdue</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {intern.achievements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Achievements:</h4>
                          <div className="flex flex-wrap gap-2">
                            {intern.achievements.map((achievement, index) => (
                              <Badge key={index} className="bg-yellow-50 text-yellow-600 px-2 py-0.5 rounded-full text-xs font-medium">
                                <Award className="h-3 w-3 mr-1" />
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 ml-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedIntern(intern)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-semibold text-gray-900">
                            Intern Details - {intern.student.name}
                          </DialogTitle>
                          <DialogDescription>
                            Complete intern information and progress tracking
                          </DialogDescription>
                        </DialogHeader>
                        
                        <Tabs defaultValue="overview" className="w-full">
                          <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="progress">Progress</TabsTrigger>
                            <TabsTrigger value="worklogs">Work Logs</TabsTrigger>
                            <TabsTrigger value="performance">Performance</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="overview" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="bg-gray-50 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                                <div className="space-y-3">
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">Name</label>
                                    <p className="text-sm text-gray-900">{intern.student.name}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">Email</label>
                                    <p className="text-sm text-gray-900">{intern.student.email}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">Phone</label>
                                    <p className="text-sm text-gray-900">{intern.student.phone}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">College</label>
                                    <p className="text-sm text-gray-900">{intern.student.college}</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="bg-gray-50 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Internship Details</h3>
                                <div className="space-y-3">
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">Position</label>
                                    <p className="text-sm text-gray-900">{intern.internship.title}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">Duration</label>
                                    <p className="text-sm text-gray-900">{intern.internship.duration}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">Stipend</label>
                                    <p className="text-sm text-gray-900">₹{intern.internship.stipend.toLocaleString()}/month</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">Mentor</label>
                                    <p className="text-sm text-gray-900">{intern.mentor}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="progress" className="space-y-6">
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Overview</h3>
                              <div className="space-y-4">
                                <div>
                                  <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                                    <span className="text-sm font-medium text-gray-900">{intern.progress}%</span>
                                  </div>
                                  <Progress value={intern.progress} className="h-3" />
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="text-center p-3 bg-white rounded-lg">
                                    <div className="text-2xl font-bold text-green-600">{intern.tasks.completed}</div>
                                    <div className="text-sm text-gray-600">Tasks Completed</div>
                                  </div>
                                  <div className="text-center p-3 bg-white rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600">{intern.attendance}%</div>
                                    <div className="text-sm text-gray-600">Attendance</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="worklogs" className="space-y-6">
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">Work Logs Summary</h3>
                              <div className="grid grid-cols-3 gap-4">
                                <div className="text-center p-3 bg-white rounded-lg">
                                  <div className="text-2xl font-bold text-green-600">{intern.workLogs.submitted}</div>
                                  <div className="text-sm text-gray-600">Submitted</div>
                                </div>
                                <div className="text-center p-3 bg-white rounded-lg">
                                  <div className="text-2xl font-bold text-yellow-600">{intern.workLogs.pending}</div>
                                  <div className="text-sm text-gray-600">Pending</div>
                                </div>
                                <div className="text-center p-3 bg-white rounded-lg">
                                  <div className="text-2xl font-bold text-blue-600">{intern.workLogs.total}</div>
                                  <div className="text-sm text-gray-600">Total</div>
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="performance" className="space-y-6">
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-gray-700">Overall Rating</span>
                                  <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                      <Star 
                                        key={i} 
                                        className={`h-5 w-5 ${i < Math.floor(intern.performance) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                      />
                                    ))}
                                    <span className="text-sm font-medium text-gray-900 ml-2">{intern.performance}/5</span>
                                  </div>
                                </div>
                                
                                {intern.achievements.length > 0 && (
                                  <div>
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Achievements</h4>
                                    <div className="space-y-2">
                                      {intern.achievements.map((achievement, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm">
                                          <Award className="h-4 w-4 text-yellow-500" />
                                          <span className="text-gray-900">{achievement}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                        
                        <div className="flex gap-2 pt-4 border-t border-gray-200">
                          <Button className="flex-1">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Send Message
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Calendar className="h-4 w-4 mr-2" />
                            Schedule Review
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <FileText className="h-4 w-4 mr-2" />
                            Generate Report
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Send Message
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="h-4 w-4 mr-2" />
                          Schedule Review
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText className="h-4 w-4 mr-2" />
                          Generate Report
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <XCircle className="h-4 w-4 mr-2" />
                          Terminate
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredInterns.length === 0 && (
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-12">
            <div className="text-center">
              <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No interns found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          </Card>
        )}
      </div>
    </MainLayout>
  );
}
