import { EmailIcon } from "@chakra-ui/icons";
import { Button, Stack } from "@chakra-ui/react";
import { FaWhatsapp } from 'react-icons/fa'

export function Contacts(): JSX.Element {
    return (
        <Stack direction='row' spacing={4}>
            <Button 
                leftIcon={<FaWhatsapp size={20} color={'fr.secondary'}/>}
                color={'fr.secondary'}
                borderColor={'fr.secondary'}
                _hover={{
                    opacity: '0.8'
                }}
                borderRadius={40}
                fontWeight={'medium'}
                variant='outline'>
                (51) 99896-7196
            </Button>
            <Button 
                leftIcon={<EmailIcon color={'white'}/>} 
                color={'white'} 
                bg={'fr.secondary'}
                _hover={{
                    opacity: '0.8'
                }}
                borderRadius={40}
                fontWeight={'medium'}
                variant='solid'>
                E-mail
            </Button>
        </Stack>
    )
}