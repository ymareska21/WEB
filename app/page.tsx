'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import LoginPage from '@/components/auth/login-page';
import CreateAccountPage from '@/components/auth/create-account-page';
import ProfessionalInfoPage from '@/components/auth/professional-info-page';
import Dashboard from '@/components/dashboard/dashboard';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<'login' | 'signup' | 'professional' | 'dashboard'>('login');

  if (currentPage === 'dashboard') {
    return <Dashboard onLogout={() => setCurrentPage('login')} />;
  }

  if (currentPage === 'professional') {
    return (
      <ProfessionalInfoPage 
        onBack={() => setCurrentPage('signup')}
        onComplete={() => setCurrentPage('dashboard')}
      />
    );
  }

  if (currentPage === 'signup') {
    return (
      <CreateAccountPage 
        onBack={() => setCurrentPage('login')}
        onNext={() => setCurrentPage('professional')}
      />
    );
  }

  return (
    <LoginPage 
      onSignUp={() => setCurrentPage('signup')}
      onLogin={() => setCurrentPage('dashboard')}
    />
  );
}
