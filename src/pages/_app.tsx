import { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';
import Header from '@/components/Header';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const { user } = pageProps;

  useEffect(() => {
    if (router.pathname === 'api/auth/login' || router.pathname === '/') return; // pathnameが"/login"の場合には処理を行わない

    if (!user) {
      // return <div>LOADING</div>;
      router.push('api/auth/login');
    }
  }, [router.pathname]);
  return (
    <UserProvider
      user={user}
      loginUrl="/api/auth/login"
      profileUrl="/api/auth/me"
    >
      <Header />
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default MyApp;
