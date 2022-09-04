import type { NextPage } from 'next';
import { useUser } from '@auth0/nextjs-auth0';

const Home: NextPage = () => {
  const { user } = useUser();
  if (user) {
    return <div>{user.name}</div>;
  }
  return <div>no login page</div>;
};

export default Home;
