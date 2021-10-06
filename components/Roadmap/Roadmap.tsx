import * as React from 'react'
import { Chrono } from 'react-chrono'

import useWindowSize, { ISize } from '@hooks/useWindowSize'
import ContentLayout from '@components/ContentLayout'
import roadmap from '@content/roadmap.json'

const Roadmap = (): JSX.Element => {
  const size: ISize = useWindowSize()

  return (
    <ContentLayout title='Roadmap'>
      <Chrono
        items={roadmap}
        mode={size.width > 1024 ? 'VERTICAL_ALTERNATING' : 'VERTICAL'}
        cardWidth={500}
        cardHeight={100}
        useReadMore={false}
        hideControls={true}
        theme={{
          primary: '#4e44ce',
          secondary: '#4e44ce',
          cardBgColor: '#151523',
          cardForeColor: 'white',
          titleColor: 'white'
        }}
      />
    </ContentLayout>
  )
}

export default Roadmap
