"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockApplications, mockInterviews } from "@/mocks/data";
import { Download, Calendar, User, Mail, Phone, FileText, MessageSquare, Edit3 } from "lucide-react";
import { useParams } from "next/navigation";

export default function CandidateDetailsPage() {
  const params = useParams();
  const applicationId = params.id as string;
  
  // Find the application based on the ID from the URL
  const application = mockApplications.find(app => app.id === applicationId);
  
  // Find related interviews
  const relatedInterviews = mockInterviews.filter(interview => interview.applicationId === applicationId);
  
  const [status, setStatus] = useState(application?.status || 'new');
  const [notes, setNotes] = useState(application?.notes || '');
  const [isEditingNotes, setIsEditingNotes] = useState(false);

  if (!application) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Candidate Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The candidate with ID {applicationId} does not exist.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus as any);
    // In a real app, this would update the backend
    console.log(`Status updated to: ${newStatus}`);
  };

  const handleSaveNotes = () => {
    setIsEditingNotes(false);
    // In a real app, this would save to the backend
    console.log(`Notes updated: ${notes}`);
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">{application.candidateName}</h1>
          <p className="text-gray-500">{application.jobTitle} | Applied on {new Date(application.appliedDate).toLocaleDateString()}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </Button>
          <Button>
            <Edit3 className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Candidate Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Candidate Profile</CardTitle>
              <CardDescription>Personal information and application details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-gray-500" />
                    <Label>Name</Label>
                  </div>
                  <p>{application.candidateName}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gray-500" />
                    <Label>Email</Label>
                  </div>
                  <p>{application.email}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-500" />
                    <Label>Phone</Label>
                  </div>
                  <p>{application.phone}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-gray-500" />
                    <Label>Apply Link ID</Label>
                  </div>
                  <p>{application.applyLinkId}</p>
                </div>
              </div>
              
              {application.coverLetter && (
                <div className="space-y-2">
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2 text-gray-500" />
                    <Label>Cover Letter</Label>
                  </div>
                  <p className="text-gray-700">{application.coverLetter}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Resume Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Resume Preview</CardTitle>
              <CardDescription>Uploaded resume document</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <FileText className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                <p className="text-gray-500">Resume Preview</p>
                <p className="text-sm text-gray-400 mt-1">PDF Document: {application.candidateName.replace(' ', '_')}_resume.pdf</p>
                <Button variant="outline" className="mt-4">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Interview History */}
          <Card>
            <CardHeader>
              <CardTitle>Interview History</CardTitle>
              <CardDescription>Past and upcoming interviews</CardDescription>
            </CardHeader>
            <CardContent>
              {relatedInterviews.length > 0 ? (
                <div className="space-y-4">
                  {relatedInterviews.map((interview) => (
                    <div key={interview.id} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{interview.type.charAt(0).toUpperCase() + interview.type.slice(1)} Interview</h4>
                          <p className="text-sm text-gray-500">with {interview.interviewer}</p>
                          <p className="text-sm">{new Date(interview.date).toLocaleString()}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          interview.result === 'passed' ? 'bg-green-100 text-green-800' : 
                          interview.result === 'failed' ? 'bg-red-100 text-red-800' : 
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {interview.result.charAt(0).toUpperCase() + interview.result.slice(1)}
                        </span>
                      </div>
                      <p className="mt-2 text-gray-700">{interview.notes}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No interviews scheduled yet</p>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Interview
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Right Column - Actions and Notes */}
        <div className="space-y-6">
          {/* Status Card */}
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
              <CardDescription>Current application status</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={status} onValueChange={handleStatusChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="shortlisted">Shortlisted</SelectItem>
                  <SelectItem value="interview">Interview</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                  <SelectItem value="selected">Selected</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Internal Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Internal Notes</CardTitle>
              <CardDescription>Add private notes about this candidate</CardDescription>
            </CardHeader>
            <CardContent>
              {isEditingNotes ? (
                <div className="space-y-4">
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={6}
                    placeholder="Add your notes here..."
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleSaveNotes} size="sm">Save</Button>
                    <Button variant="outline" size="sm" onClick={() => setIsEditingNotes(false)}>Cancel</Button>
                  </div>
                </div>
              ) : (
                <div>
                  {notes ? (
                    <p className="text-gray-700 mb-4">{notes}</p>
                  ) : (
                    <p className="text-gray-500 mb-4">No notes yet</p>
                  )}
                  <Button variant="outline" size="sm" onClick={() => setIsEditingNotes(true)}>
                    <Edit3 className="h-4 w-4 mr-2" />
                    Add Note
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Application Metadata */}
          <Card>
            <CardHeader>
              <CardTitle>Application Details</CardTitle>
              <CardDescription>Metadata about this application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Applied Date</span>
                <span>{new Date(application.appliedDate).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Job Title</span>
                <span>{application.jobTitle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Apply Link</span>
                <span>{application.applyLinkId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Status</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  status === 'new' ? 'bg-gray-100 text-gray-800' : 
                  status === 'shortlisted' ? 'bg-yellow-100 text-yellow-800' : 
                  status === 'interview' ? 'bg-blue-100 text-blue-800' : 
                  status === 'rejected' ? 'bg-red-100 text-red-800' : 
                  'bg-green-100 text-green-800'
                }`}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}