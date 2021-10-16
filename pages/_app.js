import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Layout from '../components/layout';
import '../styles/globals.css';
import '../styles/index.scss';


const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <main id='main'>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default MyApp;
