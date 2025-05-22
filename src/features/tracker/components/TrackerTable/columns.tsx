import { type ColumnDef } from '@tanstack/react-table';
import { MoreVerticalIcon } from 'lucide-react';

import { IApplicationBase } from '@/features/application/models';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const columns: ColumnDef<IApplicationBase>[] = [
  {
    accessorKey: 'companyName',
    header: 'Company',
    cell: ({
      row: {
        original: { companyName },
      },
    }) => (
      <div className="flex items-center gap-3">
        <Avatar className="rounded-md">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="rounded-md">{companyName[0]}</AvatarFallback>
        </Avatar>
        <span className="truncate font-medium">{companyName}</span>
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: 'jobTitle',
    header: 'Job Title',
    cell: ({ row }) => <span className="truncate">{row.original.jobTitle}</span>,
  },
  {
    id: 'actions',
    header: () => <div className="text-right">Actions</div>,
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center justify-end">
            <Button
              size="icon"
              variant="ghost"
              className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
            >
              <MoreVerticalIcon />
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
