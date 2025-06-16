import Image from "next/image";
import { Navbar } from "./nav/Navbar";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Contact } from "./contact/Contact";
import { Footer } from "./footer/Footer";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className='ms-6 transition-all'>
				<About />
				<Projects />
				<Contact />
				<Footer />
			</main>
		</>
	);
}
