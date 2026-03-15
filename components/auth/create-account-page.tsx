import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

interface CreateAccountPageProps {
  onBack: () => void;
  onNext: () => void;
}

export default function CreateAccountPage({ onBack, onNext }: CreateAccountPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [tab, setTab] = useState<'account' | 'professional'>('account');

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-2 pb-6 relative">
            <button
              onClick={onBack}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-2">
              <span className="text-white text-lg font-bold">E</span>
            </div>
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription>
              Set up your account to get started
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs value={tab} onValueChange={(value) => setTab(value as any)} className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 bg-muted">
                <TabsTrigger value="account">Account Info</TabsTrigger>
                <TabsTrigger value="professional">Professional Info</TabsTrigger>
              </TabsList>

              <TabsContent value="account" className="space-y-6 mt-6">
                <div className="space-y-3">
                  <Label htmlFor="fullname" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="fullname"
                    placeholder="John Doe"
                    className="bg-input border-border"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="bg-input border-border"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="bg-input border-border pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="confirm-password" className="text-sm font-medium">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-input border-border"
                  />
                </div>

                <Button
                  onClick={() => setTab('professional')}
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                >
                  Continue
                </Button>
              </TabsContent>

              <TabsContent value="professional" className="space-y-6 mt-6">
                <div className="space-y-3">
                  <Label htmlFor="specialty" className="text-sm font-medium">
                    Specialty
                  </Label>
                  <Input
                    id="specialty"
                    placeholder="Optometrist / Ophthalmologist"
                    className="bg-input border-border"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="license" className="text-sm font-medium">
                    License Number
                  </Label>
                  <Input
                    id="license"
                    placeholder="Enter license number"
                    className="bg-input border-border"
                  />
                </div>

                <Button
                  onClick={onNext}
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                >
                  Create Account
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <button
                    onClick={onBack}
                    className="text-accent hover:underline font-semibold"
                  >
                    Sign in
                  </button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
