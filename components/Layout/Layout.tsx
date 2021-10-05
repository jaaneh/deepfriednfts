import * as React from 'react'

import Header from '@components/Header'
import Footer from '@components/Footer'

type ILayout = {
  children: React.ReactNode
}

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <>
      <div className='flex flex-col min-h-full mx-auto'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
