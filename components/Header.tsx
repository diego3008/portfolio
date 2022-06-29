import Link from "next/link";
import { useEffect } from "react";

export const Header = () => {
    

    return (
    <div
      
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="animate__animated animate__fadeInLeft text-4xl sm:text-7xl font-bold text-white">
            I'm a Software Engineering Student
          </h2>
          <p className="animate__animated animate__fadeInUp text-gray-500 py-4 max-w-md animate">
            I've been studying a Software Engineering bachellor since 2019.
            Currently, I'm trying to learn new technologies and improve my
            skills for solving Computer Science problems. I love to work on
            web applications using frameworks like Ruby on Rails and Next jS
          </p>

        </div>

        <div>
          <img
            src="https://images2.imgbox.com/f7/88/k3Ch7Umq_o.jpeg"
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full animate__animated animate__fadeIn animate__delay-1s"
          />
        </div>
      </div>
    </div>
    )

}