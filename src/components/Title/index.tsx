import { ColorProps, Text, TextProps, TypographyProps } from "@chakra-ui/react";

interface TitleProps{
    text: string;
    fontSize?: string | number;
    align?: TypographyProps['textAlign'];
    paddingBottom?: string | number; 
    color?: ColorProps['color'];
}

export function Title({
    text,
    fontSize,
    align,
    paddingBottom,
    color
}: TitleProps): JSX.Element {
    return (
        <Text 
        color={color}
        textAlign={align || 'center'} 
        pb={paddingBottom || 10} 
        fontSize={fontSize || '1rem'}
        fontWeight={'bold'}
        fontFamily={'Merriweather'}
        >{text}</Text>
    )
}