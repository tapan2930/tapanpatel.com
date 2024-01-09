import Head from "next/head";

type propType = {
  title?: string;
  description?: string;
  url?: string;
  imgUrl?: string;
};

const PageHead = ({
  title = "Tapan Patel | Fullstack Developer, Wants to create an amazing User Experience",
  description = "I am a Fullstack developers, Building great user interface, scaleable and amazing apps.",
  url = "https://tapan.tech/",
  imgUrl = "https://tapan.tech/og.png",
}: propType) => {
  return (
    <Head>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgUrl} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content={imgUrl} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imgUrl} />

      <link rel="icon" href="/fevicon.ico" />
      <title>Tapan Patel</title>
    </Head>
  );
};

export default PageHead;
