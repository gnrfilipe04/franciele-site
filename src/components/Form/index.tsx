import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react"
import { useState, ChangeEvent } from "react"

export function Form(): JSX.Element {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
  
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)
  
    const isError = email === ''
  
    return (
      <FormControl isInvalid={isError}>
        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input
          id='email'
          type='email'
          value={email}
          onChange={handleEmailChange}
        />

        <FormLabel htmlFor='phone'>Telefone</FormLabel>
        <Input
          id='phone'
          type='number'
          value={phone}
          onChange={handlePhoneChange}
        />
        {!isError ? (
          <FormHelperText>
            Digite seu e-mail
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email é obrigatório.</FormErrorMessage>
        )}
      </FormControl>
    )
  }