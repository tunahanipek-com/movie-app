'use client';

import { toast } from 'sonner';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type LogoutButtonProps = {
  width?: 'max' | 'full';
};

function LogoutButton({ width = 'max' }: LogoutButtonProps) {
  const handleLogout = () => {
    //handleSignout().then(() => {
    //  window.location.reload();
    //  toast.success('Logged out successfully');
    //});
  };

  return (
    <Button
      variant="destructive"
      className={cn('h-12', width === 'max' ? 'w-max' : 'w-full')}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}

export default LogoutButton;
