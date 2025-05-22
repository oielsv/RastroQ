import { ReactNode } from 'react';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import { AppSidebar } from '@/components/AppSidebar';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <div className="flex flex-1 flex-col">
          <main className="grow flex flex-col">{children}</main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
