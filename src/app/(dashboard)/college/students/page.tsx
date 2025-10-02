'use client';

import { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Download, 
  Upload,
  Eye,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Building2,
  CheckCircle,
  AlertTriangle,
  Clock,
  FileText
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function CollegeStudentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Mock user data
  const user = {
    name: 'Dr. Sharma',
    email: 'sharma@university.edu',
    role: 'college',
    avatar: '/avatars/dr-sharma.jpg',
  };

  const notifications = 5;

  // Mock students data
  const students = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@university.edu',
      phone: '+91 98765 43210',
      department: 'Computer Science',
      year: 'Final Year',
      rollNumber: 'CS2021001',
      status: 'ongoing',
      progress: 85,
      company: 'TechCorp Solutions',
      startDate: '2024-01-15',
      endDate: '2024-04-15',
      mentor: 'Dr. Rajesh Kumar',
      workLogs: 12,
      lastActivity: '2024-01-20',
      gpa: 8.5,
      skills: ['React', 'Node.js', 'JavaScript', 'Python'],
      location: 'Bangalore, Karnataka'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@university.edu',
      phone: '+91 98765 43211',
      department: 'Mechanical Engineering',
      year: 'Final Year',
      rollNumber: 'ME2021002',
      status: 'searching',
      progress: 0,
      company: '-',
      startDate: '-',
      endDate: '-',
      mentor: 'Dr. Priya Singh',
      workLogs: 0,
      lastActivity: '2024-01-18',
      gpa: 8.2,
      skills: ['CAD', 'SolidWorks', 'MATLAB', 'AutoCAD'],
      location: 'Delhi, India'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@university.edu',
      phone: '+91 98765 43212',
      department: 'Electronics & Communication',
      year: 'Final Year',
      rollNumber: 'ECE2021003',
      status: 'ongoing',
      progress: 72,
      company: 'DataFlow Analytics',
      startDate: '2024-01-10',
      endDate: '2024-04-10',
      mentor: 'Dr. Amit Verma',
      workLogs: 8,
      lastActivity: '2024-01-19',
      gpa: 8.8,
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'SQL'],
      location: 'Mumbai, Maharashtra'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah.williams@university.edu',
      phone: '+91 98765 43213',
      department: 'Computer Science',
      year: 'Final Year',
      rollNumber: 'CS2021004',
      status: 'completed',
      progress: 100,
      company: 'StartupXYZ Technologies',
      startDate: '2023-10-01',
      endDate: '2024-01-01',
      mentor: 'Dr. Neha Gupta',
      workLogs: 16,
      lastActivity: '2024-01-01',
      gpa: 9.1,
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      location: 'Hyderabad, Telangana'
    },
    {
      id: 5,
      name: 'Tom Brown',
      email: 'tom.brown@university.edu',
      phone: '+91 98765 43214',
      department: 'Civil Engineering',
      year: 'Final Year',
      rollNumber: 'CE2021005',
      status: 'at_risk',
      progress: 45,
      company: 'BuildTech Corp',
      startDate: '2024-01-05',
      endDate: '2024-04-05',
      mentor: 'Dr. Ravi Sharma',
      workLogs: 3,
      lastActivity: '2024-01-15',
      gpa: 7.8,
      skills: ['AutoCAD', 'Revit', 'Project Management', 'Surveying'],
      location: 'Chennai, Tamil Nadu'
    },
    {
      id: 6,
      name: 'Lisa Davis',
      email: 'lisa.davis@university.edu',
      phone: '+91 98765 43215',
      department: 'Chemical Engineering',
      year: 'Final Year',
      rollNumber: 'CH2021006',
      status: 'ongoing',
      progress: 60,
      company: 'ChemTech Industries',
      startDate: '2024-01-12',
      endDate: '2024-04-12',
      mentor: 'Dr. Sunita Patel',
      workLogs: 6,
      lastActivity: '2024-01-21',
      gpa: 8.3,
      skills: ['Process Design', 'MATLAB', 'Aspen Plus', 'Lab Analysis'],
      location: 'Pune, Maharashtra'
    }
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

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-blue-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.rollNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = departmentFilter === 'all' || 
                             student.department.toLowerCase().includes(departmentFilter.toLowerCase());
    const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const stats = {
    total: students.length,
    ongoing: students.filter(s => s.status === 'ongoing').length,
    searching: students.filter(s => s.status === 'searching').length,
    completed: students.filter(s => s.status === 'completed').length,
    atRisk: students.filter(s => s.status === 'at_risk').length,
  };

  return (
    <MainLayout user={user} notifications={notifications}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Student Management</h1>
            <p className="text-gray-600">
              Manage and monitor {stats.total} students across all departments
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Bulk Upload
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Students</p>
                <p className="text-2xl font-bold text-blue-600">{stats.total}</p>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Ongoing</p>
                <p className="text-2xl font-bold text-green-600">{stats.ongoing}</p>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Searching</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.searching}</p>
              </div>
              <div className="p-2 bg-yellow-50 rounded-lg">
                <Clock className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Completed</p>
                <p className="text-2xl font-bold text-purple-600">{stats.completed}</p>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg">
                <FileText className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">At Risk</p>
                <p className="text-2xl font-bold text-red-600">{stats.atRisk}</p>
              </div>
              <div className="p-2 bg-red-50 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Student Directory */}
        <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
          <CardHeader className="border-b border-gray-200 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Student Directory
                </CardTitle>
                <CardDescription>
                  Comprehensive view of all students and their internship status
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search by name, email, or roll number..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger className="w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="computer science">Computer Science</SelectItem>
                    <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                    <SelectItem value="electronics">Electronics & Communication</SelectItem>
                    <SelectItem value="civil">Civil Engineering</SelectItem>
                    <SelectItem value="chemical">Chemical Engineering</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                    <SelectItem value="searching">Searching</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="at_risk">At Risk</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Table */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold">Student</TableHead>
                    <TableHead className="font-semibold">Department</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold">Company</TableHead>
                    <TableHead className="font-semibold">Progress</TableHead>
                    <TableHead className="font-semibold">GPA</TableHead>
                    <TableHead className="font-semibold text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id} className="hover:bg-gray-50">
                      <TableCell>
                        <div>
                          <div className="font-medium text-gray-900">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.rollNumber}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{student.department}</div>
                          <div className="text-sm text-gray-500">{student.year}</div>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(student.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{student.company}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${getProgressColor(student.progress)}`}
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-600">{student.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium">{student.gpa}</span>
                          <span className="text-xs text-gray-500">/10</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => setSelectedStudent(student)}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Student Details</DialogTitle>
                              <DialogDescription>
                                Complete information about {selectedStudent?.name}
                              </DialogDescription>
                            </DialogHeader>
                            {selectedStudent && (
                              <div className="space-y-6">
                                {/* Basic Info */}
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-gray-400" />
                                        <span>{selectedStudent.email}</span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-gray-400" />
                                        <span>{selectedStudent.phone}</span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-gray-400" />
                                        <span>{selectedStudent.location}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Academic Information</h4>
                                    <div className="space-y-2 text-sm">
                                      <div><span className="font-medium">Department:</span> {selectedStudent.department}</div>
                                      <div><span className="font-medium">Year:</span> {selectedStudent.year}</div>
                                      <div><span className="font-medium">Roll Number:</span> {selectedStudent.rollNumber}</div>
                                      <div><span className="font-medium">GPA:</span> {selectedStudent.gpa}/10</div>
                                    </div>
                                  </div>
                                </div>

                                {/* Internship Info */}
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">Internship Details</h4>
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <div><span className="font-medium">Status:</span> {getStatusBadge(selectedStudent.status)}</div>
                                      <div><span className="font-medium">Company:</span> {selectedStudent.company}</div>
                                      <div><span className="font-medium">Mentor:</span> {selectedStudent.mentor}</div>
                                    </div>
                                    <div>
                                      <div><span className="font-medium">Start Date:</span> {selectedStudent.startDate}</div>
                                      <div><span className="font-medium">End Date:</span> {selectedStudent.endDate}</div>
                                      <div><span className="font-medium">Work Logs:</span> {selectedStudent.workLogs}</div>
                                    </div>
                                  </div>
                                </div>

                                {/* Skills */}
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">Skills</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {selectedStudent.skills.map((skill, index) => (
                                      <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                                        {skill}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                {/* Progress */}
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">Progress</h4>
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                      <span>Internship Progress</span>
                                      <span>{selectedStudent.progress}%</span>
                                    </div>
                                    <Progress value={selectedStudent.progress} className="h-2" />
                                    <div className="text-xs text-gray-500">
                                      Last Activity: {selectedStudent.lastActivity}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-500">
                Showing {filteredStudents.length} of {students.length} students
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
