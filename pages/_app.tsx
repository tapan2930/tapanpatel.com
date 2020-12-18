import type { AppProps } from 'next/app';

import '../styles/prism.css';
import '../styles/index.css';
import '../styles/styles.css';


const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (<div className="bg-tertiary"> <Component {...pageProps} /> </div>);
};
export default MyApp;
