import '../styles/globals.css';
import '../styles/index.scss';

const MyApp = ({ Component, pageProps }) => (
  <>
    <main id='main'>
      <Component {...pageProps} />
    </main>
  </>
);

export default MyApp;
