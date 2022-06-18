import { Box, Container, Grid, GridItem, Text, VStack } from "@chakra-ui/react";

export function ProcessType(): JSX.Element {
    return (
        <Box pt={35} pb={20}>
            <Text textAlign={'center'}>Tipos de processos</Text>
            <Grid
            h='200px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(6, 1fr)'
            gap={4}
            >
                <GridItem colSpan={2} bg='tomato' />
                <GridItem colSpan={2} bg='tomato' />
                <GridItem colSpan={2} bg='tomato' />
                <GridItem colSpan={2} bg='tomato' />
                <GridItem colSpan={2} bg='tomato' />
                <GridItem colSpan={2} bg='tomato' />
            </Grid>
        </Box>
    )
}