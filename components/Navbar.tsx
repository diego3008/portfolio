import styles from './Logo.module.css';
import { Fragment } from 'react';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export const Navbar = () => {

    const links = [
        {name: 'Github', to: 'https://github.com/diego3008', id: 1},
        {name: 'Linkedin', to: 'https://www.linkedin.com/in/diego-rubalcava/', id: 2}
    ]

    return (
        <nav className="flex justify-between mb-4 items-center w-full h-20 bg-black">
			<div>
				<h1 className="font-medium text-2xl ml-4">Diego Rubalcava</h1>
			</div>

			<ul className="flex">
				{
					links.map(({name, to, id}) => (
						<li key={id} className="px-4 cursor-pointer capitalize font-medium hover:text-gray-500 hover:scale-105 duration-200">
							<Link href={to} passHref>
								{name}
							</Link>
						</li>
					))
				}
			</ul>

		</nav>
        
    )

}