import { NextPage } from 'next';
import Head from 'next/head';
import Header from "@components/Header/Header"

const IndexPage: NextPage = () => {
  return (
    <main className="bg-primary text-white font-body">
      <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>Tapan Patel</title>
      </Head>
      <Header />
    </main>
  )
}
export default IndexPage;
