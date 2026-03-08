import { ReactNode } from 'react'

const Layout = async ({children}: {children: ReactNode}) => {
  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default Layout