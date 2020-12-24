import { NextPage } from 'next';
import Head from 'next/head';
import Header from "@components/Header/Header"

const IndexPage: NextPage = () => {
  return (
    <main className="bg-primary text-white font-body">
      <Head>
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
