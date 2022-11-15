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
    const token = await getToken({ req, secret })

    let userCourses: any = [];
    await prisma.userCourses.findMany({
        where: {
            user: {
                email: token?.email || "notFound"
            }
        },
        select: {
            course: true
        }
    }).then(async (data: any) => {
        userCourses = data;
        prisma.$disconnect();
    });

    res.status(200).json(userCourses);
}