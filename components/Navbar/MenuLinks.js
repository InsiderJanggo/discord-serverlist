import { 
    Box, 
    Stack, 
    Button,
    Avatar,
    MenuList,
    Menu,
    MenuButton,
    Flex,
    MenuItem
 } from '@chakra-ui/react'
import Item from './Item'
import { useRouter } from 'next/router'

export default function MenuLinks({ isOpen, session }) {
    const router = useRouter()

    return(
        <Box  display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}>
            <Stack spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}>
                    <Item to="/">Home</Item>
                    {session ? (
                        <Flex alignItems="center">
                            <Menu>
                                <MenuButton as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar size={`sm`} src={session.user.image} />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={() => router.push('/me')}>
                                        Profile
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                    ): (
                        <Item to="/api/auth/signin" isLast>
                            <Button
                                size="sm"
                                rounded="md"
                                cursor="pointer"
                                color={["primary.500", "primary.500", "white", "white"]}
                                bg={["blue.400", "blue.400", "primary.500", "primary.500"]}
                                _hover={{
                                bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
                                }}
                            >
                                Login
                            </Button>
                        </Item>
                )}
            </Stack>
        </Box>
    )
}