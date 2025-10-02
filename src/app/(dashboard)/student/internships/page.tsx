'use client';

import { useState, useMemo } from 'react';
import { Search, Grid, List, SortAsc, Filter } from 'lucide-react';

import { MainLayout } from '@/components/layout/main-layout';
import { InternshipCard } from '@/components/internships/internship-card';
import { Filters, FilterChips } from '@/components/internships/filters';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockInternships, mockStudents } from '@/lib/mock-data';
import { Internship, FilterOptions } from '@/types';

export default function InternshipsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [bookmarkedInternships, setBookmarkedInternships] = useState<Set<string>>(new Set());
  
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    location: [],
    stipendRange: [0, 50000],
    duration: [],
    isRemote: null,
    verifiedOnly: false,
    skills: [],
  });

  // Mock user - in real app, this would come from auth context
  const user = {
    name: 'John Doe',
    email: 'john.doe@university.edu',
    role: 'student',
    avatar: '/avatars/john-doe.jpg',
  };

  const notifications = 3;

  // Filter and search internships
  const filteredInternships = useMemo(() => {
    let filtered = [...mockInternships];

    // Search filter
    if (searchQuery || filters.search) {
      const query = (searchQuery || filters.search).toLowerCase();
      filtered = filtered.filter(internship =>
        internship.title.toLowerCase().includes(query) ||
        internship.company.companyName.toLowerCase().includes(query) ||
        internship.description.toLowerCase().includes(query) ||
        internship.requirements.some(skill => skill.toLowerCase().includes(query))
      );
    }

    // Location filter
    if (filters.location.length > 0) {
      filtered = filtered.filter(internship =>
        filters.location.includes(internship.location) ||
        (internship.isRemote && filters.location.includes('Remote'))
      );
    }

    // Remote work filter
    if (filters.isRemote !== null) {
      filtered = filtered.filter(internship => internship.isRemote === filters.isRemote);
    }

    // Stipend range filter
    filtered = filtered.filter(internship =>
      internship.stipend >= filters.stipendRange[0] &&
      internship.stipend <= filters.stipendRange[1]
    );

    // Duration filter
    if (filters.duration.length > 0) {
      filtered = filtered.filter(internship =>
        filters.duration.includes(internship.duration)
      );
    }

    // Skills filter
    if (filters.skills.length > 0) {
      filtered = filtered.filter(internship =>
        filters.skills.some(skill => internship.requirements.includes(skill))
      );
    }

    // Verified companies only
    if (filters.verifiedOnly) {
      filtered = filtered.filter(internship =>
        internship.company.verificationStatus !== 'basic'
      );
    }

    // Sort internships
    switch (sortBy) {
      case 'deadline':
        filtered.sort((a, b) => a.deadline.getTime() - b.deadline.getTime());
        break;
      case 'stipend':
        filtered.sort((a, b) => b.stipend - a.stipend);
        break;
      case 'skillMatch':
        filtered.sort((a, b) => (b.skillMatch || 0) - (a.skillMatch || 0));
        break;
      case 'relevance':
      default:
        // Keep original order for relevance
        break;
    }

    return filtered;
  }, [searchQuery, filters, sortBy]);

  const handleApply = async (internship: Internship) => {
    // Mock apply functionality
    console.log('Applying to:', internship.title);
    // In real app, this would make an API call
  };

  const handleBookmark = (internship: Internship) => {
    const newBookmarked = new Set(bookmarkedInternships);
    if (newBookmarked.has(internship.id)) {
      newBookmarked.delete(internship.id);
    } else {
      newBookmarked.add(internship.id);
    }
    setBookmarkedInternships(newBookmarked);
  };

  const handleFiltersChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const handleRemoveFilter = (key: keyof FilterOptions, value?: any) => {
    const newFilters = { ...filters };
    
    switch (key) {
      case 'search':
        newFilters.search = '';
        break;
      case 'location':
        if (value) {
          newFilters.location = newFilters.location.filter(l => l !== value);
        } else {
          newFilters.location = [];
        }
        break;
      case 'duration':
        if (value) {
          newFilters.duration = newFilters.duration.filter(d => d !== value);
        } else {
          newFilters.duration = [];
        }
        break;
      case 'skills':
        if (value) {
          newFilters.skills = newFilters.skills.filter(s => s !== value);
        } else {
          newFilters.skills = [];
        }
        break;
      case 'isRemote':
        newFilters.isRemote = null;
        break;
      case 'verifiedOnly':
        newFilters.verifiedOnly = false;
        break;
      case 'stipendRange':
        newFilters.stipendRange = [0, 50000];
        break;
    }
    
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      location: [],
      stipendRange: [0, 50000],
      duration: [],
      isRemote: null,
      verifiedOnly: false,
      skills: [],
    });
    setSearchQuery('');
  };

  return (
    <MainLayout user={user} notifications={notifications}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Find Internships</h1>
            <p className="text-gray-600">
              Discover opportunities that match your skills and interests
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search internships, companies, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Sort and Filter Controls */}
          <div className="flex items-center gap-3">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SortAsc className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="deadline">Deadline</SelectItem>
                <SelectItem value="stipend">Stipend</SelectItem>
                <SelectItem value="skillMatch">Skill Match</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Filter Chips */}
        <FilterChips filters={filters} onRemoveFilter={handleRemoveFilter} />

        {/* Results Summary */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing <span className="font-medium">{filteredInternships.length}</span> internships
            {filteredInternships.length !== mockInternships.length && (
              <span> of {mockInternships.length} total</span>
            )}
          </p>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-blue-50 text-blue-600">
              {bookmarkedInternships.size} bookmarked
            </Badge>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Filters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Internships Grid/List */}
          <div className="flex-1">
            {filteredInternships.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No internships found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search criteria or filters
                </p>
                <Button onClick={handleClearFilters}>
                  Clear all filters
                </Button>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-2' 
                  : 'grid-cols-1'
              }`}>
                {filteredInternships.map((internship) => (
                  <InternshipCard
                    key={internship.id}
                    internship={internship}
                    onApply={handleApply}
                    onBookmark={handleBookmark}
                    isBookmarked={bookmarkedInternships.has(internship.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
