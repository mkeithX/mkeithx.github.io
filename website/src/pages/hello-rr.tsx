import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function Page() {
  return (
    <Layout title="Page" description="A React page demo">
      <Head>
        <meta property="og:image" content="image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://example.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Meta Open Source',
            url: 'https://opensource.fb.com/',
            logo: 'https://opensource.fb.com/img/logos/Meta-Open-Source.svg',
          })}
        </script>
      </Head>
      {/* ... */}
    </Layout>
  );
}
