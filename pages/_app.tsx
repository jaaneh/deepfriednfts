import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/300.css'
import 'swiper/css/bundle'
import '../styles/globals.css'

import * as React from 'react'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { Toaster } from 'react-hot-toast'

const WalletConnection = dynamic(() => import('@components/WalletConnection'), {
  ssr: false
})

import Layout from '@components/Layout'

import SEO from '../next-seo.config'

import * as gtag from '@lib/gtag'
const isProd = process.env.NODE_ENV === 'production'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter()

  React.useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (isProd) gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Toaster
        position='bottom-center'
        toastOptions={{
          duration: 5000,
          style: {
            fontSize: '1rem',
            background: '#2c384c',
            color: '#fff'
          }
        }}
      />
      <WalletConnection>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WalletConnection>
    </>
  )
}

export default MyApp
