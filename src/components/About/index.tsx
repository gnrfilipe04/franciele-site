import { ArrowRightIcon } from "@chakra-ui/icons";
import { Button, Center, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import Image from 'next/image'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Title } from "../Title";

export function About(): JSX.Element {

    return (

        <Grid templateColumns='repeat(2, 1fr)' gap={4} py={40} mr={20} alignItems={'center'}>
            <GridItem w='100%' pl={60}>
                <VStack alignItems={'flex-start'}>
                    <Title 
                        text="Quem sou eu" 
                        fontSize={'4rem'}
                        paddingBottom={2}
                        color={'fr.primary'}
                    />
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla vitae risus ac ex sodales tincidunt convallis a neque. Quisque ut iaculis libero. 
                        Mauris vestibulum efficitur sapien ac facilisis. Pellentesque nec ipsum purus.</Text>

                    <Button 
                        rightIcon={<FaArrowAltCircleRight color={'white'} size={24}/>} 
                        color={'white'} 
                        bg={'fr.secondary'}
                        _hover={{
                            opacity: '0.8'
                        }}
                        borderRadius={40}
                        fontWeight={'medium'}
                        variant='solid'>
                        Conheça mais
                    </Button>
                </VStack>
            </GridItem>
            <GridItem w='100%'>
                <Center>
                    <Image src={'/photo5.png'} alt='photo' width={536} height={592} quality={100}/>
                </Center>
            </GridItem>
        </Grid>

    )
}