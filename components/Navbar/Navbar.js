import Container from "./Container"
import { useState } from "react"
import Logo from "./Logo"
import { useSession } from "next-auth/client"
import Link from 'next/link'
import Toggle from "./Toggle"
import MenuLinks from "./MenuLinks"

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [session] = useSession()

  const toggle = () => setIsOpen(!isOpen);

  return (
   <Container {...props}>
      <Link href="/" passHref>
        <Logo as="a" cursor="pointer" />
      </Link>
      <Toggle isOpen={isOpen} toggle={toggle} />
      <MenuLinks isOpen={isOpen} session={session}/>
   </Container>
  )
}
