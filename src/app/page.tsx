import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Building2, 
  GraduationCap, 
  Sparkles, 
  TrendingUp,
  Shield,
  Zap,
  Award,
  Target,
  BarChart3,
  Clock,
  FileCheck
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:shadow-blue-600/40 transition-shadow">
              <span className="text-white font-bold text-base">IP</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Internship Platform
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              How it Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Testimonials
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="hidden sm:flex">Login</Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30">
                Get Started
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              Trusted by 10,000+ Students
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Connect Students with
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Meaningful Internships
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              The comprehensive platform that bridges the gap between students, colleges, and companies 
              for successful internship experiences. Track progress, ensure compliance, and achieve goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 transition-all text-base px-8 py-6">
                  Start Free Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/student/dashboard">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-300 hover:bg-gray-50 text-base px-8 py-6">
                  View Demo
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Free forever plan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-sm font-medium text-gray-600">Active Students</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-sm font-medium text-gray-600">Partner Companies</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-green-600 to-green-700 bg-clip-text text-transparent mb-2">
                200+
              </div>
              <div className="text-sm font-medium text-gray-600">Partnered Colleges</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-orange-600 to-orange-700 bg-clip-text text-transparent mb-2">
                5K+
              </div>
              <div className="text-sm font-medium text-gray-600">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200">
              Platform Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed for students, colleges, and companies to manage 
              the entire internship lifecycle seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Student Features */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 bg-gradient-to-br from-white to-blue-50/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
              <CardHeader className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">For Students</CardTitle>
                <CardDescription className="text-base">
                  Discover, apply, and track your internship journey with AI-powered matching
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Smart Matching</div>
                      <div className="text-sm text-gray-600">AI-powered job recommendations</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Application Tracking</div>
                      <div className="text-sm text-gray-600">Track every stage in real-time</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Work Logs</div>
                      <div className="text-sm text-gray-600">Daily progress documentation</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Digital Certificates</div>
                      <div className="text-sm text-gray-600">Verified completion badges</div>
                    </div>
                  </div>
                </div>
                <Link href="/register">
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 shadow-lg">
                    Join as Student
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* College Features */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-200 bg-gradient-to-br from-white to-green-50/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all"></div>
              <CardHeader className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 transition-shadow">
                  <Building2 className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">For Colleges</CardTitle>
                <CardDescription className="text-base">
                  Manage student internships and ensure compliance effortlessly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Student Portal</div>
                      <div className="text-sm text-gray-600">Centralized student management</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Compliance Tracking</div>
                      <div className="text-sm text-gray-600">Automated risk alerts</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Faculty Dashboard</div>
                      <div className="text-sm text-gray-600">Mentor assignment & tracking</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Analytics Reports</div>
                      <div className="text-sm text-gray-600">Comprehensive insights</div>
                    </div>
                  </div>
                </div>
                <Link href="/register">
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 shadow-lg">
                    Join as College
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Company Features */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 bg-gradient-to-br from-white to-purple-50/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all"></div>
              <CardHeader className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">For Companies</CardTitle>
                <CardDescription className="text-base">
                  Find and manage talented interns with powerful tools
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Post Opportunities</div>
                      <div className="text-sm text-gray-600">Reach thousands of students</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Smart Filtering</div>
                      <div className="text-sm text-gray-600">AI-powered candidate matching</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Intern Management</div>
                      <div className="text-sm text-gray-600">Track performance & growth</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Analytics Dashboard</div>
                      <div className="text-sm text-gray-600">Data-driven insights</div>
                    </div>
                  </div>
                </div>
                <Link href="/register">
                  <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 shadow-lg">
                    Join as Company
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Additional Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-600">Instant application responses and real-time updates</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-sm text-gray-600">Bank-level security for your sensitive data</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
              <p className="text-sm text-gray-600">Comprehensive insights and reporting tools</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Verified Badges</h3>
              <p className="text-sm text-gray-600">Digital certificates with QR verification</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">
              Simple Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started in minutes with our streamlined onboarding process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/30">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent hidden md:block"></div>
                <div className="mb-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Step 1</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Create Account</h3>
                <p className="text-gray-600">Sign up in seconds with your email or social account</p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/30">
                  <FileCheck className="h-8 w-8 text-white" />
                </div>
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-300 to-transparent hidden md:block"></div>
                <div className="mb-4">
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Step 2</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Profile</h3>
                <p className="text-gray-600">Add your details, skills, and preferences to get matched</p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/30">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="mb-4">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Step 3</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Start Growing</h3>
                <p className="text-gray-600">Apply to internships and track your progress in real-time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 p-12 lg:p-20 shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Internship Experience?
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Join thousands of students, colleges, and companies already using our platform 
                to create meaningful internship connections and achieve career goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-blue-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all text-base px-8 py-6">
                    Create Free Account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white  text-black hover:bg-white backdrop-blur text-base px-8 py-6">
                    Sign In
                  </Button>
                </Link>
              </div>
              <p className="mt-6 text-sm text-blue-200">
                No credit card required • Free forever plan • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IP</span>
              </div>
              <span className="text-lg font-bold text-gray-900">Internship Platform</span>
            </div>
            <p className="text-sm text-gray-600">
              © 2025 Internship Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}