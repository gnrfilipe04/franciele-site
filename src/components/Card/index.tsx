import { Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Title } from "../Title";

interface CardProps {
    title: string;
    contentText: string;
    icon: ReactNode
}

export function Card({
    title,
    contentText,
    icon
}: CardProps): JSX.Element {
    return (
        <VStack 
        alignItems={'flex-start'} 
        p={10}
        width={'70%'}
        >
            {icon}
            <Title 
                text={title}
                paddingBottom={2}
                color={'fr.primary'}
                fontSize={'1.3rem'}
            />
            <Text>{contentText}</Text>
        </VStack>
    )
}