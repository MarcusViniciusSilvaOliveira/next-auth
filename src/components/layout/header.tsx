import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import { useSession, signIn } from 'next-auth/react'

import Button from '../UI/button';
import UserIcon from '../UI/userIcon';

const Header = () => {

    const { data: session } = useSession();

    return (
        <div className='w-full bg-slate-50 h-16 content-center grid grid-cols-5 pl-8 pr-8 shadow-md'>
            <div>
                <Image className='hover:cursor-pointer'
                    src="/favicon.ico"
                    alt="Vercel Icon"
                    width={50}
                    height={50} />
            </div>
            <div className='grid col-span-3 content-center justify-center'>
                <ul className='grid grid-cols-3 gap-16'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/courses">Courses</Link>
                    </li>
                    <li>
                        <Link href="/about">About Us</Link>
                    </li>
                </ul>
            </div>
            <div className='grid content-center justify-end'>
                {
                    session ? <UserIcon
                        name={session.user?.name}
                        image={session.user?.image} /> :
                        <Button
                            description='Sign In'
                            event={signIn}
                        />
                }
            </div>
        </div>
    );
};

export default Header;