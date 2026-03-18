'use client';

import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Eye, Clock, Activity, ChevronDown } from 'lucide-react';

const PATIENT_DATA = {
  'emma-rodriguez': {
    id: 'PT-2026-001',
    name: 'Emma Rodriguez',
    initials: 'ER',
    age: '38',
    grade: 'Excellent',
    healthScore: 78,
    lastExam: '2025-08-01',
    metrics: {
      duration: '2h 15m',
      breaks: '12/min',
      distance: '52cm',
    },
    complianceData: [
      { date: 'Mon', rate: 85 },
      { date: 'Tue', rate: 88 },
      { date: 'Wed', rate: 92 },
      { date: 'Thu', rate: 90 },
      { date: 'Fri', rate: 95 },
      { date: 'Sat', rate: 78 },
      { date: 'Sun', rate: 82 },
    ],
    screenTimeData: [
      { day: 'Mon', work: 6, leisure: 3 },
      { day: 'Tue', work: 7, leisure: 2 },
      { day: 'Wed', work: 8, leisure: 2.5 },
      { day: 'Thu', work: 6.5, leisure: 3 },
      { day: 'Fri', work: 7, leisure: 2.5 },
      { day: 'Sat', work: 2, leisure: 5 },
      { day: 'Sun', work: 1, leisure: 4 },
    ],
    eyeHealthTrend: [
      { week: 'W1', score: 72 },
      { week: 'W2', score: 74 },
      { week: 'W3', score: 76 },
      { week: 'W4', score: 78 },
      { week: 'W5', score: 80 },
      { week: 'W6', score: 78 },
      { week: 'W7', score: 80 },
    ],
    contacts: [
      { name: 'Maria Rodriguez', relation: 'Sister', phone: 'maria@email.com' },
    ],
  },
  'john-data-chu': {
    id: 'PT-2026-002',
    name: 'John Data Chu',
    initials: 'JD',
    age: '45',
    grade: 'Good',
    healthScore: 72,
    lastExam: '2025-08-04',
    metrics: {
      duration: '1h 50m',
      breaks: '10/min',
      distance: '45cm',
    },
    complianceData: [
      { date: 'Mon', rate: 80 },
      { date: 'Tue', rate: 82 },
      { date: 'Wed', rate: 85 },
      { date: 'Thu', rate: 83 },
      { date: 'Fri', rate: 88 },
      { date: 'Sat', rate: 75 },
      { date: 'Sun', rate: 78 },
    ],
    screenTimeData: [
      { day: 'Mon', work: 8, leisure: 2 },
      { day: 'Tue', work: 9, leisure: 2 },
      { day: 'Wed', work: 8.5, leisure: 2.5 },
      { day: 'Thu', work: 8, leisure: 3 },
      { day: 'Fri', work: 8, leisure: 2 },
      { day: 'Sat', work: 3, leisure: 4 },
      { day: 'Sun', work: 2, leisure: 3 },
    ],
    eyeHealthTrend: [
      { week: 'W1', score: 68 },
      { week: 'W2', score: 70 },
      { week: 'W3', score: 71 },
      { week: 'W4', score: 72 },
      { week: 'W5', score: 73 },
      { week: 'W6', score: 72 },
      { week: 'W7', score: 72 },
    ],
    contacts: [
      { name: 'None recorded', relation: 'N/A', phone: 'N/A' },
    ],
  },
  'kathryn-bernardo': {
    name: 'Kathryn Bernardo',
    initials: 'KB',
    age: '35',
    grade: 'Good',
    healthScore: 76,
    lastExam: '2025-08-01',
    metrics: {
      duration: '2h 10m',
      breaks: '11/min',
      distance: '50cm',
    },
    complianceData: [
      { date: 'Mon', rate: 88 },
      { date: 'Tue', rate: 90 },
      { date: 'Wed', rate: 92 },
      { date: 'Thu', rate: 91 },
      { date: 'Fri', rate: 93 },
      { date: 'Sat', rate: 82 },
      { date: 'Sun', rate: 85 },
    ],
    screenTimeData: [
      { day: 'Mon', work: 7, leisure: 2.5 },
      { day: 'Tue', work: 7.5, leisure: 2 },
      { day: 'Wed', work: 8, leisure: 2 },
      { day: 'Thu', work: 7, leisure: 3 },
      { day: 'Fri', work: 7.5, leisure: 2.5 },
      { day: 'Sat', work: 1, leisure: 6 },
      { day: 'Sun', work: 1, leisure: 5 },
    ],
    eyeHealthTrend: [
      { week: 'W1', score: 70 },
      { week: 'W2', score: 72 },
      { week: 'W3', score: 74 },
      { week: 'W4', score: 75 },
      { week: 'W5', score: 76 },
      { week: 'W6', score: 75 },
      { week: 'W7', score: 76 },
    ],
    contacts: [
      { name: 'Daniel Padilla', relation: 'Spouse', phone: 'daniel@email.com' },
    ],
  },
  'miguel-santos': {
    name: 'Miguel Santos',
    initials: 'MS',
    age: '52',
    grade: 'Fair',
    healthScore: 65,
    lastExam: '2025-07-27',
    metrics: {
      duration: '1h 30m',
      breaks: '8/min',
      distance: '40cm',
    },
    complianceData: [
      { date: 'Mon', rate: 70 },
      { date: 'Tue', rate: 72 },
      { date: 'Wed', rate: 75 },
      { date: 'Thu', rate: 73 },
      { date: 'Fri', rate: 78 },
      { date: 'Sat', rate: 68 },
      { date: 'Sun', rate: 65 },
    ],
    screenTimeData: [
      { day: 'Mon', work: 9, leisure: 3 },
      { day: 'Tue', work: 10, leisure: 2 },
      { day: 'Wed', work: 9.5, leisure: 3 },
      { day: 'Thu', work: 9, leisure: 3.5 },
      { day: 'Fri', work: 9, leisure: 3 },
      { day: 'Sat', work: 5, leisure: 4 },
      { day: 'Sun', work: 4, leisure: 3 },
    ],
    eyeHealthTrend: [
      { week: 'W1', score: 64 },
      { week: 'W2', score: 65 },
      { week: 'W3', score: 65 },
      { week: 'W4', score: 66 },
      { week: 'W5', score: 65 },
      { week: 'W6', score: 65 },
      { week: 'W7', score: 65 },
    ],
    contacts: [
      { name: 'Rosa Santos', relation: 'Spouse', phone: 'rosa@email.com' },
    ],
  },
  'patricia-santos': {
    name: 'Patricia Santos',
    initials: 'PS',
    age: '42',
    grade: 'Good',
    healthScore: 74,
    lastExam: '2025-08-07',
    metrics: {
      duration: '2h 5m',
      breaks: '11/min',
      distance: '51cm',
    },
    complianceData: [
      { date: 'Mon', rate: 84 },
      { date: 'Tue', rate: 86 },
      { date: 'Wed', rate: 88 },
      { date: 'Thu', rate: 87 },
      { date: 'Fri', rate: 90 },
      { date: 'Sat', rate: 80 },
      { date: 'Sun', rate: 83 },
    ],
    screenTimeData: [
      { day: 'Mon', work: 6.5, leisure: 2.5 },
      { day: 'Tue', work: 7, leisure: 2 },
      { day: 'Wed', work: 7.5, leisure: 2 },
      { day: 'Thu', work: 6.5, leisure: 3 },
      { day: 'Fri', work: 7, leisure: 2.5 },
      { day: 'Sat', work: 1.5, leisure: 5.5 },
      { day: 'Sun', work: 1, leisure: 4.5 },
    ],
    eyeHealthTrend: [
      { week: 'W1', score: 70 },
      { week: 'W2', score: 71 },
      { week: 'W3', score: 73 },
      { week: 'W4', score: 74 },
      { week: 'W5', score: 75 },
      { week: 'W6', score: 74 },
      { week: 'W7', score: 74 },
    ],
    contacts: [
      { name: 'Victor Cruz', relation: 'Son', phone: 'victor@email.com' },
    ],
  },
};

interface PatientDetailProps {
  patientId: string;
}

export default function PatientDetail({ patientId }: PatientDetailProps) {
  const patient = PATIENT_DATA[patientId as keyof typeof PATIENT_DATA] || PATIENT_DATA['emma-rodriguez'];

  return (
    <div className="p-6 space-y-6">
      {/* Patient summary header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 bg-accent">
            <AvatarFallback className="text-white text-lg font-semibold">
              {patient.initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold text-foreground">{patient.name}</h2>
            <p className="text-sm text-muted-foreground">D: {patient.id}</p>
          </div>
        </div>
        <div className="text-right text-sm text-foreground">
          <div className="font-medium">Guardian</div>
          <div>{patient.contacts[0]?.name}</div>
          <div className="text-xs text-muted-foreground">{patient.contacts[0]?.phone}</div>
        </div>
      </div>

      <Card className="border-0 shadow">
        <CardContent className="p-4 sm:p-6">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="bg-muted">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="activity">Activity Log</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Top Metrics */}
          <div className="grid grid-cols-6 gap-4">
            <Card className="col-span-6 bg-gradient-to-r from-green-20 to-green-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                  <span>Overall Health Grade</span>
                  <Badge
                    variant="outline"
                    className={cn('font-semibold', {
                      'bg-green-100 text-green-800 border-green-200': patient.grade === 'Excellent',
                      'bg-blue-100 text-blue-800 border-blue-200': patient.grade === 'Good',
                      'bg-yellow-100 text-yellow-800 border-yellow-200': patient.grade === 'Fair',
                    })}
                  >
                    {patient.grade}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg text-muted-foreground mb-1 block">
                      Patient is maintaining excellent eye health habits
                    </span>
                  </div>
                  <span className="text-4xl font-bold text-accent">{patient.healthScore}%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-2 border-0 shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Duration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-accent">{patient.metrics.duration}</div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-2 border-0 shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Breaks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-accent">{patient.metrics.breaks}</div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-2 border-0 shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Distance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">{patient.metrics.distance}</div>
              </CardContent>
            </Card>

            <Card className="col-span-3 border-0 shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Strain Events (7 days)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">3</div>
              </CardContent>
            </Card>

            <Card className="col-span-3 border-0 shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Blink Rate & Viewing Distance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">Good</div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <Card className="border-0 shadow">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">7-Day Compliance Trends</CardTitle>
              <CardDescription>Blink Rate & Viewing Distance</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={patient.complianceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="#4a9d7f" 
                    strokeWidth={2}
                    dot={{ fill: '#4a9d7f', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-0 shadow">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Daily Screen Time & Breaks Taken</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={patient.screenTimeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
                  />
                  <Legend />
                  <Bar dataKey="work" fill="#4a9d7f" />
                  <Bar dataKey="leisure" fill="#7fd4c1" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-0 shadow">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Eye Health Score Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={patient.eyeHealthTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="week" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#4a9d7f" 
                    strokeWidth={2}
                    dot={{ fill: '#4a9d7f', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Send Recommendations */}
          <Card className="border-0 shadow">
            <CardHeader>
              <CardTitle>Send Recommendations to Patient</CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-white"
              >
                Send Personalized Health Plan
              </Button>
            </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6">
              <Card className="border-0 shadow">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Patient interaction history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4 pb-4 border-b border-border">
                      <Eye className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Eye Exam Completed</p>
                        <p className="text-sm text-muted-foreground">August 1, 2025</p>
                      </div>
                    </div>
                    <div className="flex gap-4 pb-4 border-b border-border">
                      <Activity className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Health Metrics Updated</p>
                        <p className="text-sm text-muted-foreground">July 31, 2025</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Compliance Report Sent</p>
                        <p className="text-sm text-muted-foreground">July 29, 2025</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
