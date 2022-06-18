import { Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import Image from 'next/image'

export function About(): JSX.Element {

    return (

        <Grid templateColumns='repeat(2, 1fr)' gap={4} py={40}>
            <GridItem w='100%' px={20}>
                <VStack>
                    <Text>Quem sou eu</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla vitae risus ac ex sodales tincidunt convallis a neque. Quisque ut iaculis libero. 
                        Mauris vestibulum efficitur sapien ac facilisis. Pellentesque nec ipsum purus.</Text>
                </VStack>
            </GridItem>
            <GridItem w='100%' bg='blue.500' h={80}/>
        </Grid>

    )
}