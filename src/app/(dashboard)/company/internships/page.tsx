'use client';

import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Eye, 
  Edit, 
  Trash2, 
  MoreVertical,
  Calendar,
  MapPin,
  Clock,
  Users,
  DollarSign,
  Target,
  TrendingUp,
  TrendingDown,
  Pause,
  Play,
  Archive,
  Copy,
  Share2,
  BarChart3,
  FileText,
  CheckCircle,
  AlertCircle,
  XCircle
} from 'lucide-react';

import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CompanyInternships() {
  // Mock user data
  const user = {
    name: 'TechCorp Solutions',
    email: 'hr@techcorp.com',
    role: 'company',
    avatar: '/logos/techcorp.png',
  };

  const notifications = 8;

  // Mock internships data
  const internships = [
    {
      id: '1',
      title: 'Senior Frontend Developer Intern - React & TypeScript Specialist',
      description: 'Join our innovative frontend team to build cutting-edge user interfaces using React, TypeScript, and modern web technologies. You will work on scalable applications, implement responsive designs, and collaborate with UX designers to create exceptional user experiences.',
      requirements: ['React', 'JavaScript', 'TypeScript', 'CSS', 'Next.js', 'Tailwind CSS', 'Redux', 'Jest'],
      stipend: 15000,
      duration: '3 months',
      location: 'Bangalore, Karnataka',
      isRemote: false,
      deadline: '2024-02-15',
      postedDate: '2024-01-01',
      status: 'active',
      applications: {
        total: 23,
        shortlisted: 3,
        hired: 2,
        rejected: 18,
      },
      skills: ['React', 'JavaScript', 'TypeScript', 'CSS'],
      experience: '1-2 years',
      openings: 3,
      category: 'Frontend Development',
      benefits: ['Mentorship', 'Certificate', 'Stipend', 'Flexible Hours'],
      company: 'TechCorp Solutions',
    },
    {
      id: '2',
      title: 'Data Science & Machine Learning Intern',
      description: 'Work on real-world data science projects and machine learning models. You will analyze large datasets, build predictive models, and contribute to our AI-driven solutions that impact millions of users worldwide.',
      requirements: ['Python', 'Machine Learning', 'Data Analysis', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'],
      stipend: 20000,
      duration: '6 months',
      location: 'Mumbai',
      isRemote: true,
      deadline: '2024-02-20',
      postedDate: '2024-01-05',
      status: 'active',
      applications: {
        total: 45,
        shortlisted: 8,
        hired: 3,
        rejected: 34,
      },
      skills: ['Python', 'Machine Learning', 'Data Analysis'],
      experience: '2-3 years',
      openings: 2,
      category: 'Data Science',
      benefits: ['Mentorship', 'Certificate', 'Stipend', 'Research Opportunities'],
      company: 'TechCorp Solutions',
    },
    {
      id: '3',
      title: 'Full Stack Developer Intern - MERN Stack',
      description: 'Build end-to-end web applications using modern technologies including React, Node.js, Express, and MongoDB. You will work on both frontend and backend development, implement RESTful APIs, and deploy applications to cloud platforms.',
      requirements: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'Express.js', 'REST APIs', 'Git', 'Docker'],
      stipend: 12000,
      duration: '3 months',
      location: 'Delhi',
      isRemote: true,
      deadline: '2024-02-25',
      postedDate: '2024-01-10',
      status: 'active',
      applications: {
        total: 89,
        shortlisted: 15,
        hired: 5,
        rejected: 69,
      },
      skills: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
      experience: '1-2 years',
      openings: 4,
      category: 'Full Stack Development',
      benefits: ['Mentorship', 'Certificate', 'Stipend', 'Project Portfolio'],
      company: 'TechCorp Solutions',
    },
    {
      id: '4',
      title: 'Mobile App Development Intern - React Native',
      description: 'Develop cross-platform mobile applications using React Native. You will work on iOS and Android apps, implement native features, and ensure optimal performance across different devices.',
      requirements: ['React Native', 'JavaScript', 'iOS', 'Android', 'Redux', 'Firebase', 'Git'],
      stipend: 18000,
      duration: '4 months',
      location: 'Remote',
      isRemote: true,
      deadline: '2024-03-01',
      postedDate: '2024-01-15',
      status: 'paused',
      applications: {
        total: 34,
        shortlisted: 6,
        hired: 1,
        rejected: 27,
      },
      skills: ['React Native', 'JavaScript', 'iOS', 'Android'],
      experience: '1-2 years',
      openings: 2,
      category: 'Mobile Development',
      benefits: ['Mentorship', 'Certificate', 'Stipend', 'App Store Publishing'],
      company: 'TechCorp Solutions',
    },
    {
      id: '5',
      title: 'DevOps & Cloud Engineering Intern',
      description: 'Learn cloud infrastructure, CI/CD pipelines, and automation tools. You will work with AWS, Docker, Kubernetes, and various monitoring tools to ensure scalable and reliable deployments.',
      requirements: ['AWS', 'Docker', 'Kubernetes', 'Linux', 'Python', 'Terraform', 'Jenkins', 'Monitoring'],
      stipend: 22000,
      duration: '6 months',
      location: 'Hyderabad',
      isRemote: false,
      deadline: '2024-03-05',
      postedDate: '2024-01-20',
      status: 'closed',
      applications: {
        total: 67,
        shortlisted: 12,
        hired: 3,
        rejected: 52,
      },
      skills: ['AWS', 'Docker', 'Kubernetes', 'Linux'],
      experience: '2-3 years',
      openings: 2,
      category: 'DevOps',
      benefits: ['Mentorship', 'Certificate', 'Stipend', 'AWS Certification'],
      company: 'TechCorp Solutions',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedInternship, setSelectedInternship] = useState<any>(null);

  const getStatusBadge = (status: string) => {
    const config = {
      active: { label: 'Active', className: 'bg-green-50 text-green-600' },
      paused: { label: 'Paused', className: 'bg-yellow-50 text-yellow-600' },
      closed: { label: 'Closed', className: 'bg-gray-50 text-gray-600' },
      draft: { label: 'Draft', className: 'bg-blue-50 text-blue-600' },
    };
    const { label, className } = config[status as keyof typeof config] || config.active;
    return <Badge className={`${className} px-2 py-0.5 rounded-full text-xs font-medium`}>{label}</Badge>;
  };

  const getCategoryBadge = (category: string) => {
    const config = {
      'Frontend Development': 'bg-blue-50 text-blue-600',
      'Data Science': 'bg-purple-50 text-purple-600',
      'Full Stack Development': 'bg-green-50 text-green-600',
      'Mobile Development': 'bg-orange-50 text-orange-600',
      'DevOps': 'bg-red-50 text-red-600',
    };
    const className = config[category as keyof typeof config] || 'bg-gray-50 text-gray-600';
    return <Badge className={`${className} px-2 py-0.5 rounded-full text-xs font-medium`}>{category}</Badge>;
  };

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || internship.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || internship.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const statusCounts = {
    all: internships.length,
    active: internships.filter(internship => internship.status === 'active').length,
    paused: internships.filter(internship => internship.status === 'paused').length,
    closed: internships.filter(internship => internship.status === 'closed').length,
  };

  const overallStats = {
    totalInternships: internships.length,
    activeInternships: internships.filter(internship => internship.status === 'active').length,
    totalApplications: internships.reduce((acc, internship) => acc + internship.applications.total, 0),
    totalHired: internships.reduce((acc, internship) => acc + internship.applications.hired, 0),
    averageApplications: Math.round(internships.reduce((acc, internship) => acc + internship.applications.total, 0) / internships.length),
  };

  const categories = [...new Set(internships.map(internship => internship.category))];

  return (
    <MainLayout user={user} notifications={notifications}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Internship Management</h1>
            <p className="text-gray-600">
              Manage {overallStats.totalInternships} internship postings and track applications
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Post New Internship
            </Button>
          </div>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Internships</p>
                <p className="text-2xl font-bold text-blue-600">{overallStats.totalInternships}</p>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Postings</p>
                <p className="text-2xl font-bold text-green-600">{overallStats.activeInternships}</p>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Applications</p>
                <p className="text-2xl font-bold text-purple-600">{overallStats.totalApplications}</p>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Successfully Hired</p>
                <p className="text-2xl font-bold text-orange-600">{overallStats.totalHired}</p>
              </div>
              <div className="p-2 bg-orange-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-orange-600" />
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
                  placeholder="Search by title, description, or category..."
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
                <SelectItem value="paused">Paused</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Internships List */}
        <div className="space-y-4">
          {filteredInternships.map((internship) => (
            <Card key={internship.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{internship.title}</h3>
                      {getStatusBadge(internship.status)}
                      {getCategoryBadge(internship.category)}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{internship.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <DollarSign className="h-4 w-4" />
                        <span>₹{internship.stipend.toLocaleString()}/month</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{internship.location}</span>
                        {internship.isRemote && (
                          <Badge className="bg-green-50 text-green-600 px-1 py-0 text-xs">Remote</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>{internship.openings} openings</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill, index) => (
                          <Badge key={index} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Applications Summary:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-2 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-600">{internship.applications.total}</div>
                          <div className="text-xs text-gray-600">Total</div>
                        </div>
                        <div className="text-center p-2 bg-yellow-50 rounded-lg">
                          <div className="text-lg font-bold text-yellow-600">{internship.applications.shortlisted}</div>
                          <div className="text-xs text-gray-600">Shortlisted</div>
                        </div>
                        <div className="text-center p-2 bg-green-50 rounded-lg">
                          <div className="text-lg font-bold text-green-600">{internship.applications.hired}</div>
                          <div className="text-xs text-gray-600">Hired</div>
                        </div>
                        <div className="text-center p-2 bg-red-50 rounded-lg">
                          <div className="text-lg font-bold text-red-600">{internship.applications.rejected}</div>
                          <div className="text-xs text-gray-600">Rejected</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span>Posted: {new Date(internship.postedDate).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>Deadline: {new Date(internship.deadline).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>Experience: {internship.experience}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 ml-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedInternship(internship)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-semibold text-gray-900">
                            {internship.title}
                          </DialogTitle>
                          <DialogDescription>
                            Complete internship posting details and management
                          </DialogDescription>
                        </DialogHeader>
                        
                        <Tabs defaultValue="overview" className="w-full">
                          <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="applications">Applications</TabsTrigger>
                            <TabsTrigger value="requirements">Requirements</TabsTrigger>
                            <TabsTrigger value="analytics">Analytics</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="overview" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="bg-gray-50 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                                <div className="space-y-3">
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">Position</label>
                                    <p className="text-sm text-gray-900">{internship.title}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">Category</label>
                                    <p className="text-sm text-gray-900">{internship.category}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">Duration</label>
                                    <p className="text-sm text-gray-900">{internship.duration}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">Stipend</label>
                                    <p className="text-sm text-gray-900">₹{internship.stipend.toLocaleString()}/month</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">Location</label>
                                    <p className="text-sm text-gray-900">
                                      {internship.location} {internship.isRemote && '(Remote)'}
                                    </p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">Openings</label>
                                    <p className="text-sm text-gray-900">{internship.openings}</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="bg-gray-50 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Timeline</h3>
                                <div className="space-y-3">
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">Posted Date</label>
                                    <p className="text-sm text-gray-900">{new Date(internship.postedDate).toLocaleDateString()}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">Application Deadline</label>
                                    <p className="text-sm text-gray-900">{new Date(internship.deadline).toLocaleDateString()}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">Status</label>
                                    <div className="mt-1">
                                      {getStatusBadge(internship.status)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
                              <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-sm text-gray-700 whitespace-pre-wrap">{internship.description}</p>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="applications" className="space-y-6">
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Statistics</h3>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center p-3 bg-white rounded-lg">
                                  <div className="text-2xl font-bold text-blue-600">{internship.applications.total}</div>
                                  <div className="text-sm text-gray-600">Total Applications</div>
                                </div>
                                <div className="text-center p-3 bg-white rounded-lg">
                                  <div className="text-2xl font-bold text-yellow-600">{internship.applications.shortlisted}</div>
                                  <div className="text-sm text-gray-600">Shortlisted</div>
                                </div>
                                <div className="text-center p-3 bg-white rounded-lg">
                                  <div className="text-2xl font-bold text-green-600">{internship.applications.hired}</div>
                                  <div className="text-sm text-gray-600">Hired</div>
                                </div>
                                <div className="text-center p-3 bg-white rounded-lg">
                                  <div className="text-2xl font-bold text-red-600">{internship.applications.rejected}</div>
                                  <div className="text-sm text-gray-600">Rejected</div>
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="requirements" className="space-y-6">
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Skills</h3>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {internship.skills.map((skill, index) => (
                                  <Badge key={index} className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                              
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Requirements</h3>
                              <ul className="space-y-2">
                                {internship.requirements.map((requirement, index) => (
                                  <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    {requirement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="analytics" className="space-y-6">
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="text-center p-3 bg-white rounded-lg">
                                  <div className="text-2xl font-bold text-blue-600">
                                    {Math.round((internship.applications.hired / internship.applications.total) * 100)}%
                                  </div>
                                  <div className="text-sm text-gray-600">Hire Rate</div>
                                </div>
                                <div className="text-center p-3 bg-white rounded-lg">
                                  <div className="text-2xl font-bold text-green-600">
                                    {Math.round((internship.applications.shortlisted / internship.applications.total) * 100)}%
                                  </div>
                                  <div className="text-sm text-gray-600">Shortlist Rate</div>
                                </div>
                                <div className="text-center p-3 bg-white rounded-lg">
                                  <div className="text-2xl font-bold text-purple-600">
                                    {internship.applications.total}
                                  </div>
                                  <div className="text-sm text-gray-600">Applications/Day</div>
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                        
                        <div className="flex gap-2 pt-4 border-t border-gray-200">
                          <Button className="flex-1">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Posting
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Copy className="h-4 w-4 mr-2" />
                            Duplicate
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                          {internship.status === 'active' ? (
                            <Button variant="outline" className="flex-1">
                              <Pause className="h-4 w-4 mr-2" />
                              Pause
                            </Button>
                          ) : (
                            <Button variant="outline" className="flex-1">
                              <Play className="h-4 w-4 mr-2" />
                              Resume
                            </Button>
                          )}
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
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Copy className="h-4 w-4 mr-2" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <BarChart3 className="h-4 w-4 mr-2" />
                          View Analytics
                        </DropdownMenuItem>
                        {internship.status === 'active' ? (
                          <DropdownMenuItem>
                            <Pause className="h-4 w-4 mr-2" />
                            Pause
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem>
                            <Play className="h-4 w-4 mr-2" />
                            Resume
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredInternships.length === 0 && (
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-12">
            <div className="text-center">
              <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No internships found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          </Card>
        )}
      </div>
    </MainLayout>
  );
}
