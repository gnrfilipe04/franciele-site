import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";
import { Button, Stack } from "@chakra-ui/react";
import { FaWhatsapp } from 'react-icons/fa'

export function Contacts(): JSX.Element {
    return (
        <Stack direction='row' spacing={4}>
            <Button 
                leftIcon={<FaWhatsapp size={20} />} 
                colorScheme='teal'
                borderRadius={40}
                fontWeight={'medium'}
                variant='outline'>
                (51) 99896-7196
            </Button>
            <Button 
                leftIcon={<EmailIcon />} 
                colorScheme='teal' 
                borderRadius={40}
                fontWeight={'medium'}
                variant='solid'>
                E-mail
            </Button>
        </Stack>
    )
}