import prisma from '@/lib/prisma'

//DATA FOR CREATING SERVER
const config = {
    name: '',
    image: '',
    serverId: ''
}

const getAllServer = async() => {
    const servers = await prisma.server.findMany({
        include: {
            owner: true
        }
    })
    await prisma.$disconnect()
    return servers
}

const getOneServer = async(id) => {
    const server = await prisma.server.findUnique({
        where: {
            id
        }
    })
    await prisma.$disconnect()

    return server
}

/**
 * @param {String} userId - User Id
 * @param {config} data - Server Data
 * @returns
 */
const createServer = async(userId, data) => {
    const { name, image, serverId } = data;
    const newServer = await prisma.server.create({
        data: {
            name,
            image,
            serverId,
            ownerId: userId
        }
    })
    await prisma.$disconnect()
    return newServer
}

export {
    getAllServer,
    getOneServer,
    createServer
}