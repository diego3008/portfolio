import '../styles/globals.css';
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { Navbar } from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider disableBaseline>
      <Navbar/>
      <Component {...pageProps} />  
    </NextUIProvider>
  )
}

export default MyApp
