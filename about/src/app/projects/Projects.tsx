import { ProjectsList } from "./ProjectsList";

export const Projects = () => {
	return (
		<div id="projects" className="scroll-m-20">
			<h2 className='font-header text-6xl flex justify-center'>Projects</h2>
			<ProjectsList />
		</div>
	);
};
