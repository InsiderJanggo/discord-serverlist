
/**
 * @param {String} serverId - Guild ID
 * @param {String} botToken - Your Bot Secret Token
 * @returns Server Object
 */
const getServerInfo = async(serverId, botToken) => {
    const res = await fetch(`https://discord.com/api/guilds/${serverId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${botToken}`
        },
        
    });
    const server = await res.json()

    return server
}

export default getServerInfo