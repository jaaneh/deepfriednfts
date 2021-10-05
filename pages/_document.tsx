import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from 'lib/gtag'
const isProd = process.env.NODE_ENV === 'production'

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          {isProd && (
            <>
              <script
                async={true}
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    
                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname
                    });
                  `
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
