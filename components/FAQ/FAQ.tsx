import * as React from 'react'

import ContentLayout from '@components/ContentLayout'
import faq_content from '@content/faq.json'

const FAQ = (): JSX.Element => {
  return (
    <ContentLayout title='FAQ'>
      <section className='flex flex-col justify-center w-full gap-4 mx-auto text-sm md:max-w-2xl'>
        {faq_content.map((question, i) => (
          <div
            key={i}
            tabIndex={0}
            className='relative max-w-full p-4 prose-sm prose rounded'
          >
            <h3 className='flex items-center mb-1 text-lg tracking-tight normal-case faq'>
              {question.title}
            </h3>
            <p
              className='text-gray-400'
              dangerouslySetInnerHTML={{ __html: question.content }}
            />
          </div>
        ))}
      </section>
    </ContentLayout>
  )
}

export default FAQ
