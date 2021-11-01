import { getAllServer } from "@/lib/database/server";

/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse<import('@prisma/client').Server>} res
*/
export default async function handler(req, res) {
    const servers = await getAllServer();

    res.json(servers)
}
  