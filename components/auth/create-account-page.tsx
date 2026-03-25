import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent } from '@/components/ui/tabs';
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
          <CardHeader className="space-y-2 pb-4 relative">
            <button
              onClick={onBack}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center gap-2">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${tab === 'account' || tab === 'professional' ? 'bg-emerald-600' : 'bg-slate-300'}`}
                >
                  1
                </div>
                <span className="text-xs font-medium">Account Info</span>
              </div>

              <div className={`flex-1 h-1 rounded ${tab === 'professional' ? 'bg-emerald-600' : 'bg-slate-300'}`} />

              <div className="flex flex-col items-center gap-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${tab === 'professional' ? 'bg-emerald-600' : 'bg-slate-300'}`}
                >
                  2
                </div>
                <span className="text-xs font-medium">Professional Info</span>
              </div>
            </div>

            <div className="space-y-1 text-left">
              <CardTitle className="text-2xl">
                {tab === 'account' ? 'Create Account' : 'Professional Information'}
              </CardTitle>
              <CardDescription>
                {tab === 'account'
                  ? 'Set up your account to get started'
                  : 'Complete your profile details'}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="p-4 pt-2">
            <Tabs value={tab} onValueChange={(value) => setTab(value as any)} className="space-y-3">
              <TabsContent value="account" className="space-y-4 mt-2">
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

              <TabsContent value="professional" className="space-y-4 mt-2">
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="Phone number"
                    className="bg-input border-border"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="hospital" className="text-sm font-medium">
                    Hospital / Clinic
                  </Label>
                  <Input
                    id="hospital"
                    placeholder="Hospital or Clinic name"
                    className="bg-input border-border"
                  />
                </div>

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

                <div className="flex flex-col gap-3 pt-2">
                  <Button
                    onClick={onNext}
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                  >
                    Complete Setup
                  </Button>
                  <Button
                    onClick={() => setTab('account')}
                    size="lg"
                    variant="outline"
                    className="w-full"
                  >
                    Back
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
