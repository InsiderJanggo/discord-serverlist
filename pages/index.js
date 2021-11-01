import Layout from '@/components/Layout'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Discord Bot List</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout>
          <Box p={4}>Hi World</Box>
      </Layout>
    </div>
  )
}