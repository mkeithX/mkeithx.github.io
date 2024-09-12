import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';






export default function Hello() {
  return (
    <Layout title="Feeling Luck at mkeithX" description="Got Ricked Rolled instead">
         <img src={useBaseUrl('/img/space/nice.gif')} 
            style={{
                // display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // height: '50vh',
                // width: '80%',
                fontSize: '20px',
         }}/>

      
    </Layout>
  );
}