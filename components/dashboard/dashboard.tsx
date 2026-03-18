'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { LogOut, Search, Calendar, Eye, Clock, Zap } from 'lucide-react';
import PatientList from './patient-list';
import PatientDetail from './patient-detail';

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [selectedPatient, setSelectedPatient] = useState<string>('emma-rodriguez');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Eye Health Dashboard</h1>
            <p className="text-sm text-muted-foreground">Patient monitoring system</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 bg-accent">
                <AvatarFallback className="bg-accent text-white">DR</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Dr. Martinez</p>
                <p className="text-xs text-muted-foreground">Ophthalmologist</p>
              </div>
            </div>
            <Button
              onClick={onLogout}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="flex gap-6 p-6 rounded-r-3xl">
        {/* Left Sidebar - Patient List */}
        <aside className="w-80 border border-border bg-white overflow-y-auto max-h-[calc(100vh-69px-3rem)] rounded-3xl shadow-sm">
          <div className="p-6 space-y-4 sticky top-0 bg-white border-b border-border z-40 backdrop-blur-xl">
            <div>
              <h2 className="text-lg font-semibold mb-2">Patients</h2>
              <p className="text-xs text-muted-foreground">5 patients today</p>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search patients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-input border-border"
              />
            </div>
          </div>
          <PatientList 
            selectedId={selectedPatient}
            onSelectPatient={setSelectedPatient}
            searchTerm={searchTerm}
          />
        </aside>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto max-h-[calc(100vh-69px-3rem)]">
          <PatientDetail patientId={selectedPatient} />
        </div>
      </main>
    </div>
  );
}
