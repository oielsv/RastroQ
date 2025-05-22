import { IApplicationBase } from '@/features/application/models';
import { TrackerTable } from '@/features/tracker/components/TrackerTable';

import { Header } from '@/components/Header';

// Sample data for demonstration
const applications: IApplicationBase[] = [
  {
    id: '1',
    createdAt: new Date('2023-01-01'),
    appliedAt: new Date('2023-01-02'),
    updatedAt: new Date('2023-01-03'),
    companyName: 'Example Company 1',
    jobTitle: 'Software Engineer',
  },
  {
    id: '2',
    createdAt: new Date('2023-02-01'),
    appliedAt: new Date('2023-02-02'),
    updatedAt: null,
    companyName: 'Example Company 2',
    jobTitle: 'Frontend Developer',
  },
];

export default function Tracker() {
  return (
    <div className="space-y-3">
      <Header />
      <div className="grid m-4">
        <h1 className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">Tracker</h1>
        <TrackerTable applications={applications} />
      </div>
    </div>
  );
}
