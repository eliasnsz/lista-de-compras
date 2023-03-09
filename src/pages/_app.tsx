import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import "moment/locale/pt-br"

import moment from 'moment'

moment.locale("pt-br")

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
