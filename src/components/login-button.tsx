'use client';

import { usePathname } from '@/navigation';
import React from 'react';
import { Button } from './ui/button';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function LoginButton() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const from = searchParams.get('callback') || pathname;

  return (
    <Link
      href={`/auth/login?callback=${encodeURIComponent(from)}`}
      className="w-max h-12"
    >
      <Button variant="ghost" className="h-full">
        Login
      </Button>
    </Link>
  );
}

export default LoginButton;
