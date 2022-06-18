import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export function Menu(): JSX.Element {
    return (
        <Breadcrumb spacing='8px' separator={''}>
            <BreadcrumbItem>
                <BreadcrumbLink 
                    href='#'
                    _hover={{
                        textDecoration: 'none'
                    }}
                >Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink 
                    href='#'
                    _hover={{
                        textDecoration: 'none'
                    }}
                >Sobre</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink 
                    href='#'
                    _hover={{
                        textDecoration: 'none'
                    }}
                >Contato</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}