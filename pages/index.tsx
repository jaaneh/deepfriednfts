import * as React from 'react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import * as anchor from '@project-serum/anchor'

import Minter from '@components/Minter'
import Roadmap from '@components/Roadmap'
import FAQ from '@components/FAQ'
import ImageSwiper from '@components/ImageSwiper'
// import Button from '@components/Button'

const treasury = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_TREASURY_ADDRESS!)
const config = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_CONFIG!)
const candyMachineId = new anchor.web3.PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID!
)
const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST!
const connection = new anchor.web3.Connection(rpcHost)
const startDateSeed = parseInt(process.env.NEXT_PUBLIC_CANDY_START_DATE!, 10)
const txTimeout = 30000

const HomePage = (): JSX.Element => {
  return (
    <>
      <NextSeo title='Home' />
      <div className='flex flex-col items-center justify-center w-full '>
        <div className='container hero'>
          <div className='w-full py-6 hero-content'>
            <div className='flex flex-col w-full my-6 md:flex-row'>
              <div className='flex items-center justify-center w-full px-4 md:w-1/2 hero_half'>
                <figure className='relative w-full h-72 md:min-h-[50vh] overflow-hidden'>
                  <Image
                    src='/ani.gif'
                    alt='Animated gif showcasing possible deep fried nfts for mint'
                    layout='fill'
                    className='object-cover object-center w-full h-full rounded-2xl'
                    priority={true}
                  />
                </figure>
              </div>
              <div className='flex flex-col w-full px-4 pt-8 md:w-1/2 md:pt-0 hero_half'>
                <div className='flex-1 space-y-4'>
                  <h1 className='text-4xl'>Deep Fried NFTs</h1>
                  <div className='flex flex-col justify-center font-light prose'>
                    <p>
                      Deep Fried NFTs is a collection of 2,222 NFTs minted on the Solana
                      Blockchain. The NFT will be fairly distributed with no bonding
                      curves, tiers, or reservations.
                    </p>
                    <p>
                      Once the sale goes live it will stay open until sold out. There will
                      be no pre-sale or reservations so everyone has a fair chance of
                      minting a Deep Fried NFT once they are live.
                    </p>
                  </div>
                </div>
                <div className='flex flex-col justify-center w-full pt-6'>
                  <div className='mb-2 text-lg'>
                    <p>
                      Date: <span className='font-bold'>Oct 18th - 13:00 UTC</span>
                    </p>
                    <p>
                      Price: <span className='font-bold'>1 SOL</span>
                    </p>
                  </div>
                  <Minter
                    candyMachineId={candyMachineId}
                    config={config}
                    connection={connection}
                    startDate={startDateSeed}
                    treasury={treasury}
                    txTimeout={txTimeout}
                  />
                  {/* <Button variant='primary' isActive fullWidth disabled>
                    Coming Soon
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full py-6'>
          <div id='roadmap' className='container relative w-full mx-auto space-y-12'>
            <Roadmap />
          </div>
        </div>
        <div id='faq' className='container relative w-full mx-auto space-y-12'>
          <FAQ />
        </div>
        <div id='swiper' className='container relative w-full mx-auto space-y-12'>
          <ImageSwiper />
        </div>
      </div>
    </>
  )
}

export default HomePage
