import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ChevronLeft } from 'lucide-react';

interface ProfessionalInfoPageProps {
  onBack: () => void;
  onComplete: () => void;
}

export default function ProfessionalInfoPage({ onBack, onComplete }: ProfessionalInfoPageProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-2 pb-6 relative">
            <button
              onClick={onBack}
              className="absolute top-6 left-6 text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-2">
              <span className="text-white text-lg font-bold">E</span>
            </div>
            <CardTitle className="text-2xl">Professional Information</CardTitle>
            <CardDescription>
              Complete your profile details
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                placeholder="+1 (555) 000-0000"
                className="bg-input border-border"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="hospital" className="text-sm font-medium">
                Hospital / Clinic
              </Label>
              <Input
                id="hospital"
                placeholder="Enter hospital or clinic name"
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

            <Button
              onClick={onComplete}
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
            >
              Complete Setup
            </Button>

            <Button
              onClick={onBack}
              variant="outline"
              size="lg"
              className="w-full"
            >
              Back
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
