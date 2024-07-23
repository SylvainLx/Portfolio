import Head from "next/head";

import Footer from "./Contact";
import Navbar from "./Navbar";

function Layout({ children }: any) {

  const addJsonLd = () => {
    return {
      __html: `
    {"@context":"http://schema.org",
  "@type": "Organization",
  "url": "https://sylvainleguay.fr",
  "name": "Sylvain Leguay Portfolio",
  "description": "Portfolio de Sylvain LEGUAY, concepteur mobile iOS et développeur web ReactJS.",
  "keywords": ["portfolio", "sylvain", "leguay", "sylvainleguay", "ios", "swift", "swiftUI", "web", "developpeur", "création site", "conception application"],
  "image": "https://sylvainleguay.fr/public/metatags.png"}
`
    }
  }

  return (
    <>
      <Head>
        <title>Sylvain Leguay - Portfolio</title>
        <meta name="title" content="Sylvain Leguay Portfolio" />

        <meta
          name="description"
          content="Portfolio - Sylvain LEGUAY - Dev Mobile iOS - Swift / Web ReactJS"
        />
        <meta name="google-site-verification" content="EzcJFGvq1y_JWDE7uajd-32znJ3rTWdlp466ZZEtgUM" />
        <meta name="author" content="Sylvain LEGUAY" />
        <meta name="copyright" content="Sylvain LEGUAY" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="portfolio, sylvain, sylvainleguay, ios, swift, swiftUI, web, developpeur, création, site, conception, application, biscarrosse, landes, aquitaine"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="French" />

        <meta property="og:locale" content="fr" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sylvain LEGUAY Portfolio" />
        <meta property="og:url" content="https://sylvainleguay.fr" />
        <meta property="og:title" content="Sylvain Leguay Portfolio" />
        <meta
          property="og:description"
          content="Portfolio - Sylvain LEGUAY - Concepteur Mobile iOS - Swift / Développeur Full Stack"
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
        <script
          id="item-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="item-jsonld" />

      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
