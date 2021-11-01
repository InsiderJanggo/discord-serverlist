import { Text } from "@chakra-ui/react";
import Link from 'next/link'

export default function Item({ children, isLast, to = "/", ...rest }) {
    return(
        <Link href={to} passHref>
            <Text display="block" cursor="pointer" {...rest}>
                {children}
            </Text>
        </Link>
    )
}