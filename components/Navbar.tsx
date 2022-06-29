import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Logo.module.css';
import { Fragment } from 'react';
import { Button } from '@nextui-org/react';

export const Navbar = () => {

    const links = [
        {name: 'Contact', to: '/contact', id: 1},
        {name: 'Gallery', to: '/gallery', id: 2},
        {name: 'About', to: '/about', id: 3}
    ]

    return (
        <nav className="px-3 sm:px-4 py-2.5">
			<div className="container flex justify-center items-center mx-auto">
				
				<div className="hidden sm:flex">
					{links.map(({ name, to, id }) => (
						<Fragment key={id}>
							<Link href={to} passHref>
								<ul className="flex flex-col mt-4 xl:text-[1rem] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
									<li className="block py-2 pr-4 pl-3 hover:text-gray-400 cursor-pointer">
										{name}
									</li>
								</ul>
							</Link>
						</Fragment>
					))}
				</div>
				
			</div>
		</nav>
        
    )

}