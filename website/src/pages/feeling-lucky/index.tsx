import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import useBaseUrl from '@docusaurus/useBaseUrl';

const Page: React.FC = () => {
  return (
    <Layout title="Never Gonna Give You Up!" description="I just got lucky and Rickrolled!">
      <Head>
        <meta property="og:image" content="https://mkeithx.pages.dev/img/social-banner-astro.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://mkeithx.pages.dev/feeling-lucky" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Website",
            name: "EasterEggs on SpaceHub",
            url: "https://mkeithx.pages.dev/",
            logo: "https://mkeithx.pages.dev/img/nav-logo.svg",
          })}
        </script>
      </Head>
      <img 
        src={useBaseUrl('/img/space/nice.gif')} 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          fontSize: '20px',
        }}
        alt="A nice space-themed GIF" 
      />
    </Layout>
  );
};

export default Page;
