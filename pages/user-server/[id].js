import $axios from 'axios';
import Link from 'next/link';
import UserComponent from '../../components/user';

export default function User({ user }) {
  return (
    <>
      <Link href='/static-with-data'>Home</Link>
      <UserComponent user={user} />
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { data: user } = await $axios.get(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
  return {
    props: {
      user: user
    }, // will be passed to the page component as props
  };
};
