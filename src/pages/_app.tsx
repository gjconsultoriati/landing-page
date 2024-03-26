import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import 'tailwindcss/tailwind.css'
import '../../globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Component {...pageProps} />
    </>
  )
}
