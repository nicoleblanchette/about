import { Key } from "react";
import parse from "html-react-parser";

type Props = {
	section: {
		title: string;
		skills: Skill[];
	};
};

type Skill = {
	alt: string;
	docs: string;
	icon: string;
};

export const TechStackSection = ({ section }: Props) => {
	return (
		<div className='card bg-base-100 w-96 border hover:scale-103 transition-all'>
			<div className='card-body flex flex-col items-center '>
				<h3 className='card-title'>{section.title}</h3>
				<div className='flex flex-wrap justify-center'>
					{section.skills.map((skill: Skill, i: Key | null | undefined) => {
						return (
							<div className='p-2' key={i}>
								<a
									href={skill.docs}
									aria-label={skill.alt}
									target='_blank'
									rel='noopener noreferrer'
								>
									{parse(skill.icon)}
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
