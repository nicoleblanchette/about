import Image from "next/image";
import { TechStack } from "./TechStack";
import { Timeline } from "./Timeline";
import Me from '../../media/me.jpg'

export const About = () => {
	return (
		<div className='flex flex-col items-center scroll-m-20' id='about'>
			<div className='flex flex-col items-center mx-10 text-center'>
				<h1 className='font-header text-7xl font-extralight'>
					Hello, I&apos;m <span className='font-semibold'>Nicole Blanchette.</span>
				</h1>
				<p className='italic'>
					...A Full-Stack Web Developer specializing in the MERN/PERN tech
					stacks. I have a passion for developing quality code through design,
					QA, and accessibility solutions.
				</p>
			</div>
      <div className='flex gap-8 m-8 justify-center w-2/3 flex-wrap'>
        <div className="">
				<Image
					src={Me}
					alt='Headshot of Nicole'
            className='max-h-64 max-w-64 border-1 rounded-md border-base-content'
          />
          </div>
				<Timeline />
			</div>

			<TechStack />
		</div>
	);
};
