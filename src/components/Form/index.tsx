import { Button, Center, FormControl, FormLabel, HStack, Input, Text, Textarea, VStack } from "@chakra-ui/react"
import { useState, ChangeEvent } from "react"

export function Form(): JSX.Element {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
  
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)
    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)
  
    return (
      <FormControl >
        <VStack alignItems={'flex-start'}>
          <FormLabel htmlFor='text'>Nome</FormLabel>
          <Input
            id='name'
            type='text'
            value={name}
            focusBorderColor={'red.700'}
            onChange={handleNameChange}
          />

          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input
            id='email'
            type='email'
            value={email}
            focusBorderColor={'red.700'}
            onChange={handleEmailChange}
          />

          <FormLabel htmlFor='phone'>Telefone</FormLabel>
          <Input
            id='phone'
            type='number'
            value={phone}
            focusBorderColor={'red.700'}
            onChange={handlePhoneChange}
          />

          <Text mb='8px'>Mensagem</Text>
          <Textarea
            value={message}
            onChange={handleMessageChange}
            focusBorderColor={'red.700'}
            placeholder='Digite seu assunto...'
            size='sm'
          />
        </VStack>
        <Center>
          <Button
            mt={4}
            color={'white'}
            bg={'fr.secondary'}
            type='submit'
            _hover={{
              opacity: '0.8'
            }}
          >
            Enviar
          </Button>
        </Center>
      </FormControl>
    )
  }