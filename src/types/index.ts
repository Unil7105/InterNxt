export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'college' | 'company';
  avatar?: string;
  createdAt: Date;
}

export interface Student extends User {
  role: 'student';
  college: string;
  skills: string[];
  profileCompleteness: number;
  applications: Application[];
  workLogs: WorkLog[];
}

export interface College extends User {
  role: 'college';
  collegeName: string;
  students: Student[];
  faculty: Faculty[];
}

export interface Company extends User {
  role: 'company';
  companyName: string;
  logo?: string;
  verificationStatus: 'basic' | 'trusted' | 'premium';
  internships: Internship[];
  pastInterns: Student[];
}

export interface Faculty {
  id: string;
  name: string;
  email: string;
  department: string;
  assignedStudents: Student[];
}

export interface Internship {
  id: string;
  title: string;
  company: Company;
  description: string;
  requirements: string[];
  stipend: number;
  duration: string;
  location: string;
  isRemote: boolean;
  deadline: Date;
  skillMatch?: number;
  applications: Application[];
  status: 'active' | 'closed' | 'paused';
}

export interface Application {
  id: string;
  student: Student;
  internship: Internship;
  status: 'applied' | 'shortlisted' | 'interview' | 'offer' | 'ongoing' | 'completed' | 'rejected';
  appliedAt: Date;
  coverLetter?: string;
  resume?: string;
  interviewDate?: Date;
  notes?: string;
}

export interface WorkLog {
  id: string;
  student: Student;
  internship: Internship;
  date: Date;
  tasks: string;
  hours: number;
  files?: string[];
  mentorFeedback?: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface Certificate {
  id: string;
  student: Student;
  internship: Internship;
  issuedAt: Date;
  qrCode: string;
  verificationUrl: string;
  skills: string[];
  performance: 'excellent' | 'good' | 'satisfactory';
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: Date;
  actionUrl?: string;
}

export interface DashboardStats {
  totalApplications: number;
  activeApplications: number;
  completedInternships: number;
  profileCompleteness: number;
  skillMatchAverage: number;
  upcomingDeadlines: number;
}

export interface FilterOptions {
  role?: string[];
  location?: string[];
  stipend?: {
    min: number;
    max: number;
  };
  duration?: string[];
  isRemote?: boolean;
  verifiedOnly?: boolean;
}
