// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

import { getToken } from "next-auth/jwt"

const secret = process.env.JWT_SECRET;

type Data = any;

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    switch (req.method) {
        case 'GET':
            await get(res, req.query); break;
        case 'POST':
            await post(res, req); break;
    }
}

const get = async (res: NextApiResponse<Data>, query: any) => {
    let userCourses: any = [];
    await prisma.userCourses.findMany({
        where: {
            user: {
                email: query.email
            }
        }
    }).then(async (data: any) => {
        userCourses = data.length;
        prisma.$disconnect();
    });

    res.status(200).json(userCourses);
}

const post = async (res: NextApiResponse<Data>, req: any) => {

    const token = await getToken({ req, secret })
    const data = req.body;
    if (!token) {
        res.status(403).send({ error: 'User not authenticated.' });
        return;
    }

    await prisma.user.findUnique({
        where: {
            email: token?.email || ""
        }
    }).then(user => data.userId = user?.id);

    await prisma.userCourses.create({
        data
    }).then(() => prisma.$disconnect());

    res.status(200).send({});
}