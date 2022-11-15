import React, { useState } from 'react';
import Image from 'next/image';
import ProfileContainerIcon from './profileContainerIcon';

interface IUserIcon {
    image: string | null | undefined;
    name: string | null | undefined;
}

const UserIcon = ({
    name,
    image
}: IUserIcon) => {
    const [showProfile, setShowProfile] = useState<boolean>(false);

    return (
        <div>
            <Image
                className='rounded-full hover:cursor-pointer'
                src={`${image}`}
                alt="Picture of the author"
                width={50}
                height={50}
                onClick={() => setShowProfile((state) => !state)} />
            <ProfileContainerIcon
                userName={name}
                show={showProfile} />
        </div>
    );
};

export default UserIcon;