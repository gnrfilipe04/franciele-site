import { HStack } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
export function SocialIcons(){

    const black = 'rgba(0, 0, 0, 0.92)'
    const red = '#9B2C2C'

    const [linkedinColor, setLinkedinColor] = useState(black)
    const [instaColor, setInstaColor] = useState(black)


    return (
        <HStack>
            <AiFillLinkedin 
                size={40} 
                color={linkedinColor}
                cursor={'pointer'}
                onMouseOver={() => setLinkedinColor(red)}
                onMouseOut={() => setLinkedinColor(black)}
            />
            <AiFillInstagram 
                size={40} 
                color={instaColor}
                cursor={'pointer'}
                onMouseOver={() => setInstaColor(red)}
                onMouseOut={() => setInstaColor(black)}
                
            />
        </HStack>
    )
}