import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import yo from '../public/yo.jpeg'

export const Header = () => {
    

    return (
    <div
      
      className="sm:h-screen w-full bg-gradient-to-b from-black via-black mt-6 to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="animate__animated animate__fadeInLeft text-4xl sm:text-7xl font-bold text-white">
            I&rsquo;m Diego Rubalcava: Software Engineering Student
          </h2>
          <p className="animate__animated animate__fadeInUp text-gray-500 py-4 max-w-md animate">
            I&rsquo;ve been studying a Software Engineering bachelor since 2019.
            Currently, I am trying to learn new technologies and i want to improve my
            skills for solving Computer Science problems. I love to work on
            web applications using frameworks like Ruby on Rails and Next JS.
          </p>

        </div>

        <div className='hover:scale-105 duration-500'>
          <Image
            src={yo}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full animate__animated animate__fadeIn animate__delay-1s"
            width="900px"
            height="1300px"
          />
        </div>
      </div>
    </div>
    )

}