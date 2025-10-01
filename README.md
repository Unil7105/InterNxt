# 🎓 Internship Management Platform

A comprehensive full-stack platform that bridges the gap between students, colleges, and companies for successful internship experiences. Built with modern technologies and designed for scalability, security, and ease of use.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black)

## 🌟 Features

### 👨‍🎓 **For Students**
- **Smart Job Matching** - AI-powered internship recommendations based on skills and preferences
- **Application Tracking** - Real-time Kanban board to track applications across 6 stages
- **Work Log Management** - Daily/weekly work activity submission with calendar view
- **Digital Certificates** - Auto-generated certificates with QR code verification
- **Profile Management** - Comprehensive profile with skill matching percentage
- **Progress Dashboard** - Visual insights into internship journey

### 🏛️ **For Colleges**
- **Admin Dashboard** - Centralized student management and oversight
- **Compliance Tracking** - Automated risk alerts and student monitoring
- **Faculty Portal** - Mentor assignment and student progress tracking
- **Department Analytics** - Performance metrics and reports
- **Work Log Review** - Faculty approval workflow for student submissions
- **Student Directory** - Complete student information with filters

### 🏢 **For Companies**
- **Post Opportunities** - Create and manage internship listings
- **Application Management** - Review and filter candidates efficiently
- **Intern Tracking** - Monitor active interns and their progress
- **Performance Analytics** - Data-driven insights on intern performance
- **Smart Filtering** - AI-powered candidate matching
- **Dashboard Overview** - Quick insights into internship programs

## 🚀 Tech Stack

### **Frontend**
- **Framework**: [Next.js 15.5.4](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: Turbopack

### **Backend** (Ready for Integration)
- API Routes structure prepared
- Mock data layer for prototyping
- Type-safe interfaces defined

### **Design System**
- **Theme**: Custom "Surfgeo" design system
- **Colors**: Blue (#2563EB) primary, Gray hierarchy
- **Components**: Card-based layouts with consistent spacing
- **Typography**: Inter font family
- **Responsive**: Mobile-first approach

## 📁 Project Structure

```
internship-platform/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (auth)/                   # Authentication routes
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (dashboard)/              # Dashboard routes
│   │   │   ├── student/              # Student portal
│   │   │   │   ├── dashboard/
│   │   │   │   ├── internships/
│   │   │   │   ├── applications/
│   │   │   │   ├── work-logs/
│   │   │   │   └── certificates/
│   │   │   ├── college/              # College portal
│   │   │   │   ├── admin/
│   │   │   │   └── faculty/
│   │   │   └── company/              # Company portal
│   │   │       └── dashboard/
│   │   └── page.tsx                  # Landing page
│   ├── components/
│   │   ├── layout/                   # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── main-layout.tsx
│   │   ├── dashboard/                # Dashboard components
│   │   ├── internships/              # Internship components
│   │   ├── applications/             # Application components
│   │   └── ui/                       # shadcn/ui components
│   ├── lib/
│   │   ├── constants.ts              # App-wide constants
│   │   ├── mock-data.ts              # Mock data for prototype
│   │   └── utils.ts                  # Utility functions
│   └── types/
│       └── index.ts                  # TypeScript interfaces
├── public/                           # Static assets
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
└── package.json                      # Dependencies
```

## 🛠️ Installation & Setup

### **Prerequisites**
- Node.js 18.x or higher
- npm or yarn or pnpm

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd internship-platform
```

### **2. Install Dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

### **3. Run Development Server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### **4. Build for Production**
```bash
npm run build
npm start
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Blue (#2563EB) - Brand color, CTAs, links
- **Background**: White (#FFFFFF) - Clean, minimal
- **Foreground**: Gray-900 (#1E1E1E) - Text
- **Border**: Gray-200 (#E5E7EB) - Dividers, cards
- **Muted**: Gray-500 (#6B7280) - Secondary text

### **Typography**
- **Font Family**: Inter (system fallback)
- **Headings**: font-semibold, text-gray-900
- **Body**: font-normal, text-gray-900
- **Small**: text-sm, text-gray-500

### **Components**
- **Cards**: `bg-white border border-gray-200 rounded-xl shadow-sm p-6`
- **Buttons**: Primary (blue-600), Secondary (gray-100), Outline (border)
- **Inputs**: White background with gray-200 border
- **Badges**: Color-coded with blue, green, purple, orange variants

## 📱 Routes

### **Public Routes**
- `/` - Landing page
- `/login` - Authentication
- `/register` - User registration

### **Student Routes**
- `/student/dashboard` - Main dashboard
- `/student/internships` - Browse & search internships
- `/student/applications` - Track application status
- `/student/work-logs` - Submit work logs
- `/student/certificates` - View certificates

### **College Routes**
- `/college/admin` - Admin dashboard
- `/college/faculty` - Faculty mentor dashboard

### **Company Routes**
- `/company/dashboard` - Company dashboard

## 🔑 Key Features Implementation

### **1. Authentication**
- Mock authentication system
- Role-based access (Student, College, Company)
- Persistent user data
- Protected routes

### **2. Application Tracking**
6-stage Kanban board:
1. Applied
2. Shortlisted
3. Interview
4. Offer
5. Ongoing
6. Completed

### **3. Work Logs**
- Calendar view
- Daily/weekly submission
- Status tracking (Pending, Approved, Rejected)
- Faculty review system

### **4. Certificates**
- Auto-generated on completion
- QR code verification
- Downloadable PDFs (ready for integration)
- Digital signatures

### **5. Analytics**
- Student compliance tracking
- Department performance metrics
- Application funnel insights
- Risk alert system

## 🧩 Component Library

### **shadcn/ui Components Used**
- Avatar
- Badge
- Button
- Card
- Checkbox
- Collapsible
- Dialog
- Dropdown Menu
- Input
- Label
- Progress
- Select
- Separator
- Sheet
- Slider
- Switch
- Tabs
- Textarea
- Toast

## 🔄 Data Flow

```
User Input → Component → State Management → Mock Data Layer
                                          ↓
                                    Display Update
```

*Ready for backend integration with API routes*

## 🎯 Future Enhancements

### **Backend Integration**
- [ ] Connect to PostgreSQL/MongoDB database
- [ ] Implement NextAuth.js for authentication
- [ ] Create REST API endpoints
- [ ] Add real-time notifications with WebSocket

### **Additional Features**
- [ ] Email notifications
- [ ] Chat/messaging system
- [ ] File upload for documents
- [ ] Advanced analytics with charts (Recharts)
- [ ] Video interview scheduling
- [ ] Payment integration for premium features

### **Performance**
- [ ] Image optimization
- [ ] Lazy loading
- [ ] Server-side rendering optimization
- [ ] Caching strategies

### **Testing**
- [ ] Unit tests with Jest
- [ ] Integration tests
- [ ] E2E tests with Playwright
- [ ] Accessibility testing

## 📊 Performance Metrics

- **First Load JS**: ~135 kB (shared bundle)
- **Largest Page**: Internships page (52.7 kB)
- **Build Time**: ~6 seconds
- **All Pages**: Pre-rendered as static content

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Next.js](https://nextjs.org/) for the amazing framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS
- [Lucide](https://lucide.dev/) for the icon library

## 📧 Contact

For questions or support, please reach out:
- Email: support@internshipplatform.com
- GitHub Issues: [Create an issue](https://github.com/yourusername/internship-platform/issues)

---

**Built with ❤️ using Next.js, TypeScript, and TailwindCSS**
