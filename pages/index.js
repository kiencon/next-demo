import Head from 'next/head';
import React from 'react';
import Container from 'react-bootstrap/Container';
import { getHeaderMenuItems } from '../api';

const Header = ({ headerMenuItems }) => (
  <div className='header'>
    <nav>
      <ul>
        {
          headerMenuItems?.map(({ name, url }, index) => (
            <li key={index}>
              <a href={url}>{name}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  </div>
);

const Index = ({ headerMenuItems }) => {
  return (
    <>
      <Head>
        <title>NextApp</title>
      </Head>
      {/* <Image src='/ngan.jpeg' alt='my love' title='my love' width='310' height='375' /> */}
      <Header headerMenuItems={headerMenuItems} />
      <div id='main-index-content'>
        <Container>
          <h1>Hello react bootstrap</h1>
        </Container>
      </div>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const headerMenuItems = await getHeaderMenuItems();
  return {
    props: {
      headerMenuItems
    }, // will be passed to the page component as props
  };
}
