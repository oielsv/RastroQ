import { LucideIcon, MoreVerticalIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export type NavActionItem = {
  icon: LucideIcon;
  label: string;
  variant?: 'destructive';
  onClick: () => void;
};

export interface NavActionsProps {
  actions?: NavActionItem[][];
}

export function NavActions({ actions }: NavActionsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <MoreVerticalIcon />
        </Button>
      </PopoverTrigger>
      <PopoverTrigger>
        <span />
      </PopoverTrigger>
      <PopoverContent className="w-56 overflow-hidden rounded-lg p-0" align="end">
        <Sidebar collapsible="none" className="bg-transparent">
          <SidebarContent>
            {actions?.map((group, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <SidebarGroup key={index} className="border-b last:border-none">
                <SidebarGroupContent className="gap-0">
                  <SidebarMenu>
                    {group.map(({ label, variant, icon: Icon, onClick }) => (
                      <SidebarMenuItem key={label}>
                        <SidebarMenuButton onClick={onClick}>
                          <Icon
                            className={cn({
                              'text-red-500': variant === 'destructive',
                            })}
                          />
                          <span>{label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>
        </Sidebar>
      </PopoverContent>
    </Popover>
  );
}

NavActions.displayName = 'NavActions';
