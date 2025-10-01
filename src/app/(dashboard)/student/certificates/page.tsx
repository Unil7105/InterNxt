'use client';

import { useState } from 'react';
import { Download, Eye, QrCode, Award, Calendar, Building2, CheckCircle } from 'lucide-react';

import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockCertificates } from '@/lib/mock-data';

export default function CertificatesPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  // Mock user data - in real app, this would come from auth context
  const user = {
    name: 'John Doe',
    email: 'john.doe@university.edu',
    role: 'student',
    avatar: '/avatars/john-doe.jpg',
  };

  const notifications = 3;

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case 'excellent':
        return (
          <Badge className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full text-xs font-medium">
            <Award className="h-3 w-3 mr-1" />
            Excellent
          </Badge>
        );
      case 'good':
        return (
          <Badge className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full text-xs font-medium">
            <CheckCircle className="h-3 w-3 mr-1" />
            Good
          </Badge>
        );
      case 'satisfactory':
        return (
          <Badge className="bg-yellow-50 text-yellow-600 px-2 py-0.5 rounded-full text-xs font-medium">
            <CheckCircle className="h-3 w-3 mr-1" />
            Satisfactory
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <MainLayout user={user} notifications={notifications}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Certificates</h1>
            <p className="text-gray-600">
              Your verified internship certificates and achievements
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Certificates</p>
                <p className="text-2xl font-bold text-blue-600">{mockCertificates.length}</p>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <Award className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">This Year</p>
                <p className="text-2xl font-bold text-green-600">1</p>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <Calendar className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Verified Skills</p>
                <p className="text-2xl font-bold text-purple-600">12</p>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCertificates.map((certificate) => (
            <Card 
              key={certificate.id} 
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 group cursor-pointer"
              onClick={() => setSelectedCertificate(certificate.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {certificate.internship.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600">
                        {certificate.internship.company.companyName}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getPerformanceBadge(certificate.performance)}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Certificate Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Issued: {formatDate(certificate.issuedAt)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building2 className="h-4 w-4" />
                    <span>Duration: {certificate.internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <QrCode className="h-4 w-4" />
                    <span>Verification: {certificate.qrCode}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Verified Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {certificate.skills.map((skill, index) => (
                      <Badge 
                        key={index}
                        variant="secondary" 
                        className="bg-blue-50 text-blue-600 px-2 py-0.5 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Viewing certificate:', certificate.id);
                    }}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button 
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Downloading certificate:', certificate.id);
                    }}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {mockCertificates.length === 0 && (
          <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
            <CardContent className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No certificates yet</h3>
              <p className="text-gray-600 mb-4">
                Complete your internships to earn verified certificates
              </p>
              <Button>
                View Internships
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Certificate Preview Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <CardHeader className="text-center border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Certificate Preview
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedCertificate(null)}
                  >
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center space-y-6">
                  {/* Certificate Design */}
                  <div className="border-2 border-gray-300 rounded-lg p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="space-y-4">
                      <div className="text-2xl font-bold text-gray-900">Certificate of Completion</div>
                      <div className="text-lg text-gray-700">This is to certify that</div>
                      <div className="text-3xl font-bold text-blue-600">{user.name}</div>
                      <div className="text-lg text-gray-700">has successfully completed the internship in</div>
                      <div className="text-xl font-semibold text-gray-900">
                        {mockCertificates[0]?.internship.title}
                      </div>
                      <div className="text-lg text-gray-700">at</div>
                      <div className="text-xl font-semibold text-gray-900">
                        {mockCertificates[0]?.internship.company.companyName}
                      </div>
                      <div className="text-sm text-gray-600">
                        Duration: {mockCertificates[0]?.internship.duration}
                      </div>
                      <div className="text-sm text-gray-600">
                        Issued on: {formatDate(mockCertificates[0]?.issuedAt || new Date())}
                      </div>
                    </div>
                  </div>

                  {/* QR Code Placeholder */}
                  <div className="flex justify-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      <QrCode className="h-16 w-16 text-gray-400" />
                    </div>
                  </div>

                  <div className="text-sm text-gray-600">
                    Verification Code: {mockCertificates[0]?.qrCode}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 justify-center">
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button>
                      <Eye className="h-4 w-4 mr-2" />
                      View Full Certificate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
