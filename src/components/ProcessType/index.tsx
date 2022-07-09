import { Box, Center, Container, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { Card } from "../Card";
import { Title } from "../Title";
import { MdFamilyRestroom, MdBusinessCenter } from 'react-icons/md'
import { TbOld } from 'react-icons/tb'

export function ProcessType(): JSX.Element {
    return (
        <Box pt={35} pb={20}>
            <Title 
                text="Serviços"
                color={'fr.secondary'}
                fontSize={'1rem'}
                paddingBottom={1}
            />
            <Title 
                text="Principais áreas"
                color={'fr.primary'}
                fontSize={'2.5rem'}
            />
            <Grid
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(6, 1fr)'
            gap={4}
            mx={20}
            >
                <GridItem colSpan={2}>
                    <Center>
                        <Card 
                            icon={<MdFamilyRestroom size={40} color={'#9B2C2C'}/>}
                            title="Familiar"
                            contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue ullamcorper tincidunt. Nulla mollis eros vel lorem scelerisque, id pretium arcu sodales."
                        />
                    </Center>
                </GridItem>
                <GridItem colSpan={2}>
                    <Center>
                        <Card 
                            icon={<MdBusinessCenter size={40} color={'#9B2C2C'}/>}
                            title="Empresarial"
                            contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue ullamcorper tincidunt. Nulla mollis eros vel lorem scelerisque, id pretium arcu sodales."
                        />
                    </Center>
                </GridItem>
                <GridItem colSpan={2} >
                    <Center>
                        <Card 
                            icon={<TbOld size={40} color={'#9B2C2C'}/>}
                            title="Previdenciário"
                            contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue ullamcorper tincidunt. Nulla mollis eros vel lorem scelerisque, id pretium arcu sodales."
                        />
                    </Center>
                </GridItem>
            </Grid>
        </Box>
    )
}