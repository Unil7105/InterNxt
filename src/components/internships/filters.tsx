'use client';

import { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  DollarSign, 
  Clock, 
  X,
  ChevronDown
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface FilterOptions {
  search: string;
  location: string[];
  stipendRange: [number, number];
  duration: string[];
  isRemote: boolean | null;
  verifiedOnly: boolean;
  skills: string[];
}

interface FiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  onClearFilters: () => void;
}

const locations = [
  'Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Remote'
];

const durations = [
  '1 month', '2 months', '3 months', '6 months', '1 year'
];

const skills = [
  'React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'Java', 'C++',
  'Data Analysis', 'Machine Learning', 'UI/UX Design', 'Project Management'
];

export function Filters({ filters, onFiltersChange, onClearFilters }: FiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, search: value });
  };

  const handleLocationToggle = (location: string) => {
    const newLocations = filters.location.includes(location)
      ? filters.location.filter(l => l !== location)
      : [...filters.location, location];
    onFiltersChange({ ...filters, location: newLocations });
  };

  const handleDurationToggle = (duration: string) => {
    const newDurations = filters.duration.includes(duration)
      ? filters.duration.filter(d => d !== duration)
      : [...filters.duration, duration];
    onFiltersChange({ ...filters, duration: newDurations });
  };

  const handleSkillToggle = (skill: string) => {
    const newSkills = filters.skills.includes(skill)
      ? filters.skills.filter(s => s !== skill)
      : [...filters.skills, skill];
    onFiltersChange({ ...filters, skills: newSkills });
  };

  const handleStipendChange = (value: number[]) => {
    onFiltersChange({ ...filters, stipendRange: [value[0], value[1]] });
  };

  const handleRemoteChange = (value: string) => {
    const remoteValue = value === 'all' ? null : value === 'remote';
    onFiltersChange({ ...filters, isRemote: remoteValue });
  };

  const handleVerifiedToggle = (checked: boolean) => {
    onFiltersChange({ ...filters, verifiedOnly: checked });
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.search) count++;
    if (filters.location.length > 0) count++;
    if (filters.duration.length > 0) count++;
    if (filters.skills.length > 0) count++;
    if (filters.isRemote !== null) count++;
    if (filters.verifiedOnly) count++;
    if (filters.stipendRange[0] > 0 || filters.stipendRange[1] < 50000) count++;
    return count;
  };

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full text-xs font-medium">
                {activeFiltersCount}
              </Badge>
            )}
          </CardTitle>
          {activeFiltersCount > 0 && (
            <Button variant="ghost" size="sm" onClick={onClearFilters}>
              <X className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search">Search Internships</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              id="search"
              placeholder="Job title, company, or keywords..."
              value={filters.search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Location */}
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <span className="font-medium text-gray-900">Location</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 mt-3">
            <div className="grid grid-cols-2 gap-2">
              {locations.map((location) => (
                <div key={location} className="flex items-center space-x-2">
                  <Checkbox
                    id={`location-${location}`}
                    checked={filters.location.includes(location)}
                    onCheckedChange={() => handleLocationToggle(location)}
                  />
                  <Label 
                    htmlFor={`location-${location}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {location}
                  </Label>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Remote Work */}
        <div className="space-y-2">
          <Label>Work Type</Label>
          <Select 
            value={filters.isRemote === null ? 'all' : filters.isRemote ? 'remote' : 'onsite'}
            onValueChange={handleRemoteChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select work type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="remote">Remote Only</SelectItem>
              <SelectItem value="onsite">On-site Only</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Stipend Range */}
        <div className="space-y-3">
          <Label>Stipend Range (₹{filters.stipendRange[0].toLocaleString()} - ₹{filters.stipendRange[1].toLocaleString()})</Label>
          <Slider
            value={filters.stipendRange}
            onValueChange={handleStipendChange}
            max={50000}
            min={0}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>₹0</span>
            <span>₹50,000+</span>
          </div>
        </div>

        {/* Duration */}
        <div className="space-y-2">
          <Label>Duration</Label>
          <div className="space-y-2">
            {durations.map((duration) => (
              <div key={duration} className="flex items-center space-x-2">
                <Checkbox
                  id={`duration-${duration}`}
                  checked={filters.duration.includes(duration)}
                  onCheckedChange={() => handleDurationToggle(duration)}
                />
                <Label 
                  htmlFor={`duration-${duration}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {duration}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-2">
          <Label>Skills</Label>
          <div className="grid grid-cols-2 gap-2">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center space-x-2">
                <Checkbox
                  id={`skill-${skill}`}
                  checked={filters.skills.includes(skill)}
                  onCheckedChange={() => handleSkillToggle(skill)}
                />
                <Label 
                  htmlFor={`skill-${skill}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {skill}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Only */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="verified-only"
            checked={filters.verifiedOnly}
            onCheckedChange={handleVerifiedToggle}
          />
          <Label 
            htmlFor="verified-only"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Verified companies only
          </Label>
        </div>
      </CardContent>
    </Card>
  );
}

export function FilterChips({ filters, onRemoveFilter }: { 
  filters: FilterOptions; 
  onRemoveFilter: (key: keyof FilterOptions, value?: any) => void;
}) {
  const chips = [];

  if (filters.search) {
    chips.push({
      key: 'search',
      label: `Search: "${filters.search}"`,
      onRemove: () => onRemoveFilter('search')
    });
  }

  filters.location.forEach(location => {
    chips.push({
      key: `location-${location}`,
      label: location,
      onRemove: () => onRemoveFilter('location', location)
    });
  });

  filters.duration.forEach(duration => {
    chips.push({
      key: `duration-${duration}`,
      label: duration,
      onRemove: () => onRemoveFilter('duration', duration)
    });
  });

  filters.skills.forEach(skill => {
    chips.push({
      key: `skill-${skill}`,
      label: skill,
      onRemove: () => onRemoveFilter('skills', skill)
    });
  });

  if (filters.isRemote !== null) {
    chips.push({
      key: 'remote',
      label: filters.isRemote ? 'Remote' : 'On-site',
      onRemove: () => onRemoveFilter('isRemote')
    });
  }

  if (filters.verifiedOnly) {
    chips.push({
      key: 'verified',
      label: 'Verified Only',
      onRemove: () => onRemoveFilter('verifiedOnly')
    });
  }

  if (filters.stipendRange[0] > 0 || filters.stipendRange[1] < 50000) {
    chips.push({
      key: 'stipend',
      label: `₹${filters.stipendRange[0].toLocaleString()}-${filters.stipendRange[1].toLocaleString()}`,
      onRemove: () => onRemoveFilter('stipendRange', [0, 50000])
    });
  }

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip) => (
        <Badge 
          key={chip.key}
          variant="secondary" 
          className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
        >
          {chip.label}
          <Button
            variant="ghost"
            size="sm"
            onClick={chip.onRemove}
            className="h-4 w-4 p-0 ml-2 hover:bg-blue-100"
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      ))}
    </div>
  );
}
