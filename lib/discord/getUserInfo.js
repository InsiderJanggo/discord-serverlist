
/**
 * @param {String} userId - User Id
 * @param {String} botToken - Your Bot Secret Token
 * @returns User Object
 */
const getUserInfo = async(userId, botToken) => {
    const res = await fetch(`https://discord.com/api/users/${userId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${botToken}`
        }
    })
    const user = await res.json()

    return user;
}

export default getUserInfo