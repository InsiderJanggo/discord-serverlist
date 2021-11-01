import prisma from '@/lib/prisma'

const getAllUser = async() => {
    const users = await prisma.user.findMany({
        include: {
            servers: true,
            accounts: true
        }
    })
    await prisma.$disconnect()
    return users
}

const getOneUser = async(id) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    })
    await prisma.$disconnect()
    return user
}

export {
    getAllUser,
    getOneUser
}