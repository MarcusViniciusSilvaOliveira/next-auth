import { PrismaClient } from '@prisma/client'
import { ICourse } from '../../@types/models/models';

function main() {
    const prisma = new PrismaClient();

    const courses: ICourse[] = [
        {
            title: 'NextJS 13',
            description: 'Next.js is a flexible React framework that gives you building blocks to create fast web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application',
            thumbUrl: '/files(FakeStorage)/next-js-icon.png',
            price: 24.50
        },
        {
            title: 'Prisma DB',
            description: 'A powerfull open source next-generation ORM. Prisma Client can be used in any Node.js (supported versions) or TypeScript backend application (including serverless applications and microservices). This can be a REST API, a GraphQL API, a gRPC API, or anything else that needs a database',
            thumbUrl: '/files(FakeStorage)/prisma-icon.png',
            price: 16.50
        },
        {
            title: 'Fastify',
            description: 'A web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture, inspired by Hapi and Express. As far as we know, it is one of the fastest web frameworks in town.',
            thumbUrl: '/files(FakeStorage)/fastify-icon.jpg',
            price: 22.00
        },
        {
            title: 'React',
            description: 'Used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript. In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks.',
            thumbUrl: '/files(FakeStorage)/logo-react-icon.png',
            price: 20.25
        },
        {
            title: 'NodeJS',
            description: 'Single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine, and it uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications.',
            thumbUrl: '/files(FakeStorage)/nodejs-icon.png',
            price: 18.25
        }
    ]

    courses.map(async course => await prisma.course.create({
        data: course
    }));

    console.log("DATABASE WAS INITIALIZED SUCCESSFULLY.............");
    console.log("You can check it in the prisma studio by running 'npx prisma studio' if you want!")
}

main();