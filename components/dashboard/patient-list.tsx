import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const PATIENTS = [
  {
    id: 'emma-rodriguez',
    name: 'Emma Rodriguez',
    initials: 'ER',
    status: 'Excellent',
    lastVisit: 'PT: 2025-08-01',
    compliance: '95%',
  },
  {
    id: 'john-data-chu',
    name: 'John Data Chu',
    initials: 'JD',
    status: 'Good',
    lastVisit: 'PT: 7 days ago',
    compliance: '88%',
  },
  {
    id: 'kathryn-bernardo',
    name: 'Kathryn Bernardo',
    initials: 'KB',
    status: 'Good',
    lastVisit: 'PT: 10 days ago',
    compliance: '92%',
  },
  {
    id: 'miguel-santos',
    name: 'Miguel Santos',
    initials: 'MS',
    status: 'Fair',
    lastVisit: 'PT: 14 days ago',
    compliance: '75%',
  },
  {
    id: 'patricia-santos',
    name: 'Patricia Santos',
    initials: 'PS',
    status: 'Good',
    lastVisit: 'PT: 3 days ago',
    compliance: '89%',
  },
];

interface PatientListProps {
  selectedId: string;
  onSelectPatient: (id: string) => void;
  searchTerm: string;
}

export default function PatientList({ selectedId, onSelectPatient, searchTerm }: PatientListProps) {
  const filteredPatients = PATIENTS.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="divide-y divide-border">
      {filteredPatients.map((patient) => (
        <button
          key={patient.id}
          onClick={() => onSelectPatient(patient.id)}
          className={`w-full p-4 text-left transition-colors ${
            selectedId === patient.id
              ? 'bg-accent/10 border-l-2 border-accent'
              : 'hover:bg-muted'
          }`}
        >
          <div className="flex items-start gap-3">
            <Avatar className={`h-10 w-10 ${selectedId === patient.id ? 'bg-accent' : 'bg-accent/70'}`}>
              <AvatarFallback className={`${selectedId === patient.id ? 'text-white' : 'text-white'}`}>
                {patient.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-foreground truncate">
                {patient.name}
              </p>
              <p className="text-xs text-muted-foreground truncate mt-0.5">
                {patient.lastVisit}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Badge 
                  variant="secondary"
                  className="text-xs bg-muted text-muted-foreground"
                >
                  {patient.compliance}
                </Badge>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
