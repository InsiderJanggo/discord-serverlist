import { getAllUser } from "@/lib/database/user";

/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse<import('@prisma/client').User>} res
*/
export default async function handler(req, res) {
   const users = await getAllUser()

   res.json(users)
}
  