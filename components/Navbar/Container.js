import { Flex } from '@chakra-ui/react'

export default function Container({ children, ...props }) {
    return(
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={["primary.500", "primary.500", "transparent", "transparent"]}
            color={["black", "black", "primary.700", "primary.700"]}
            {...props}
        >
            {children}
        </Flex>
    )
}