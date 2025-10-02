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
  Send
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
import { Textarea } from '@/components/ui/textarea';

export default function CompanyApplications() {
  // Mock user data
  const user = {
    name: 'TechCorp Solutions',
    email: 'hr@techcorp.com',
    role: 'company',
    avatar: '/logos/techcorp.png',
  };

  const notifications = 8;

  // Mock applications data
  const applications = [
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
        company: 'TechCorp Solutions',
      },
      status: 'shortlisted',
      appliedAt: '2024-01-15',
      coverLetter: 'I am excited to apply for the Frontend Developer Intern position at TechCorp Solutions. With my strong foundation in React and JavaScript, I am confident that I can contribute meaningfully to your development team...',
      resume: 'john_doe_resume.pdf',
      experience: '2 years',
      projects: 5,
      rating: 4.5,
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
        company: 'TechCorp Solutions',
      },
      status: 'applied',
      appliedAt: '2024-01-18',
      coverLetter: 'I am very interested in the Data Science Intern position. My experience with Python and machine learning algorithms makes me a strong candidate...',
      resume: 'jane_smith_resume.pdf',
      experience: '1 year',
      projects: 3,
      rating: 4.8,
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
        company: 'TechCorp Solutions',
      },
      status: 'interview',
      appliedAt: '2024-01-20',
      coverLetter: 'I am applying for the Full Stack Developer Intern position. My experience with both frontend and backend technologies...',
      resume: 'mike_johnson_resume.pdf',
      experience: '1.5 years',
      projects: 4,
      rating: 4.3,
      interviewDate: '2024-02-05',
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
        company: 'TechCorp Solutions',
      },
      status: 'offer',
      appliedAt: '2024-01-22',
      coverLetter: 'I am excited about the Mobile App Developer Intern opportunity. My passion for mobile development...',
      resume: 'sarah_williams_resume.pdf',
      experience: '2 years',
      projects: 6,
      rating: 4.7,
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
        company: 'TechCorp Solutions',
      },
      status: 'rejected',
      appliedAt: '2024-01-25',
      coverLetter: 'I am applying for the Backend Developer Intern position...',
      resume: 'david_brown_resume.pdf',
      experience: '1 year',
      projects: 2,
      rating: 3.8,
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedApplication, setSelectedApplication] = useState<any>(null);

  const getStatusBadge = (status: string) => {
    const config = {
      applied: { label: 'Applied', className: 'bg-blue-50 text-blue-600' },
      shortlisted: { label: 'Shortlisted', className: 'bg-yellow-50 text-yellow-600' },
      interview: { label: 'Interview', className: 'bg-purple-50 text-purple-600' },
      offer: { label: 'Offer', className: 'bg-green-50 text-green-800' },
      rejected: { label: 'Rejected', className: 'bg-red-50 text-red-800' },
      ongoing: { label: 'Ongoing', className: 'bg-indigo-50 text-indigo-600' },
      completed: { label: 'Completed', className: 'bg-gray-50 text-gray-600' },
    };
    const { label, className } = config[status as keyof typeof config] || config.applied;
    return <Badge className={`${className} px-2 py-0.5 rounded-full text-xs font-medium`}>{label}</Badge>;
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.student.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.internship.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusCounts = {
    all: applications.length,
    applied: applications.filter(app => app.status === 'applied').length,
    shortlisted: applications.filter(app => app.status === 'shortlisted').length,
    interview: applications.filter(app => app.status === 'interview').length,
    offer: applications.filter(app => app.status === 'offer').length,
    rejected: applications.filter(app => app.status === 'rejected').length,
  };

  return (
    <MainLayout user={user} notifications={notifications}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Applications Management</h1>
            <p className="text-gray-600">
              Review and manage {applications.length} applications across your internship positions
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button>
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {Object.entries(statusCounts).map(([status, count]) => (
            <Card key={status} className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{count}</div>
                <div className="text-sm font-medium text-gray-500 capitalize">
                  {status === 'all' ? 'Total' : status}
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
                <SelectItem value="applied">Applied</SelectItem>
                <SelectItem value="shortlisted">Shortlisted</SelectItem>
                <SelectItem value="interview">Interview</SelectItem>
                <SelectItem value="offer">Offer</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Applications List */}
        <div className="space-y-4">
          {filteredApplications.map((application) => (
            <Card key={application.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={application.student.avatar} />
                      <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                        {application.student.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{application.student.name}</h3>
                        {getStatusBadge(application.status)}
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(application.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                          <span className="text-sm text-gray-500 ml-1">{application.rating}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="h-4 w-4" />
                            <span>{application.student.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="h-4 w-4" />
                            <span>{application.student.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <GraduationCap className="h-4 w-4" />
                            <span>{application.student.college} • {application.student.year}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <FileText className="h-4 w-4" />
                            <span>CGPA: {application.student.cgpa}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <User className="h-4 w-4" />
                            <span>{application.experience} experience • {application.projects} projects</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>Applied: {new Date(application.appliedAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Position Applied For:</h4>
                        <p className="text-sm text-gray-600">{application.internship.title}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {application.student.skills.map((skill, index) => (
                            <Badge key={index} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Cover Letter:</h4>
                        <p className="text-sm text-gray-600 line-clamp-2">{application.coverLetter}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 ml-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedApplication(application)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-semibold text-gray-900">
                            Application Details - {application.student.name}
                          </DialogTitle>
                          <DialogDescription>
                            Complete application information and documents
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          {/* Student Info */}
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium text-gray-500">Name</label>
                                <p className="text-sm text-gray-900">{application.student.name}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Email</label>
                                <p className="text-sm text-gray-900">{application.student.email}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Phone</label>
                                <p className="text-sm text-gray-900">{application.student.phone}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">College</label>
                                <p className="text-sm text-gray-900">{application.student.college}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Year</label>
                                <p className="text-sm text-gray-900">{application.student.year}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">CGPA</label>
                                <p className="text-sm text-gray-900">{application.student.cgpa}</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Cover Letter */}
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cover Letter</h3>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <p className="text-sm text-gray-700 whitespace-pre-wrap">{application.coverLetter}</p>
                            </div>
                          </div>
                          
                          {/* Resume */}
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resume</h3>
                            <div className="flex items-center gap-2">
                              <FileText className="h-5 w-5 text-gray-400" />
                              <span className="text-sm text-gray-900">{application.resume}</span>
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Button>
                            </div>
                          </div>
                          
                          {/* Actions */}
                          <div className="flex gap-2 pt-4 border-t border-gray-200">
                            <Button className="flex-1">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Shortlist
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Schedule Interview
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <Send className="h-4 w-4 mr-2" />
                              Send Offer
                            </Button>
                            <Button variant="destructive" className="flex-1">
                              <XCircle className="h-4 w-4 mr-2" />
                              Reject
                            </Button>
                          </div>
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
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Shortlist
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Schedule Interview
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Send className="h-4 w-4 mr-2" />
                          Send Offer
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <XCircle className="h-4 w-4 mr-2" />
                          Reject
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredApplications.length === 0 && (
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-12">
            <div className="text-center">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No applications found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          </Card>
        )}
      </div>
    </MainLayout>
  );
}
