'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import capitalize from 'lodash/capitalize';

import { cn } from '@/lib/utils';

import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb';

import { NavActions, NavActionsProps } from './NavActions';
import { Button } from '../ui/button';

interface HeaderProps extends NavActionsProps {}

export function Header({ actions }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [rootPath = 'home'] = pathname.split('/').filter(Boolean);

  return (
    <header
      className={cn([
        'group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12',
        'shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear',
      ])}
    >
      <div className="flex w-full items-center gap-1">
        <div className="flex flex-1 items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          <Button onClick={() => router.back()} variant="ghost" size="icon" className="w-auto h-auto">
            <ChevronLeft />
          </Button>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">{capitalize(rootPath)}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {actions && (
          <div className="ml-auto px-3">
            <NavActions actions={actions} />
          </div>
        )}
      </div>
    </header>
  );
}

Header.displayName = 'Header';
