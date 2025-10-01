import { Student, Company, Internship, Application, WorkLog, Certificate, Notification, DashboardStats } from '@/types';

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'TechCorp Solutions',
    email: 'hr@techcorp.com',
    role: 'company',
    companyName: 'TechCorp Solutions',
    logo: '/logos/techcorp.png',
    verificationStatus: 'premium',
    internships: [],
    pastInterns: [],
    createdAt: new Date('2023-01-15'),
  },
  {
    id: '2',
    name: 'DataFlow Inc',
    email: 'careers@dataflow.com',
    role: 'company',
    companyName: 'DataFlow Inc',
    logo: '/logos/dataflow.png',
    verificationStatus: 'trusted',
    internships: [],
    pastInterns: [],
    createdAt: new Date('2023-03-20'),
  },
  {
    id: '3',
    name: 'StartupXYZ',
    email: 'hello@startupxyz.com',
    role: 'company',
    companyName: 'StartupXYZ',
    logo: '/logos/startupxyz.png',
    verificationStatus: 'basic',
    internships: [],
    pastInterns: [],
    createdAt: new Date('2023-06-10'),
  },
];

export const mockStudents: Student[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@university.edu',
    role: 'student',
    college: 'University of Technology',
    skills: ['React', 'Node.js', 'JavaScript', 'Python'],
    profileCompleteness: 85,
    applications: [],
    workLogs: [],
    createdAt: new Date('2023-09-01'),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@university.edu',
    role: 'student',
    college: 'University of Technology',
    skills: ['Python', 'Machine Learning', 'Data Analysis'],
    profileCompleteness: 92,
    applications: [],
    workLogs: [],
    createdAt: new Date('2023-09-01'),
  },
];

export const mockInternships: Internship[] = [
  {
    id: '1',
    title: 'Frontend Developer Intern',
    company: mockCompanies[0],
    description: 'Join our frontend team to build amazing user interfaces using React and modern web technologies.',
    requirements: ['React', 'JavaScript', 'TypeScript', 'CSS'],
    stipend: 15000,
    duration: '3 months',
    location: 'Bangalore',
    isRemote: false,
    deadline: new Date('2024-02-15'),
    skillMatch: 95,
    applications: [],
    status: 'active',
  },
  {
    id: '2',
    title: 'Data Science Intern',
    company: mockCompanies[1],
    description: 'Work on real-world data science projects and machine learning models.',
    requirements: ['Python', 'Machine Learning', 'Data Analysis', 'SQL'],
    stipend: 20000,
    duration: '6 months',
    location: 'Mumbai',
    isRemote: true,
    deadline: new Date('2024-02-20'),
    skillMatch: 88,
    applications: [],
    status: 'active',
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: mockCompanies[2],
    description: 'Build end-to-end web applications using modern technologies.',
    requirements: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
    stipend: 12000,
    duration: '3 months',
    location: 'Delhi',
    isRemote: true,
    deadline: new Date('2024-02-25'),
    skillMatch: 92,
    applications: [],
    status: 'active',
  },
];

export const mockApplications: Application[] = [
  {
    id: '1',
    student: mockStudents[0],
    internship: mockInternships[0],
    status: 'shortlisted',
    appliedAt: new Date('2024-01-15'),
    coverLetter: 'I am excited to apply for the Frontend Developer Intern position...',
    interviewDate: new Date('2024-02-10'),
  },
  {
    id: '2',
    student: mockStudents[0],
    internship: mockInternships[2],
    status: 'applied',
    appliedAt: new Date('2024-01-20'),
    coverLetter: 'I am interested in the Full Stack Developer position...',
  },
  {
    id: '3',
    student: mockStudents[1],
    internship: mockInternships[1],
    status: 'ongoing',
    appliedAt: new Date('2023-12-01'),
    interviewDate: new Date('2023-12-15'),
  },
];

export const mockWorkLogs: WorkLog[] = [
  {
    id: '1',
    student: mockStudents[1],
    internship: mockInternships[1],
    date: new Date('2024-01-15'),
    tasks: 'Implemented data preprocessing pipeline for customer analytics',
    hours: 8,
    files: ['preprocessing.py', 'data_analysis.ipynb'],
    mentorFeedback: 'Excellent work on the data pipeline. Great attention to detail.',
    status: 'approved',
  },
  {
    id: '2',
    student: mockStudents[1],
    internship: mockInternships[1],
    date: new Date('2024-01-16'),
    tasks: 'Created machine learning model for customer segmentation',
    hours: 7,
    files: ['ml_model.py'],
    status: 'pending',
  },
];

export const mockCertificates: Certificate[] = [
  {
    id: '1',
    student: mockStudents[0],
    internship: mockInternships[0],
    issuedAt: new Date('2023-12-15'),
    qrCode: 'CERT-12345-ABCD',
    verificationUrl: 'https://verify.internship-platform.com/cert/12345',
    skills: ['React', 'JavaScript', 'Frontend Development'],
    performance: 'excellent',
  },
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    userId: '1',
    title: 'New Internship Match',
    message: '3 new internships match your skills profile',
    type: 'info',
    read: false,
    createdAt: new Date('2024-01-20'),
    actionUrl: '/student/internships',
  },
  {
    id: '2',
    userId: '1',
    title: 'Application Update',
    message: 'Your application for Frontend Developer Intern has been shortlisted',
    type: 'success',
    read: false,
    createdAt: new Date('2024-01-19'),
    actionUrl: '/student/applications',
  },
  {
    id: '3',
    userId: '1',
    title: 'Work Log Reminder',
    message: 'Please submit your work log for this week',
    type: 'warning',
    read: true,
    createdAt: new Date('2024-01-18'),
    actionUrl: '/student/work-logs',
  },
];

export const mockDashboardStats: DashboardStats = {
  totalApplications: 12,
  activeApplications: 3,
  completedInternships: 2,
  profileCompleteness: 85,
  skillMatchAverage: 88,
  upcomingDeadlines: 2,
};

// Update the applications in internships
mockInternships[0].applications = [mockApplications[0]];
mockInternships[1].applications = [mockApplications[2]];
mockInternships[2].applications = [mockApplications[1]];

// Update the applications in students
mockStudents[0].applications = [mockApplications[0], mockApplications[1]];
mockStudents[1].applications = [mockApplications[2]];

// Update the work logs in students
mockStudents[1].workLogs = mockWorkLogs;
