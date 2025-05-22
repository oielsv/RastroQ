import { Search } from 'lucide-react';
import { ChangeEvent } from 'react';

import { Input } from '@/components/Input';

interface TrackerTableSearchProps {
  className?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function TrackerTableSearch({ className, placeholder, onChange }: TrackerTableSearchProps) {
  return (
    <div className={className}>
      <div className="relative">
        <Input startIcon={Search} placeholder={placeholder} onChange={onChange} />
      </div>
    </div>
  );
}

TrackerTableSearch.displayName = 'TrackerTableSearch';
