import { Container, Divider, Grid, GridItem, HStack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { About } from '../components/About'
import { Contacts } from '../components/Contacts'
import { Form } from '../components/Form'
import { Menu } from '../components/Menu'
import { ProcessType } from '../components/ProcessType'
import { SocialIcons } from '../components/SocialIcons'
import { Title } from '../components/Title'

const Home: NextPage = () => {

  return (
    <>
      <Head>Franciele Souza</Head>
      <Grid
        templateAreas={`"header header"
                        "main main"`}
        gridTemplateRows={'100px 2000px'}
        gridTemplateColumns={'1fr'}
        color='blackAlpha.700'
      >
        <GridItem bg='fr.background' area={'header'} px={10} py={10}>
          <HStack justifyContent={'space-between'} mr={20}>
            <Text>Logo</Text>
            <HStack spacing={20}>
              <Menu />
              <Contacts />
            </HStack>
          </HStack>
        </GridItem>
        <GridItem px={10} bg='fr.background' area={'main'} >
          <About />
          <Divider />
          <ProcessType />
          <Divider />
          <Container pt={10} pb={50}>
          <Title 
            text="Como posso te ajudar?"
            color={'fr.primary'}
            fontSize={'2.5rem'}
          />
            <Form />
            <HStack justifyContent={'flex-end'}>
              <SocialIcons />
            </HStack>
          </Container >
        </GridItem>
      </Grid>
    </>
  )
}

export default Home
