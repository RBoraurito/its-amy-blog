import '@/styles/globals.css'
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
