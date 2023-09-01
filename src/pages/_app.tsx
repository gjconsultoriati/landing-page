import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '../../globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Component {...pageProps} />
    </>
  )
}
