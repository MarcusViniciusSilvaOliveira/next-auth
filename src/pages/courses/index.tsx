import React from 'react';

import Image from 'next/image'
import { useRouter } from 'next/router';

import Button from '../../components/UI/button';
import { ICourse } from '../../../@types/models/models';

import Methods from '../../api/api';
import { priceFormat } from '../../helper/formaters';
import { ICourses } from '../../../@types/api/courses';

export async function getServerSideProps(context: any) {
    const { req } = context;
    const fetch = await Methods.GetAll('courses',
        {
            headers: {
                Cookie: req.headers.cookie
            }
        });

    const data: ICourse[] = fetch.data;
    return {
        props: {
            data
        }
    }
}

interface ICoursesPage {
    data: ICourses[];
}
const Index = ({ data }: ICoursesPage) => {

    const router = useRouter();
    const acquireCourse = async (courseId: any) => {
        const data = {
            courseId: courseId
        };
        Methods.Create('usercourses', data)
            .then(res => router.reload())
            .catch(({ response }) => {
                if (response.status === 403) {
                    router.push('/login')
                }
            });
    }

    const renderButton = (course: ICourses) => {
        const PurchasedClassButton = 'bg-green-200 text-sm shadow-md rounded-3xl pl-3 pr-3 pt-1 pb-1 text-gray-600 transition-all hover:bg-green-50';

        if (course.purchased === '1')
            return (
                <div className='flex gap-4'>
                    <b className='text-lg'>Purchased</b>
                    <Button
                        className={PurchasedClassButton}
                        description='GO TO COURSE' event={() => { router.push('/courses/mycourses') }} />
                </div>
            )
        return (
            <div className='flex gap-4'>
                <b className='text-lg'>{priceFormat(course.price)}</b>
                <Button description='GET COURSE' event={() => acquireCourse(course.id)} />
            </div>
        )
    }

    return (
        <div>
            {data.map((course: ICourses, index: number) => {
                const classRandomized = `flex mt-8 mb-8 gap-4 shadow-md p-4 rounded-lg 
                ${index % 2 === 0 ? 'bg-gradient-to-r from-slate-100 to-slate-200' : 'bg-gradient-to-r from-blue-50 to-blue-100'}`;
                return (
                    <div
                        key={index}
                        className={classRandomized}
                    >
                        <div>
                            <Image
                                src={course.thumbUrl}
                                alt="Vercel Icon"
                                width={200}
                                height={200} /></div>
                        <div className='w-full'>
                            <b className='text-xl'>{course.title}</b>
                            <hr className='mt-1 mb-1' />
                            <p>{course.description}</p>
                            <br />
                            {renderButton(course)}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Index;