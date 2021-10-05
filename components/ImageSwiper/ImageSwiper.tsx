import * as React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

SwiperCore.use([EffectCoverflow, Pagination])

const ImageSwiper = (): JSX.Element => {
  return (
    <Swiper
      effect='coverflow'
      grabCursor={true}
      centeredSlides={true}
      slidesPerView='auto'
      loop={true}
      coverflowEffect={{
        rotate: 30,
        depth: 150,
        modifier: 1,
        slideShadows: false
      }}
    >
      {new Array(21).fill('').map((_, i) => (
        <SwiperSlide key={i}>
          <Image
            src={`/swiper/image_${i + 1}.png`}
            alt=''
            layout='fill'
            priority={true}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImageSwiper
