import getUserInfo from '@/lib/discord/getUserInfo'

/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    const user = await getUserInfo(req.query.id, process.env.DISCORD_CLIENT_TOKEN)

    res.json(user)
}
  