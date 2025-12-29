"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockApplications } from "@/mocks/data";
import { GripVertical, User, Calendar, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PipelinePage() {
  const router = useRouter();
  const [applications] = useState(mockApplications);
  
  // Group applications by status
  const groupedApplications = {
    new: applications.filter(app => app.status === 'new'),
    reviewed: applications.filter(app => app.status === 'new'), // For demo purposes, showing new as reviewed
    shortlisted: applications.filter(app => app.status === 'shortlisted'),
    interview: applications.filter(app => app.status === 'interview'),
    selected: applications.filter(app => app.status === 'selected'),
    rejected: applications.filter(app => app.status === 'rejected'),
  };

  const columns = [
    { id: 'new', title: 'New', applications: groupedApplications.new },
    { id: 'reviewed', title: 'Reviewed', applications: groupedApplications.reviewed },
    { id: 'shortlisted', title: 'Shortlisted', applications: groupedApplications.shortlisted },
    { id: 'interview', title: 'Interview', applications: groupedApplications.interview },
    { id: 'selected', title: 'Selected', applications: groupedApplications.selected },
    { id: 'rejected', title: 'Rejected', applications: groupedApplications.rejected },
  ];

  const handleApplicationClick = (id: string) => {
    router.push(`/candidates/${id}`);
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Hiring Pipeline</h1>
        <p className="text-gray-500">Visualize and manage your hiring process</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {columns.map((column) => (
          <div key={column.id} className="flex flex-col h-full">
            <Card className="mb-4">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{column.title}</CardTitle>
                <p className="text-sm text-gray-500">{column.applications.length} candidates</p>
              </CardHeader>
            </Card>
            
            <div className="space-y-3 flex-1">
              {column.applications.map((application) => (
                <Card 
                  key={application.id} 
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleApplicationClick(application.id)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-start">
                      <GripVertical className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{application.candidateName}</h3>
                        <p className="text-sm text-gray-500 truncate">{application.jobTitle}</p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{new Date(application.appliedDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <Mail className="h-3 w-3 mr-1" />
                          <span className="truncate">{application.email}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>How to Use the Pipeline</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Drag and drop candidates between columns to update their status. 
              Click on any candidate card to view detailed information and manage their application.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}