import * as React from 'react'

type IContentLayout = {
  children: React.ReactNode
  title: string
  undertitle?: string
  noPadding?: boolean
  content?: string
}

const ContentLayout = ({ children, title }: IContentLayout): JSX.Element => {
  return (
    <section className='flex flex-col items-center justify-center w-full mx-auto my-6'>
      <div className='w-full px-8 mb-2 text-center'>
        <h1 className='mb-2 text-3xl leading-normal uppercase'>{title}</h1>
      </div>
      <div className='w-full h-full mx-auto'>
        <div className='relative h-full px-8 py-4 overflow-hidden wrap'>{children}</div>
      </div>
    </section>
  )
}

export default ContentLayout
