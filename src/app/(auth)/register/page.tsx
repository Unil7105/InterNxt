'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, Lock, User, GraduationCap, Building2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState<'student' | 'college' | 'company'>('student');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Mock registration logic
    setTimeout(() => {
      setIsLoading(false);
      router.push('/student/dashboard');
    }, 1000);
  };

  const roleOptions = [
    {
      value: 'student',
      label: 'Student',
      description: 'Find and apply to internships',
      icon: GraduationCap,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      value: 'college',
      label: 'College',
      description: 'Manage student internships',
      icon: Building2,
      color: 'bg-green-50 text-green-600 border-green-200',
    },
    {
      value: 'company',
      label: 'Company',
      description: 'Post internships and hire talent',
      icon: User,
      color: 'bg-purple-50 text-purple-600 border-purple-200',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">IP</span>
            </div>
            <span className="text-2xl font-semibold text-gray-900">
              Internship Platform
            </span>
          </div>
          <p className="text-gray-600">
            Join thousands of students, colleges, and companies
          </p>
        </div>

        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Create Your Account
            </CardTitle>
            <CardDescription>
              Choose your role and get started in minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Progress Indicator */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Step {currentStep} of 2</span>
                <span className="text-sm text-gray-500">50% Complete</span>
              </div>
              <Progress value={50} className="h-2" />
            </div>

            <Tabs value={selectedRole} onValueChange={(value) => setSelectedRole(value as 'student' | 'college' | 'company')} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                {roleOptions.map((role) => (
                  <TabsTrigger key={role.value} value={role.value} className="flex flex-col h-auto py-3">
                    <role.icon className="h-4 w-4 mb-1" />
                    <span className="text-xs">{role.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {roleOptions.map((role) => (
                <TabsContent key={role.value} value={role.value}>
                  <div className="space-y-6">
                    {/* Role Selection Card */}
                    <div className={`p-4 rounded-lg border-2 ${role.color} transition-colors`}>
                      <div className="flex items-center gap-3">
                        <role.icon className="h-6 w-6" />
                        <div>
                          <h3 className="font-semibold">{role.label}</h3>
                          <p className="text-sm opacity-80">{role.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Registration Form */}
                    <form onSubmit={handleRegister} className="space-y-4">
                      {error && (
                        <Alert variant="destructive">
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="Enter your first name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Enter your last name"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      {selectedRole === 'student' && (
                        <div className="space-y-2">
                          <Label htmlFor="college">College/University</Label>
                          <Input
                            id="college"
                            type="text"
                            placeholder="Enter your college name"
                            required
                          />
                        </div>
                      )}

                      {selectedRole === 'college' && (
                        <div className="space-y-2">
                          <Label htmlFor="collegeName">College/University Name</Label>
                          <Input
                            id="collegeName"
                            type="text"
                            placeholder="Enter your college name"
                            required
                          />
                        </div>
                      )}

                      {selectedRole === 'company' && (
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company Name</Label>
                          <Input
                            id="companyName"
                            type="text"
                            placeholder="Enter your company name"
                            required
                          />
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                          <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Create a strong password"
                            className="pl-10 pr-10"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          required
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <input
                          id="terms"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          required
                        />
                        <Label htmlFor="terms" className="text-sm text-gray-600">
                          I agree to the{' '}
                          <Link href="/terms" className="text-blue-600 hover:text-blue-500">
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                      </Button>
                    </form>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="flex justify-center items-center gap-6 mb-4">
            <Badge variant="secondary" className="bg-green-50 text-green-600">
              ✓ Free to Join
            </Badge>
            <Badge variant="secondary" className="bg-blue-50 text-blue-600">
              ✓ Verified Companies
            </Badge>
            <Badge variant="secondary" className="bg-purple-50 text-purple-600">
              ✓ Secure Platform
            </Badge>
          </div>
          <p className="text-xs text-gray-500">
            Join 10,000+ students and 500+ companies already using our platform
          </p>
        </div>
      </div>
    </div>
  );
}
