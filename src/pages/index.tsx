import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import Image from 'next/image'
import Button from '../components/UI/button'

const Home: NextPage = () => {
  const router = useRouter();
  const redirectToCoursesPage = () => router.push('courses');

  return (
    <div className='grid grid-cols-2 gap-8 border-2 p-4 rounded-3xl shadow-lg'>
      <div>
        <div>
          <p className='text-xl'>
            With our courses, you will improve your skills to the next level! We have content updated with all new
            technologies and market demands. In our plataform, you will find the best teachers and professionals
            sharing their knowledge to form the best students today. Come check it out now and explore our baggage of knowledge!
          </p>
        </div>
        <div className='pt-10'>
          <Button
            description='GET NOW OUR COURSES TODAY!'
            event={redirectToCoursesPage}
          />
        </div>
      </div>
      <div>
        <div>
          <Image
            className='rounded-md'
            src="/student_img.jpg"
            alt="Studant from our plataform"
            width={450}
            height={450}
          />
        </div>
        <div className='flex justify-between text-md text-blue-300 font-bold'>
          <span>+ 1.212.478 Studants</span>
          <span>+ 305 Courses avaliable</span>
        </div>
      </div>
    </div>
  )
}

export default Home
