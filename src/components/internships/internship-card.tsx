'use client';

import { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Bookmark, 
  BookmarkCheck,
  Users,
  Calendar,
  ExternalLink,
  Star
} from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Internship } from '@/types';

interface InternshipCardProps {
  internship: Internship;
  onApply?: (internship: Internship) => void;
  onBookmark?: (internship: Internship) => void;
  isBookmarked?: boolean;
}

export function InternshipCard({ 
  internship, 
  onApply, 
  onBookmark, 
  isBookmarked = false 
}: InternshipCardProps) {
  const [isApplying, setIsApplying] = useState(false);

  const handleApply = async () => {
    if (onApply) {
      setIsApplying(true);
      await onApply(internship);
      setIsApplying(false);
    }
  };

  const handleBookmark = () => {
    if (onBookmark) {
      onBookmark(internship);
    }
  };

  const formatDeadline = (date: Date) => {
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Expired';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    return `${diffDays} days left`;
  };

  const getVerificationBadge = (status: string) => {
    switch (status) {
      case 'premium':
        return (
          <Badge className="bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full text-xs font-medium">
            <Star className="h-3 w-3 mr-1" />
            Premium
          </Badge>
        );
      case 'trusted':
        return (
          <Badge className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full text-xs font-medium">
            ✓ Trusted
          </Badge>
        );
      default:
        return (
          <Badge className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full text-xs font-medium">
            Verified
          </Badge>
        );
    }
  };

  return (
    <Card className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={internship.company.logo} alt={internship.company.companyName} />
              <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                {internship.company.companyName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {internship.title}
              </CardTitle>
              <CardDescription className="text-sm text-gray-600">
                {internship.company.companyName}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {getVerificationBadge(internship.company.verificationStatus)}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBookmark}
              className="h-8 w-8 p-0"
            >
              {isBookmarked ? (
                <BookmarkCheck className="h-4 w-4 text-blue-600" />
              ) : (
                <Bookmark className="h-4 w-4 text-gray-400 hover:text-blue-600" />
              )}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {internship.description}
        </p>

        {/* Key Details */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <DollarSign className="h-4 w-4" />
            <span>₹{internship.stipend.toLocaleString()}/month</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-4 w-4" />
            <span>{internship.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{internship.isRemote ? 'Remote' : internship.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>{formatDeadline(internship.deadline)}</span>
          </div>
        </div>

        {/* Skill Match */}
        {internship.skillMatch && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Skill Match</span>
              <span className="font-medium text-blue-600">{internship.skillMatch}%</span>
            </div>
            <Progress value={internship.skillMatch} className="h-2" />
          </div>
        )}

        {/* Skills Required */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Required Skills:</p>
          <div className="flex flex-wrap gap-1">
            {internship.requirements.slice(0, 3).map((skill, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="bg-gray-100 text-gray-700 px-2 py-0.5 text-xs"
              >
                {skill}
              </Badge>
            ))}
            {internship.requirements.length > 3 && (
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 px-2 py-0.5 text-xs">
                +{internship.requirements.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Application Count */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Users className="h-4 w-4" />
          <span>{internship.applications.length} applications</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <Button 
            onClick={handleApply}
            disabled={isApplying}
            className="flex-1"
          >
            {isApplying ? 'Applying...' : 'Apply Now'}
          </Button>
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
