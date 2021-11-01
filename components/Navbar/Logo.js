import { Box, Text, Image } from "@chakra-ui/react";

/**
 * @param {import('@chakra-ui/react').BoxProps} props 
 */
export default function Logo(props) {
    return(
        <Box {...props}>
            <Image alt="logo" src="/logo.svg" width="50" height="50" />
            <Text fontSize="lg" fontWeight="bold">
                Discord Server List
            </Text>
        </Box>
    )
}