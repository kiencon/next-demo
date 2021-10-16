import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import students from './api/data';

const Index = ({ students }) => {
  return (
    <>
      <Head>
        <title>Ngan</title>
      </Head>
      <h1>Production stage</h1>
      <Image src='/ngan.jpeg' alt='my love' title='my love' width='310' height='375' />
      <h2>Worker</h2>
      {
        students.map(({ id, name, des }) => {
          const classes = id % 2 === 0 ? 'dark' : 'light';
          return (
            <div className='student-block worker' key={id}>
              <Link href={`/worker/${id}/${id}`}>
                <a>
                  <div className={classes}>
                    <p>id: {id}</p>
                    <p>name: {name}</p>
                    <p>descripton: {des}</p>
                  </div>
                </a>
              </Link>       
            </div>
          );
        })
      }
      <h2>Students:</h2>
      {
        students.map(({ id, name, des }) => {
          const classes = id % 2 === 0 ? 'dark' : 'light';
          return (
            <div className='student-block student' key={id}>
              <Link >
                <a href={`/student/${id}`}>
                  <div className={classes}>
                    <p>id: {id}</p>
                    <p>name: {name}</p>
                    <p>descripton: {des}</p>
                  </div>
                </a>
              </Link>       
            </div>
          );
        })
      }
    </>
  );
};

export default Index;

const mockFunc = () => Promise.resolve(students);

export async function getStaticProps() {
  const data = await mockFunc();
  return {
    props: {
      students: data
    }, // will be passed to the page component as props
  };
}
