import { Grid, GridItem, HStack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { About } from '../components/About'
import { Contacts } from '../components/Contacts'
import { Footer } from '../components/Footer'
import { Menu } from '../components/Menu'

const Home: NextPage = () => {

  return (
    <>
      <Head>Franciele Souza</Head>
      <Grid
        templateAreas={`"header header"
                        "main main"
                        "footer footer"`}
        gridTemplateRows={'100px 750px 80px'}
        gridTemplateColumns={'1fr'}
        h='200vh'
        gap='1'
        color='blackAlpha.700'
      >
        <GridItem bg='orange.300' area={'header'} px={10} py={10}>
          <HStack justifyContent={'space-between'}>
            <Text>Logo</Text>
            <HStack spacing={20}>
              <Menu />
              <Contacts />
            </HStack>
          </HStack>
        </GridItem>
        <GridItem px={10} bg='green.300' area={'main'}>
          <About />
        </GridItem>
        <GridItem px={10} bg='blue.300' area={'footer'}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  )
}

export default Home
