// Mock data for the ATS application

export interface Application {
  id: string;
  candidateName: string;
  jobTitle: string;
  applyLinkId: string;
  appliedDate: Date;
  status: 'new' | 'shortlisted' | 'interview' | 'rejected' | 'selected';
  email: string;
  phone: string;
  resumeUrl?: string;
  coverLetter?: string;
  notes?: string;
}

export interface JobLink {
  id: string;
  jobTitle: string;
  department: string;
  location?: string;
  description?: string;
  createdAt: Date;
  totalApplications: number;
}

export interface Interview {
  id: string;
  applicationId: string;
  date: Date;
  type: 'phone' | 'video' | 'in-person';
  interviewer: string;
  notes: string;
  result: 'passed' | 'failed' | 'pending';
}

// Mock applications data
export const mockApplications: Application[] = [
  {
    id: 'app-001',
    candidateName: 'John Smith',
    jobTitle: 'Senior Frontend Developer',
    applyLinkId: 'abc123',
    appliedDate: new Date('2024-01-15'),
    status: 'interview',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    resumeUrl: '/resumes/john-smith.pdf',
    coverLetter: 'I am excited about the opportunity to join your team...'
  },
  {
    id: 'app-002',
    candidateName: 'Sarah Johnson',
    jobTitle: 'Product Manager',
    applyLinkId: 'def456',
    appliedDate: new Date('2024-01-14'),
    status: 'new',
    email: 'sarah.j@example.com',
    phone: '+1 (555) 987-6543',
    resumeUrl: '/resumes/sarah-johnson.pdf',
    coverLetter: 'With 5 years of product management experience...'
  },
  {
    id: 'app-003',
    candidateName: 'Michael Chen',
    jobTitle: 'Backend Engineer',
    applyLinkId: 'ghi789',
    appliedDate: new Date('2024-01-13'),
    status: 'shortlisted',
    email: 'michael.chen@example.com',
    phone: '+1 (555) 456-7890',
    resumeUrl: '/resumes/michael-chen.pdf',
    coverLetter: 'I specialize in building scalable backend systems...'
  },
  {
    id: 'app-004',
    candidateName: 'Emily Davis',
    jobTitle: 'UX Designer',
    applyLinkId: 'jkl012',
    appliedDate: new Date('2024-01-12'),
    status: 'rejected',
    email: 'emily.d@example.com',
    phone: '+1 (555) 321-0987',
    resumeUrl: '/resumes/emily-davis.pdf',
    coverLetter: 'I have a passion for creating intuitive user experiences...'
  },
  {
    id: 'app-005',
    candidateName: 'David Wilson',
    jobTitle: 'Data Scientist',
    applyLinkId: 'mno345',
    appliedDate: new Date('2024-01-11'),
    status: 'selected',
    email: 'david.w@example.com',
    phone: '+1 (555) 654-3210',
    resumeUrl: '/resumes/david-wilson.pdf',
    coverLetter: 'I have extensive experience in machine learning...'
  },
  {
    id: 'app-006',
    candidateName: 'Jessica Brown',
    jobTitle: 'DevOps Engineer',
    applyLinkId: 'pqr678',
    appliedDate: new Date('2024-01-10'),
    status: 'interview',
    email: 'jessica.b@example.com',
    phone: '+1 (555) 789-0123',
    resumeUrl: '/resumes/jessica-brown.pdf',
    coverLetter: 'I specialize in building and maintaining CI/CD pipelines...'
  }
];

// Mock job links data
export const mockJobLinks: JobLink[] = [
  {
    id: 'abc123',
    jobTitle: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    description: 'Looking for an experienced frontend developer with React skills',
    createdAt: new Date('2024-01-01'),
    totalApplications: 12
  },
  {
    id: 'def456',
    jobTitle: 'Product Manager',
    department: 'Product',
    location: 'New York, NY',
    description: 'Seeking a product manager with 5+ years of experience',
    createdAt: new Date('2024-01-02'),
    totalApplications: 8
  },
  {
    id: 'ghi789',
    jobTitle: 'Backend Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    description: 'Need a backend engineer with Node.js and database experience',
    createdAt: new Date('2024-01-03'),
    totalApplications: 15
  },
  {
    id: 'jkl012',
    jobTitle: 'UX Designer',
    department: 'Design',
    location: 'Remote',
    description: 'Looking for a creative UX designer with Figma expertise',
    createdAt: new Date('2024-01-04'),
    totalApplications: 6
  }
];

// Mock interviews data
export const mockInterviews: Interview[] = [
  {
    id: 'int-001',
    applicationId: 'app-001',
    date: new Date('2024-01-20'),
    type: 'video',
    interviewer: 'Jane Doe',
    notes: 'Strong technical skills, good communication',
    result: 'passed'
  },
  {
    id: 'int-002',
    applicationId: 'app-006',
    date: new Date('2024-01-22'),
    type: 'in-person',
    interviewer: 'Robert Smith',
    notes: 'Great cultural fit, technical knowledge needs improvement',
    result: 'pending'
  }
];

// Get summary statistics for dashboard
export const getDashboardStats = () => {
  const totalApplications = mockApplications.length;
  const newApplications = mockApplications.filter(app => app.status === 'new').length;
  const shortlisted = mockApplications.filter(app => app.status === 'shortlisted').length;
  const interview = mockApplications.filter(app => app.status === 'interview').length;
  const rejected = mockApplications.filter(app => app.status === 'rejected').length;

  return {
    totalApplications,
    newApplications,
    shortlisted,
    interview,
    rejected
  };
};