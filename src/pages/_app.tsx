import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from "react-query"

import '@/styles/globals.css'
import "moment/locale/pt-br"

import moment from 'moment'

moment.locale("pt-br")

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  )
}
