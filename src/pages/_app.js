import '@/styles/globals.css'
import {Montserrat} from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import SideNav from '../components/SideNav'
import HorizontalNavbar from '../components/HorizontalNavbar'
import SideNavbar from '../components/SideNavbar'
import { useState } from 'react'


const montserrat= Montserrat({
  subsets:['latin'],
  variable : "--font-mont"
})


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <main className="font-mont bg-dark w-full min-h-screen">
        <HorizontalNavbar toggleSidebar={toggleSidebar} />
        <SideNavbar isSidebarOpen={isSidebarOpen} />
        <Component key={router.asPath} {...pageProps} />
      </main>
    </>
  );
}
