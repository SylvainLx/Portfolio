import Head from "next/head";

import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Description from "../components/Description";
import Projets from "../components/Projets";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sylvain Leguay Dev</title>
        <meta
          name="description"
          content="Portfolio - Sylvain LEGUAY - Dev Web Full Stack ReactJS/NodeJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main>
        <Navbar />
        <Intro />
        <Description />
        <Projets />
        <Contact />
      </main>
    </>
  );
}
