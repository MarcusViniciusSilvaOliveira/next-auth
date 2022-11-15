// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

type Data = any;

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    switch (req.method) {
        case 'GET':
            await get(res); break;
        case 'POST':
            await post(res, req.body); break;
    }
}

const get = async (res: NextApiResponse<Data>) => {
    let courses: any = [];
    await prisma.course.findMany().then(async (data: any) => {
        courses = data;
        prisma.$disconnect();
    });

    res.status(200).json(courses);
}

const post = async (res: NextApiResponse<Data>, data: any) => {
    let user = {} || null;
    const existingUser = await prisma.user.findUnique({
        where: {
            email: data.email,
        },
    })
    user = existingUser;
    if (!existingUser)
        user = await prisma.user.create({
            data: {
                email: data.email
            }
        });

    res.status(200);
}