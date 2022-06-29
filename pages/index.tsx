import type { NextPage } from 'next'
import { PageLayout } from '../components';
import { Header } from '../components/Header';


const Home: NextPage = () => {
  return (
		<PageLayout title="Diego Rubalcava">
			<main className="main-container relative min-h-[100vh] pl-[0.45rem] pr-[0.45rem] sm:pl-0 sm:pr-0">
				<Header/>
			</main>
		</PageLayout>
	);
}

export default Home
