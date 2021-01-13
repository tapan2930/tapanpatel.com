import { NextPage } from 'next';
import Head from 'next/head';
import Header from "@components/Header/Header"

const IndexPage: NextPage = () => {
  return (
    <main className="bg-primary text-white font-body">
      <Head>
      <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NNGD2XDZFF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NNGD2XDZFF');
</script>
      <meta property="og:url" content="https://pateltapan.com/" />
      <meta property="og:type" content="web" />
      <meta property="og:title" content="Tapan Patel Portfolio" />
      <meta property="og:image" content="/og.png" />
      <link rel="icon" href="/fevicon.ico" />
      <title>Tapan Patel</title>
      </Head>
      <Header />
    </main>
  )
}
export default IndexPage;
