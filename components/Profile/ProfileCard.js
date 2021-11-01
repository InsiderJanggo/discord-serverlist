import {
    Center,
    Box,
    useColorModeValue,
    Avatar,
    Flex,
    Stack,
    Heading,
    Text
} from '@chakra-ui/react'

export default function ProfileCard({ user }) {
    return(
        <Center py={6}>
            <Box maxW={'270px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Flex justify={'center'}>
                    <Avatar 
                        size={'xl'}
                        src={user.image}
                        alt={user.name}
                        css={{
                            border: '2px solid white',
                        }}
                    />
                </Flex>

                <Box p={6}>
                <Stack spacing={0} align={'center'} mb={5}>
                    <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                        {user.name}
                    </Heading>
                    <Text color={'gray.500'}>{user.email}</Text>
                 </Stack>
                </Box>
            </Box>
        </Center>
    )
}