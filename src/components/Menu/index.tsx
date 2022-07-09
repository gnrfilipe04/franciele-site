import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export function Menu(): JSX.Element {
    return (
        <Breadcrumb spacing='8px' separator={''}>
            <BreadcrumbItem>
                <BreadcrumbLink 
                    href='#'
                    isCurrentPage
                    color={'fr.secondary'}
                    fontWeight={'medium'}
                    _hover={{
                        textDecoration: 'none',
                        color: 'fr.secondary'
                    }}
                >Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink 
                    href='#'
                    fontWeight={'medium'}
                    _hover={{
                        textDecoration: 'none',
                        color: 'fr.secondary'
                    }}
                >Sobre</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink 
                    href='#'
                    fontWeight={'medium'}
                    _hover={{
                        textDecoration: 'none',
                        color: 'fr.secondary'
                    }}
                >Contato</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}