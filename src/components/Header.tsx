import Link from 'next/link';
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';

const Header = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) {
    console.log(error.message);
  }
  if (user)
    return (
      <header>
        Welcome {user.name}!<Link href="api/auth/logout">Logout</Link>
      </header>
    );

  return (
    <header>
      <Link href="/api/auth/login">Login</Link>
    </header>
  );
};

export default Header;
