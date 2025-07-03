import { ProjectCard } from "./ProjectCard";
import { projects} from "./ProjectData"

export const ProjectsList = () => {
	return (
		<div className='flex justify-around m-6 flex-wrap gap-1'>
			{projects.map((project, i) => (
				<ProjectCard key={i} project={project} />
      ))}
   
		</div>
	);
};
