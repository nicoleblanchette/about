import { Navbar } from "./nav/Navbar";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Footer } from "./footer/Footer";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className='transition-all'>
				<About />
				<Projects />
				<Footer />
			</main>
		</>
	);
}
