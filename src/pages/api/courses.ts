// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Prisma, PrismaClient } from '@prisma/client'

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
            await get(res, req); break;
        case 'POST':
            await post(res); break;
    }
}

const get = async (res: NextApiResponse<Data>, req: NextApiRequest) => {

    const token = await getToken({ req, secret })
    let courses: any = [];

    if (token) {
        await prisma.$queryRaw(
            Prisma.sql`select
            c.id,
            c.title,
            c.description,
            c.thumbUrl,
            printf("%,d", c.price) 
            || 
            substr(
            printf("%.2f", c.price), 
            instr(printf("%.2f", c.price), "."), 
            length(printf("%.2f", c.price)) - instr(printf("%.2f", c.price), ".") + 1) as price, 
            (case when u.email = ${token.email} then '1' else '0' end) as purchased
            from Course c
            left join UserCourses uc on c.id = uc.courseId
            left join User u on uc.userId = u.id`
        ).then(data => {
            courses = data;
            prisma.$disconnect();
        });
    } else {
        await prisma.course.findMany().then(async (data: any) => {
            courses = data;
            prisma.$disconnect();
        });
    }

    res.status(200).json(courses);
}

const post = async (res: NextApiResponse<Data>) => {

}