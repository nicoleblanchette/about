import { TechStack } from "./TechStack";
import { Timeline } from "./Timeline";

export const About = () => {
	return (
		<div className="flex flex-col items-center">
			<div className='flex flex-col items-center'>
				<h1 className='font-header text-7xl font-extralight'>
					Hello, I'm <span className='font-semibold'>Nicole Blanchette.</span>
				</h1>
				<p className='italic'>
					...A Full-Stack Web Developer specializing in the MERN/PERN tech
					stacks. I have a passion for developing quality code through design,
					QA, and accessibility solutions.{" "}
				</p>
			</div>
			<div className='flex gap-8 m-8 justify-center w-2/3 flex-wrap'>
				<img
					src={
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsite-547756.mozfiles.com%2Ffiles%2F547756%2Fmedium%2Fcatoutside.jpeg&f=1&nofb=1&ipt=b2e0d51c29f7114320c92a7cbb63ddcdde678f08fe187ac18f4e88c50780fb0c"
					}
					className="max-h-64 border rounded-md"
				/>
				<Timeline />
			</div>

	
      <TechStack />
		</div>
	);
};
