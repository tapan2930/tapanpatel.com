import { useEffect } from "react";
import type { AppProps } from "next/app";
import * as gtag from "../src/utils/gtags";
import {AnimatePresence} from "framer-motion";

import '../styles/prism.css';
import '../styles/index.css';
import '../styles/styles.css';


// const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
//   return (<div className="bg-tertiary"> <Component {...pageProps} /> </div>);
// };


const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  if(process.env.NODE_ENV === 'production'){
    useEffect(() => {
      const handleRouteChange = (url: URL) => {
        gtag.pageview(url);
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }, [router.events]);
  }

  return <AnimatePresence exitBeforeEnter > <div className="bg-primary"> <Component {...pageProps} key={router.route} /> </div> </AnimatePresence>;

}

export default App;
