import type { AppProps } from 'next/app'
import Head from 'next/head';
import '../app/layout'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>
        Simple AI
      </title>  
    </Head>
    <Component {...pageProps} />
    </>
  );
  
  
 
}