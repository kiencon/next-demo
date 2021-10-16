import $axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import User from '../components/user';

const StaticWithoutData = ({ users }) => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <h1>Users</h1>
      <div className='users'>
        {users.map(user => user.id % 2 === 0 ? (
          <Link key={user.id} href={`/user/${user.id}`}>
            <a>
              <User user={user} />
            </a>
          </Link>
        ) : (
          <Link key={user.id} href={`/user-server/${user.id}`}>
            <a>
              <User user={user} />
            </a>
          </Link>
        ))}  
      </div>
    </>
  );
};

export default StaticWithoutData;

export const getStaticProps = async () => {
  const { data: users } = await $axios.get('https://jsonplaceholder.typicode.com/todos');
  return {
    props: {
      users: users
    }, // will be passed to the page component as props
  };
};
