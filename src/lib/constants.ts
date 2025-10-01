export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  STUDENT: {
    DASHBOARD: '/student/dashboard',
    INTERNSHIPS: '/student/internships',
    APPLICATIONS: '/student/applications',
    WORK_LOGS: '/student/work-logs',
    PROFILE: '/student/profile',
    CERTIFICATES: '/student/certificates',
  },
  COLLEGE: {
    ADMIN: '/college/admin',
    FACULTY: '/college/faculty',
    STUDENTS: '/college/students',
    REPORTS: '/college/reports',
  },
  COMPANY: {
    DASHBOARD: '/company/dashboard',
    INTERNSHIPS: '/company/internships',
    APPLICATIONS: '/company/applications',
    INTERNS: '/company/interns',
    PROFILE: '/company/profile',
  },
} as const;

export const SKILLS = [
  'React',
  'Node.js',
  'Python',
  'JavaScript',
  'TypeScript',
  'Java',
  'C++',
  'Data Analysis',
  'Machine Learning',
  'UI/UX Design',
  'Project Management',
  'Communication',
  'Problem Solving',
  'Teamwork',
  'Leadership',
] as const;

export const INTERNSHIP_DURATIONS = [
  '1 month',
  '2 months',
  '3 months',
  '6 months',
  '1 year',
] as const;

export const APPLICATION_STATUSES = [
  'applied',
  'shortlisted',
  'interview',
  'offer',
  'ongoing',
  'completed',
  'rejected',
] as const;

export const VERIFICATION_STATUSES = {
  BASIC: 'basic',
  TRUSTED: 'trusted',
  PREMIUM: 'premium',
} as const;

export const NOTIFICATION_TYPES = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
} as const;

export const DASHBOARD_CARDS = {
  STUDENT: [
    {
      title: 'Apply to Internships',
      description: 'Discover and apply to verified internships',
      icon: 'Briefcase',
      href: ROUTES.STUDENT.INTERNSHIPS,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'View Applications',
      description: 'Track your application progress',
      icon: 'FileText',
      href: ROUTES.STUDENT.APPLICATIONS,
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Submit Work Logs',
      description: 'Log your daily work activities',
      icon: 'Calendar',
      href: ROUTES.STUDENT.WORK_LOGS,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'View Certificates',
      description: 'Access your completed certificates',
      icon: 'Award',
      href: ROUTES.STUDENT.CERTIFICATES,
      color: 'bg-orange-50 text-orange-600',
    },
  ],
  COLLEGE: [
    {
      title: 'Student Management',
      description: 'Manage student profiles and progress',
      icon: 'Users',
      href: ROUTES.COLLEGE.STUDENTS,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Compliance Reports',
      description: 'Generate compliance and progress reports',
      icon: 'BarChart',
      href: ROUTES.COLLEGE.REPORTS,
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Faculty Dashboard',
      description: 'Access faculty mentor tools',
      icon: 'GraduationCap',
      href: ROUTES.COLLEGE.FACULTY,
      color: 'bg-purple-50 text-purple-600',
    },
  ],
  COMPANY: [
    {
      title: 'Post Internship',
      description: 'Create new internship opportunities',
      icon: 'Plus',
      href: ROUTES.COMPANY.INTERNSHIPS,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Review Applications',
      description: 'Review and manage applications',
      icon: 'FileCheck',
      href: ROUTES.COMPANY.APPLICATIONS,
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Manage Interns',
      description: 'Track current and past interns',
      icon: 'Users',
      href: ROUTES.COMPANY.INTERNS,
      color: 'bg-purple-50 text-purple-600',
    },
  ],
} as const;
