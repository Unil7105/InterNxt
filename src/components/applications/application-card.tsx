'use client';

import { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  DollarSign, 
  Clock, 
  ExternalLink,
  MoreHorizontal,
  Eye,
  FileText,
  MessageSquare
} from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Application } from '@/types';

interface ApplicationCardProps {
  application: Application;
  onViewDetails?: (application: Application) => void;
  onUpdateStatus?: (application: Application, newStatus: string) => void;
}

const statusConfig = {
  applied: {
    label: 'Applied',
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    dotColor: 'bg-blue-500',
  },
  shortlisted: {
    label: 'Shortlisted',
    color: 'bg-yellow-50 text-yellow-600 border-yellow-200',
    dotColor: 'bg-yellow-500',
  },
  interview: {
    label: 'Interview',
    color: 'bg-purple-50 text-purple-600 border-purple-200',
    dotColor: 'bg-purple-500',
  },
  offer: {
    label: 'Offer',
    color: 'bg-green-50 text-green-600 border-green-200',
    dotColor: 'bg-green-500',
  },
  ongoing: {
    label: 'Ongoing',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    dotColor: 'bg-indigo-500',
  },
  completed: {
    label: 'Completed',
    color: 'bg-gray-50 text-gray-600 border-gray-200',
    dotColor: 'bg-gray-500',
  },
  rejected: {
    label: 'Rejected',
    color: 'bg-red-50 text-red-600 border-red-200',
    dotColor: 'bg-red-500',
  },
};

export function ApplicationCard({ application, onViewDetails, onUpdateStatus }: ApplicationCardProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const status = statusConfig[application.status] || statusConfig.applied;

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    return formatDate(date);
  };

  const handleStatusUpdate = async (newStatus: string) => {
    if (onUpdateStatus) {
      setIsUpdating(true);
      await onUpdateStatus(application, newStatus);
      setIsUpdating(false);
    }
  };

  return (
    <Card className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={application.internship.company.logo} alt={application.internship.company.companyName} />
              <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                {application.internship.company.companyName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {application.internship.title}
              </CardTitle>
              <CardDescription className="text-sm text-gray-600">
                {application.internship.company.companyName}
              </CardDescription>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onViewDetails?.(application)}>
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="h-4 w-4 mr-2" />
                View Application
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Company
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Status Badge */}
        <div className="flex items-center justify-between">
          <Badge className={`${status.color} px-3 py-1 rounded-full text-xs font-medium border`}>
            <div className={`w-2 h-2 rounded-full ${status.dotColor} mr-2`}></div>
            {status.label}
          </Badge>
          <span className="text-xs text-gray-500">
            Applied {formatTimeAgo(application.appliedAt)}
          </span>
        </div>

        {/* Key Details */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <DollarSign className="h-4 w-4" />
            <span>₹{application.internship.stipend.toLocaleString()}/month</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-4 w-4" />
            <span>{application.internship.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{application.internship.isRemote ? 'Remote' : application.internship.location}</span>
          </div>
          {application.interviewDate && (
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(application.interviewDate)}</span>
            </div>
          )}
        </div>

        {/* Interview Details */}
        {application.status === 'interview' && application.interviewDate && (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
            <div className="flex items-center gap-2 text-sm font-medium text-purple-900 mb-1">
              <Calendar className="h-4 w-4" />
              Interview Scheduled
            </div>
            <p className="text-sm text-purple-700">
              {formatDate(application.interviewDate)} at 2:00 PM
            </p>
          </div>
        )}

        {/* Offer Details */}
        {application.status === 'offer' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex items-center gap-2 text-sm font-medium text-green-900 mb-1">
              <DollarSign className="h-4 w-4" />
              Offer Received
            </div>
            <p className="text-sm text-green-700">
              Congratulations! You have received an offer for this position.
            </p>
          </div>
        )}

        {/* Progress Indicator */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Progress</span>
            <span>
              {application.status === 'applied' && '25%'}
              {application.status === 'shortlisted' && '50%'}
              {application.status === 'interview' && '75%'}
              {application.status === 'offer' && '100%'}
              {application.status === 'ongoing' && '100%'}
              {application.status === 'completed' && '100%'}
              {application.status === 'rejected' && '0%'}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                application.status === 'rejected' ? 'bg-red-500' : 'bg-blue-500'
              }`}
              style={{ 
                width: application.status === 'applied' ? '25%' :
                       application.status === 'shortlisted' ? '50%' :
                       application.status === 'interview' ? '75%' :
                       ['offer', 'ongoing', 'completed'].includes(application.status) ? '100%' : '0%'
              }}
            ></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onViewDetails?.(application)}
            className="flex-1"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
          <Button variant="ghost" size="sm">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
