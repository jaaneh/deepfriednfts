import * as React from 'react'
import { useRouter } from 'next/router'

const Custom404 = (): JSX.Element => {
  const router = useRouter()

  React.useEffect(() => {
    router.push('/')
  }, [])

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h1 className='py-4 text-2xl'>404 - Not Found</h1>
    </div>
  )
}

export default Custom404
