import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ICourse } from '../../../@types/models/models';
import Methods from '../../api/api';
import Button from '../../components/UI/button';


const MyCourses = () => {
    const [myCourses, setMyCourses] = useState([]);
    useEffect(() => {
        Methods.GetAll(`mycourses`).then((fetch: any) => setMyCourses(fetch.data))
    }, [])

    return (
        <div className='w-full h-96 p-10 bg-slate-100 rounded-md shadow-lg grid grid-cols-4 gap-4'>
            {
                myCourses.map(({ course }: any, index: number) =>
                    <div key={index} className='p-4 bg-slate-50 rounded-lg shadow-md grid grid-cols-1 justify-items-center'>
                        <Image
                            src={course.thumbUrl}
                            alt="Course Icon"
                            width={100}
                            height={100} />
                        <div>
                            <b className='text-lg'>{course.title}</b>
                        </div>
                        <div>
                            <Button description='SEE COURSE' event={() => { alert("Not implemented yet!") }} />
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default MyCourses;