import react from '../public/react.png'
import javascript from '../public/Documentacion.png';
import reactimg from '../public/react.png';
import nextimg from '../public/nextjs.png';
import tw from '../public/tailwind.png';
import rails from '../public/rails.png';
import Node from '../public/node.png';
import Image from 'next/image';

export const TechStack = () => {

    const techs = [
        {id: 1, src: javascript, title:"JavaScript", style: "shadow-yellow-500"},
        {id: 2, src: reactimg, title:"React", style: "shadow-blue-500"},
        {id: 3, src: nextimg, title:"NextJS", style: "shadow-gray-300"},
        {id: 4, src: tw, title:"Tailwind Css", style: "shadow-cyan-500"},
        {id: 5, src: rails, title:"Ruby on Rails", style: "shadow-red-700"},
        {id: 6, src: Node, title:"Node JS", style: "shadow-green-500"},


      ];

    return (
        <div
          className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                Experience
              </p>
              <p className="py-6">These are the technologies I have worked with</p>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <Image src={src.src} alt="" className="w-20 mx-auto animate__animated animate__fadeIn" width="80px" height="100vh"/>
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

}