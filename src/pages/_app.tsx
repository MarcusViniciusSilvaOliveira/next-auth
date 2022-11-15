import '../../styles/globals.css'
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import Head from 'next/head'
import Header from '../components/layout/header'

function MyApp({ Component, pageProps }: AppProps) {
  return <SessionProvider session={pageProps.session}>
    <div>
      <Head>
        <title>Next Auth</title>
        <meta name="description" content="JaoPreto was here!!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='mt-4 overflow-auto h-screen'>
        <div className='ml-60 mr-60'>
          <Component {...pageProps} />
        </div>
      </main>
      <footer>
      </footer>
    </div>
  </SessionProvider>
}

export default MyApp
