import Head from "next/head";

import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Description from "../components/Description";
import Projets from "../components/Projets";
import Contact from "../components/Contact";
import Blob from "../components/Blob";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sylvain Leguay - Portfolio</title>
        <meta
          name="description"
          content="Portfolio - Sylvain LEGUAY - Dev Mobile iOS - Swift / Web ReactJS"
        />
        <meta name="title" content="Sylvain Leguay Portfolio" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="portfolio, ios, swift, swiftUI, web, developpeur, création site, conception application"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="French" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sylvainleguay.fr" />
        <meta property="og:title" content="Sylvain Leguay Portfolio" />
        <meta
          property="og:description"
          content="Portfolio - Sylvain LEGUAY - Concepteur Mobile iOS - Swift / Développeur Web ReactJS"
        />
        <meta property="og:image" content="/public/metatags.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sylvainleguay.fr" />
        <meta property="twitter:title" content="Sylvain Leguay Portfolio" />
        <meta
          property="twitter:description"
          content="Portfolio - Sylvain LEGUAY - Concepteur Mobile iOS - Swift / Développeur Web ReactJS"
        />
        <meta property="twitter:image" content="/public/metatags.png" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
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
      <div className="relative overflow-hidden">
        <Navbar />
        <main className="mt-16">
          <div className="absolute left-96 -z-10">
            <Blob width={"48"} height={"48"} />
          </div>
          <div className="absolute right-0 -z-10">
            <Blob width={"96"} height={"96"} />
          </div>
          <Description />
          <div className="absolute left-24 -z-10">
            <Blob width={"72"} height={"72"} />
          </div>
          <Intro />
          <div className="absolute left-0 -z-10">
            <Blob width={"96"} height={"96"} />
          </div>
          <Projets />
          <Contact />
        </main>
      </div>
    </>
  );
}
