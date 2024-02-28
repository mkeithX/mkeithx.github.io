import React from 'react';
import Admonition from '@theme/Admonition';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';


export default function Hello() {
    return (

        <Layout title="Hello" description="Hello React Page">

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    // fontSize: '20px',
                }}>

                <Admonition type="info" icon="💡" title="Ooops..">
                    <span>
                        Keep an eye out for updates, something special is on the way. Learn <Link to="https://kitiplex.github.io/">more</Link>
                    </span>
                </Admonition>

            </div>
        </Layout>
    );
}

