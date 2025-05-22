import React, { forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Input as ShadcnInput, InputProps } from '@/components/ui/input';

export interface Props extends InputProps {
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, type, startIcon: StartIcon, endIcon: EndIcon, ...props }, ref) => (
    <div className="w-full relative">
      {StartIcon && (
        <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 peer-focus:text-gray-900">
          <StartIcon size={18} className="text-muted-foreground" />
        </div>
      )}
      <ShadcnInput type={type} className={cn(StartIcon && 'pl-8', EndIcon && 'pr-8', className)} ref={ref} {...props} />
      {EndIcon && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <EndIcon className="text-muted-foreground" size={18} />
        </div>
      )}
    </div>
  )
);

Input.displayName = 'Input';

export { Input };
