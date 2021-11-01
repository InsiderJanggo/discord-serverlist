import { Text } from "@chakra-ui/react"
import { signIn } from "next-auth/client"
import Link from "next/link"

export default function AccessDenied() {
    return (
        <div>
            <Text>Access Denied</Text>
            <Link href="/api/auth/signin" passHref  
                onClick={(e) => {
                e.preventDefault()
                signIn()}}>
                <Text cursor="pointer">Please Login To Visit This Page</Text>
            </Link>
        </div>
    )
}
