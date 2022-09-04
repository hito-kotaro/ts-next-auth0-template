import { useUser } from '@auth0/nextjs-auth0';
const Home = () => {
  const { user } = useUser();

  return user ? <div>HomePage</div> : <div>Loading</div>;
};

export default Home;
