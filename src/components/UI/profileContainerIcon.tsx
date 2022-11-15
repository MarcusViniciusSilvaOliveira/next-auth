import React from 'react';
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

interface IProfileContainerIcon {
    userName: string | null | undefined;
    show: boolean;
}

const ProfileContainerIcon = (
    {
        userName,
        show = false
    }: IProfileContainerIcon) => {
    const router = useRouter();
    const profileMenuVisibility = show ? 'visible' : 'invisible';

    return (
        <div className={`
        w-60 h-18 bg-slate-50
        absolute right-0 top-16 
        shadow-md
        rounded-md border border-gray-400 ${profileMenuVisibility}`}
        >
            <p className='p-2 text-sm'>Signed in as <br />
                <b>{userName}</b>
            </p>
            <hr />

            <div
                className='pt-2 pb-2 text-sm hover:cursor-pointer'
                onClick={() => router.push(`/userprofile/`)}>
                <p className='pl-2 hover:bg-gray-400'>Your profile</p>
            </div>
            <div
                className='pb-2 text-sm hover:cursor-pointer'
                onClick={() => router.push(`/courses/mycourses`)}>
                <p className='pl-2 hover:bg-gray-400'>Your courses</p>
            </div>
            <hr />
            <div
                className='pt-2 pb-2 text-sm hover:cursor-pointer'
                onClick={() => signOut()}>
                <p className='pl-2 hover:bg-gray-400'>Sign out</p>
            </div>
        </div>
    );
};

export default ProfileContainerIcon;