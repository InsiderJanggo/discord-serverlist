import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'next-auth/client'
import '@/styles/globals.css'
import theme from '@/theme/index'

function MyApp({ Component, pageProps }) {
  return (
   <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
   </Provider>
  )
}

export default MyApp
