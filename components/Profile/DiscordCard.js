import { FaDiscord } from 'react-icons/all'
import {
    Button
} from '@chakra-ui/react'
const DISCORD_COLOR = '#7289da';

export default function DiscordCard({ username, discriminator }) {
    return(
        <Button w={'full'} leftIcon={<FaDiscord />} color={DISCORD_COLOR}>
            {username}#{discriminator}
        </Button>
    )
}