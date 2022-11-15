import Image from 'next/image';
import { getSession } from 'next-auth/react'

import Methods from '../api/api';

export async function getServerSideProps(context: any) {
    const { req } = context;
    const session = await getSession({ req });

    const fetch = await Methods.GetAll(`usercourses?email=${session?.user?.email}`);

    return {
        props: {
            session,
            userCourses: fetch.data
        }
    };
}

const UserProfile = ({ session, userCourses }: any) => {
    return (
        <div className='flex gap-8 bg-slate-100 p-8 rounded-lg shadow-md'>
            <div>
                <Image
                    className='rounded-md'
                    src={session?.user?.image || ""}
                    width={150}
                    height={150}
                    quality={100}
                    alt='Profile Image' />
            </div>
            <div className='w-full'>
                <b className='text-xl'>{session?.user?.name}</b>
                <hr />
                <div className='pt-6'>
                    <p className='mt-2 text-lg'>E-mail: {session?.user?.email}</p>
                    <p className='mt-2 text-lg'>Acquired courses: <b>{userCourses}</b></p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;