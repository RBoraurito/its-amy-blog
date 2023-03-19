import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Roboto, Open_Sans } from '@next/font/google'
import { Layout } from '@/components/Layout'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})

const openSans = Open_Sans({
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <style jsx global>
        {`
          :root {
            --font-title: ${roboto.style.fontFamily};
            --font-body: ${openSans.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
