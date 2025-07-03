import { techStackData } from "./techStackData";
import { TechStackSection } from "./TechStackSection";
import { Key } from "react";

type Skills = {
  alt: string;
  docs: string;
  icon: string;
}
type Section = {
	title: string;
  skills: Skills[];
};
export const TechStack = () => {
	return (
		<div className='mb-10'>
			<h2 className='font-header text-6xl flex justify-center'>Tech Stack</h2>
			<div className='flex gap-8 justify-center my-8 flex-wrap'>
				{techStackData.map((section: Section, i: Key | null | undefined) => (
					<TechStackSection section={section} key={i} />
				))}
			</div>
		</div>
	);
};
