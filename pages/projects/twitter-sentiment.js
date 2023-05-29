import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import Script from 'next/script';

export default function TwitterSentiment() {
    return (
        <Layout>
        <Head>
            <title>Twitter Sentiment</title>
        </Head>
        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
            }
        />
            <h1>Twitter Sentiment</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
  }