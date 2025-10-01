'use client';

import { MainLayout } from '@/components/layout/main-layout';
import { QuickActions, StudentQuickStats } from '@/components/dashboard/quick-actions';
import { RecentActivity, SkillMatchRecommendations } from '@/components/dashboard/recent-activity';
import { mockStudents, mockNotifications } from '@/lib/mock-data';

export default function StudentDashboard() {
  // Mock user data - in real app, this would come from auth context
  const user = {
    name: 'John Doe',
    email: 'john.doe@university.edu',
    role: 'student',
    avatar: '/avatars/john-doe.jpg',
  };

  const notifications = mockNotifications.filter(n => !n.read).length;

  return (
    <MainLayout user={user} notifications={notifications}>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome back, {user.name}! 👋
              </h1>
              <p className="text-gray-600">
                Here's what's happening with your internship journey today.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <StudentQuickStats />

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <QuickActions userRole="student" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div>
            <RecentActivity />
          </div>

          {/* Skill Match Recommendations */}
          <div>
            <SkillMatchRecommendations />
          </div>
        </div>

        {/* Additional Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Application Progress */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Application Progress
              </h3>
              <div className="p-2 bg-blue-50 rounded-lg">
                <span className="text-blue-600 text-sm font-medium">12</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Applied</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Shortlisted</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Interviews</span>
                <span className="font-medium">1</span>
              </div>
            </div>
          </div>

          {/* Skill Development */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Skill Development
              </h3>
              <div className="p-2 bg-green-50 rounded-lg">
                <span className="text-green-600 text-sm font-medium">4</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">React</span>
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">JavaScript</span>
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Python</span>
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Upcoming Events
              </h3>
              <div className="p-2 bg-orange-50 rounded-lg">
                <span className="text-orange-600 text-sm font-medium">2</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Interview - TechCorp</p>
                  <p className="text-xs text-gray-500">Feb 10, 2024 • 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Work Log Due</p>
                  <p className="text-xs text-gray-500">Feb 12, 2024 • 11:59 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
