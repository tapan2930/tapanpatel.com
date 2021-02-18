import { NextPage } from 'next';
import Head from 'next/head';
import Header from "@components/Header/Header"

const IndexPage: NextPage = () => {
  return (
    <main className="bg-primary text-white font-body">
      <Head>
        <meta name="title" content="Tapan Patel | Fullstack Developer, Wants to create an amazing User Experience"/>
        <meta name="description" content="I am a Fullstack developers, Building great user interface, scaleable and amazing apps."/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://pateltapan.com/"/>
        <meta property="og:title" content="Tapan Patel | Fullstack Developer"/>
        <meta property="og:description" content="I am a Fullstack developers, Building great user interface, scaleable and amazing apps."/>
        <meta property="og:image" content="https://pateltapan.com/og.png"/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="https://pateltapan.com/og.png"/>
        <meta property="twitter:url" content="https://pateltapan.com/" />
        <meta property="twitter:title" content="Tapan Patel | Fullstack Developer"/>
        <meta property="twitter:description" content="I am a Fullstack developers, Building great user interface, scaleable and amazing apps."/>
        <meta property="twitter:image" content="https://pateltapan.com/og.png"/>

      <link rel="icon" href="/fevicon.ico" />
      <title>Tapan Patel</title>

      </Head>
      <Header />
    </main>
  )
}
export default IndexPage;
