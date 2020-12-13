
import type { AppProps } from 'next/app';

import '../styles/prism.css';
import '../styles/index.css';
import '../styles/styles.css';


const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};
export default MyApp;
