'use client';

import { useState, useMemo } from 'react';
import { Plus, Filter, Search, Calendar, TrendingUp } from 'lucide-react';

import { MainLayout } from '@/components/layout/main-layout';
import { ApplicationCard } from '@/components/applications/application-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockApplications, mockStudents } from '@/lib/mock-data';
import { Application } from '@/types';

const statusColumns = [
  { key: 'applied', label: 'Applied', color: 'bg-blue-50 border-blue-200' },
  { key: 'shortlisted', label: 'Shortlisted', color: 'bg-yellow-50 border-yellow-200' },
  { key: 'interview', label: 'Interview', color: 'bg-purple-50 border-purple-200' },
  { key: 'offer', label: 'Offer', color: 'bg-green-50 border-green-200' },
  { key: 'ongoing', label: 'Ongoing', color: 'bg-indigo-50 border-indigo-200' },
  { key: 'completed', label: 'Completed', color: 'bg-gray-50 border-gray-200' },
  { key: 'rejected', label: 'Rejected', color: 'bg-red-50 border-red-200' },
];

export default function ApplicationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  // Mock user data - in real app, this would come from auth context
  const user = {
    name: 'John Doe',
    email: 'john.doe@university.edu',
    role: 'student',
    avatar: '/avatars/john-doe.jpg',
  };

  const notifications = 3;

  // Filter and search applications
  const filteredApplications = useMemo(() => {
    let filtered = [...mockApplications];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(application =>
        application.internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        application.internship.company.companyName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(application => application.status === statusFilter);
    }

    // Sort applications
    switch (sortBy) {
      case 'recent':
        filtered.sort((a, b) => b.appliedAt.getTime() - a.appliedAt.getTime());
        break;
      case 'deadline':
        filtered.sort((a, b) => a.internship.deadline.getTime() - b.internship.deadline.getTime());
        break;
      case 'stipend':
        filtered.sort((a, b) => b.internship.stipend - a.internship.stipend);
        break;
      case 'company':
        filtered.sort((a, b) => a.internship.company.companyName.localeCompare(b.internship.company.companyName));
        break;
    }

    return filtered;
  }, [searchQuery, statusFilter, sortBy]);

  // Group applications by status
  const applicationsByStatus = useMemo(() => {
    const grouped: { [key: string]: Application[] } = {};
    statusColumns.forEach(column => {
      grouped[column.key] = filteredApplications.filter(app => app.status === column.key);
    });
    return grouped;
  }, [filteredApplications]);

  const handleViewDetails = (application: Application) => {
    console.log('Viewing details for:', application.internship.title);
    // In real app, this would open a modal or navigate to details page
  };

  const handleUpdateStatus = async (application: Application, newStatus: string) => {
    console.log('Updating status for:', application.internship.title, 'to:', newStatus);
    // In real app, this would make an API call
  };

  const getStatusStats = () => {
    const stats = {
      total: filteredApplications.length,
      applied: applicationsByStatus.applied?.length || 0,
      shortlisted: applicationsByStatus.shortlisted?.length || 0,
      interview: applicationsByStatus.interview?.length || 0,
      offer: applicationsByStatus.offer?.length || 0,
      ongoing: applicationsByStatus.ongoing?.length || 0,
      completed: applicationsByStatus.completed?.length || 0,
      rejected: applicationsByStatus.rejected?.length || 0,
    };
    return stats;
  };

  const stats = getStatusStats();

  return (
    <MainLayout user={user} notifications={notifications}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Application Tracker</h1>
            <p className="text-gray-600">
              Track and manage your internship applications
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Apply to New Internship
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Applications</p>
                <p className="text-2xl font-bold text-blue-600">{stats.total}</p>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Shortlisted</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.shortlisted}</p>
              </div>
              <div className="p-2 bg-yellow-50 rounded-lg">
                <Calendar className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Interviews</p>
                <p className="text-2xl font-bold text-purple-600">{stats.interview}</p>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Offers</p>
                <p className="text-2xl font-bold text-green-600">{stats.offer}</p>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {statusColumns.map((column) => (
                  <SelectItem key={column.key} value={column.key}>
                    {column.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="deadline">Deadline</SelectItem>
                <SelectItem value="stipend">Stipend</SelectItem>
                <SelectItem value="company">Company</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Applications Grid/List */}
        {filteredApplications.length === 0 ? (
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
            <CardContent className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
              <p className="text-gray-600 mb-4">
                {searchQuery || statusFilter !== 'all' 
                  ? 'Try adjusting your search criteria or filters'
                  : 'Start applying to internships to see them here'
                }
              </p>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Apply to Internships
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApplications.map((application) => (
              <ApplicationCard
                key={application.id}
                application={application}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
              />
            ))}
          </div>
        )}

        {/* Status Breakdown */}
        {statusFilter === 'all' && (
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Application Status Breakdown
              </CardTitle>
              <CardDescription>
                Overview of your applications across different stages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {statusColumns.map((column) => {
                  const count = applicationsByStatus[column.key]?.length || 0;
                  return (
                    <div key={column.key} className="text-center">
                      <div className={`p-4 rounded-lg border ${column.color} mb-2`}>
                        <div className="text-2xl font-bold text-gray-900">{count}</div>
                        <div className="text-sm text-gray-600">{column.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </MainLayout>
  );
}
