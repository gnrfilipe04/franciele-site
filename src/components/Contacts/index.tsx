import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";
import { Button, Stack } from "@chakra-ui/react";

export function Contacts(): JSX.Element {
    return (
        <Stack direction='row' spacing={4}>
            <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
                Email
            </Button>
            <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                Call us
            </Button>
        </Stack>
    )
}