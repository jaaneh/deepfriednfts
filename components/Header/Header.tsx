import * as React from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import ActiveLink from '@components/ActiveLink'
import Button from '@components/Button'

const nav: Array<{ title: string; href: string }> = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Roadmap',
    href: '#roadmap'
  },
  {
    title: 'FAQ',
    href: '#faq'
  }
]

const Header = (): JSX.Element => {
  return (
    <Popover as='nav' className='px-4 navbar text-neutral-content'>
      <div className='pr-2 mr-2 navbar-start'>
        <div className='mr-2 -my-2 md:hidden'>
          <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-300 rounded-md hover:bg-neutral focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <span className='sr-only'>Open menu</span>
            <AiOutlineMenu className='w-6 h-6' aria-hidden='true' />
          </Popover.Button>
        </div>
        <Link href='/'>
          <a tabIndex={0} className='text-base font-bold sm:text-lg'>
            DeepFriedNFTs
          </a>
        </Link>
      </div>
      <div className='hidden px-2 mx-2 navbar-center md:flex'>
        <div className='flex items-stretch space-x-2'>
          {nav.map((link, i) => (
            <ActiveLink key={i} href={link.href}>
              <span className='btn btn-ghost btn-sm rounded-btn'>{link.title}</span>
            </ActiveLink>
          ))}
        </div>
      </div>
      <div className='navbar-end'>
        <div className='flex items-center justify-center'></div>
        <WalletMultiButton />
      </div>

      <Transition
        as={React.Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 z-10 p-2 transition origin-top-left transform md:hidden'
        >
          {({ close }) => (
            <div className='text-white w-full bg-gradient-to-br from-df-two to-df-one divide-gray-800 rounded-lg shadow-lg divide-y-[1px] ring-1 ring-black ring-opacity-5'>
              <div className='px-5 pt-5 pb-6'>
                <div className='flex items-center justify-between'>
                  <Link href='/'>
                    <a tabIndex={0} className='text-base font-bold md:text-lg'>
                      DeepFriedNFTs
                    </a>
                  </Link>
                  <div className='-mr-2'>
                    <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-300 rounded-md hover:bg-neutral-focus focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <AiOutlineClose className='w-6 h-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className='px-8 py-6 space-y-6'>
                <div className='flex flex-col gap-y-4'>
                  {nav.map((link, i) => (
                    <ActiveLink key={i} href={link.href} onClick={() => close()}>
                      <span className='text-base font-normal btn btn-ghost btn-sm rounded-btn'>
                        {link.title}
                      </span>
                    </ActiveLink>
                  ))}
                </div>
                <div>
                  <Button
                    tabIndex={0}
                    className='w-full'
                    isActive
                    fullWidth
                    href='https://deepfried.io/discord'
                    target='_blank'
                  >
                    Join Discord
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header
