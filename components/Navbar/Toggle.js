import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";
import { Box } from "@chakra-ui/react";

export default function Toggle({ toggle, isOpen }) {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
      )
}