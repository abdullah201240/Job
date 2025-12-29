"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getDashboardStats } from "@/mocks/data";
import { Users, UserCheck, Calendar, XCircle, UserRound } from "lucide-react";

export default function DashboardPage() {
  const { totalApplications, newApplications, shortlisted, interview, rejected } = getDashboardStats();

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">HR Dashboard</h1>
        <p className="text-gray-500">Manage your job applications and hiring process</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Total Applications</CardDescription>
            <Users className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalApplications}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>New</CardDescription>
            <UserRound className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newApplications}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Shortlisted</CardDescription>
            <UserCheck className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{shortlisted}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Interview</CardDescription>
            <Calendar className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{interview}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Rejected</CardDescription>
            <XCircle className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{rejected}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Access key features of the ATS</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="/dashboard/generate-link" className="bg-primary text-primary-foreground rounded-lg p-4 hover:opacity-90 transition-opacity">
              <h3 className="font-semibold mb-1">Generate Apply Link</h3>
              <p className="text-sm opacity-80">Create a new application link for a job posting</p>
            </a>
            <a href="/applications" className="bg-secondary text-secondary-foreground rounded-lg p-4 hover:bg-secondary/80 transition-colors">
              <h3 className="font-semibold mb-1">View Applications</h3>
              <p className="text-sm opacity-80">Browse and manage all applications</p>
            </a>
            <a href="/pipeline" className="bg-secondary text-secondary-foreground rounded-lg p-4 hover:bg-secondary/80 transition-colors">
              <h3 className="font-semibold mb-1">Hiring Pipeline</h3>
              <p className="text-sm opacity-80">Visualize the hiring process</p>
            </a>
            <a href="/candidates" className="bg-secondary text-secondary-foreground rounded-lg p-4 hover:bg-secondary/80 transition-colors">
              <h3 className="font-semibold mb-1">Manage Candidates</h3>
              <p className="text-sm opacity-80">Review candidate details</p>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
            <CardDescription>Latest applications received</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <p className="font-medium">John Smith</p>
                  <p className="text-sm text-gray-500">Senior Frontend Developer</p>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Interview</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Product Manager</p>
                </div>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">New</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-sm text-gray-500">Backend Engineer</p>
                </div>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Shortlisted</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <p className="font-medium">Emily Davis</p>
                  <p className="text-sm text-gray-500">UX Designer</p>
                </div>
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Rejected</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}