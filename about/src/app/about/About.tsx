import Image from "next/image";
import { TechStack } from "./TechStack";
import { Timeline } from "./Timeline";

export const About = () => {
	return (
		<div className='flex flex-col items-center scroll-m-20' id='about'>
			<div className='flex flex-col items-center'>
				<h1 className='font-header text-7xl font-extralight'>
					Hello, I$apos;m <span className='font-semibold'>Nicole Blanchette.</span>
				</h1>
				<p className='italic'>
					...A Full-Stack Web Developer specializing in the MERN/PERN tech
					stacks. I have a passion for developing quality code through design,
					QA, and accessibility solutions.
				</p>
			</div>
			<div className='flex gap-8 m-8 justify-center w-2/3 flex-wrap'>
				<Image
					src={"me.jpg"}
					alt='Headshot of Nicole'
					className='max-h-64 border rounded-md'
				/>
				<Timeline />
			</div>

			<TechStack />
		</div>
	);
};
