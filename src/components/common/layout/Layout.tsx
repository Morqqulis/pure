'use client'
import { ToastContainer } from 'react-toastify'
import Header from './Header'
import Sidebar from './Sidebar'
import { usePathname } from 'next/navigation'

interface LayoutProps {
  children: React.ReactNode
}
const parentClassName = `h-full flex flex-col [&>main]:flex-auto`

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname()

  if (pathname === '/login') {
    return (
      <div className={parentClassName}>
        {children}
        <ToastContainer position="top-center" theme={'dark'} autoClose={1500} />
      </div>
    )
  }

  return (
    <div className={`flex h-full bg-[#121212]`}>
      <Sidebar />
      <div className={`flex-1 ${parentClassName}`}>
        <Header />
        <main>
          <div className={`container h-full w-full`}>{children}</div>
        </main>
      </div>
      <ToastContainer position="top-center" theme={'dark'} autoClose={1500} />
    </div>
  )
}
