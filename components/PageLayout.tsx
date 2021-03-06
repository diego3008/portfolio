import type { ReactElement } from "react";
import Head from 'next/head';

type Props = {
    children: JSX.Element | JSX.Element[];
    title: string;
}

export const PageLayout = ({ children, title }: Props): ReactElement => {
    return (
		<>
			<Head>
				<title>{title}</title>
				<meta
					name="description"
					content="This is where you can know me better "
				/>
				<link rel="icon" href="favicon.ico" />
			</Head>
			<main>{children}</main>
		</>
	);
}