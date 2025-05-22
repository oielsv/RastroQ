import React, { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { TrackerTableSearch } from './TrackerTableSearch';

interface TrackerTableTopBarProps {
  className?: string;
  action: ReactNode;
  onSearch?: (value: string) => void;
}

export function TrackerTableTopBar({ className, action, onSearch }: TrackerTableTopBarProps) {
  return (
    <div className={cn('grid grid-cols-12 gap-x-3 gap-y-2', className)}>
      <TrackerTableSearch
        placeholder="Job title or company"
        className="col-span-7 md:col-span-6"
        onChange={(e) => onSearch?.(e.target.value)}
      />
      <div className="flex items-center justify-end col-span-5 md:col-span-6">
        <div className="flex items-center gap-2">{action}</div>
      </div>
    </div>
  );
}

TrackerTableTopBar.displayName = 'TrackerTableTopBar';
