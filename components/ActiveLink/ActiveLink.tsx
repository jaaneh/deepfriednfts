import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'

type IProps = {
  href: string
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const ActiveLink = ({ children, onClick, href }: IProps): JSX.Element => {
  const router = useRouter()

  const isCurrentRoute = router.pathname === href

  const styles = clsx('relative', {
    'text-white': isCurrentRoute,
    'text-gray-300': !isCurrentRoute
  })

  return (
    <Link href={href}>
      <a onClick={onClick} className={styles}>
        {children}
      </a>
    </Link>
  )
}

export default ActiveLink
