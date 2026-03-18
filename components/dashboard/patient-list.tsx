import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const PATIENTS = [
  {
    id: 'emma-rodriguez',
    name: 'Emma Rodriguez',
    initials: 'ER',
    patientId: 'PT-20206-001',
    compliance: 75,
  },
  {
    id: 'john-data-chu',
    name: 'Juan Dela Cruz',
    initials: 'JD',
    patientId: 'PT-20206-002',
    compliance: 75,
  },
  {
    id: 'daniel-padilla',
    name: 'Daniel Padilla',
    initials: 'DP',
    patientId: 'PT-20206-003',
    compliance: 75,
  },
  {
    id: 'kathryn-bernardo',
    name: 'Kathryn Bernardo',
    initials: 'KB',
    patientId: 'PT-20206-004',
    compliance: 75,
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
    <div className="space-y-3 p-4">
      {filteredPatients.map((patient) => (
        <button
          key={patient.id}
          onClick={() => onSelectPatient(patient.id)}
          className={`w-full p-4 text-left transition-all rounded-xl border shadow-sm ${
            selectedId === patient.id
              ? 'bg-accent/10 border-accent'
              : 'bg-white border-border hover:border-accent/50 hover:shadow-md'
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
                ID: {patient.patientId}
              </p>

              <div className="mt-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="truncate">20-20-20 Compliance</span>
                  <span className="font-semibold text-[11px] text-foreground">
                    {patient.compliance}%
                  </span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-muted/40 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      selectedId === patient.id ? 'bg-accent' : 'bg-muted'
                    }`}
                    style={{ width: `${patient.compliance}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
