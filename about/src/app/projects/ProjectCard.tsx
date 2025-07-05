import Image, { StaticImageData } from "next/image";

type Props = {
	project: {
		name: string;
		description: string;
		coverImg: StaticImageData;
		coverImgAlt: string;
		githubLink: string;
		deployment: string;
	};
};
export const ProjectCard = ({ project }: Props) => {
	return (
		<div className='card bg-base-100 w-96 my-5 rounded-1 border-1 hover:scale-103 transition-all'>
			<figure>
				<Image
					className='border-b-1 object-cover h-70 w-full border-base-content' //replace with next Image
					src={project.coverImg}
          alt={project.coverImgAlt}
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{project.name}</h2>
				<p>{project.description}</p>
				<div className='card-actions justify-end'>
					<a
						href={project.githubLink}
						target='_blank'
						rel='noopener noreferrer'
					>
						<button className='btn btn-primary btn-outline' aria-label="View GitHub">
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width={24}
								height={24}
                viewBox='0 0 24 24'
    
							>
								<path
									fill='currentColor'
									d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2'
								></path>
							</svg>
						</button>
					</a>

					<a
						href={project.deployment}
						target='_blank'
						rel='noopener noreferrer'
					>
						<button className='btn btn-primary btn-outline' aria-label="View Live Deployment">
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
							>
								<path
									fill='currentColor'
									d='M15.729 3.884c1.434-1.44 3.532-1.47 4.693-.304c1.164 1.168 1.133 3.28-.303 4.72l-2.423 2.433a.75.75 0 0 0 1.062 1.059l2.424-2.433c1.911-1.919 2.151-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.819 7.692c-1.911 1.919-2.151 4.982-.303 6.837a.75.75 0 1 0 1.063-1.058c-1.164-1.168-1.132-3.28.303-4.72z'
								/>
								<path
									fill='currentColor'
									d='M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.133 3.279-.303 4.72l-4.847 4.866c-1.435 1.44-3.533 1.47-4.694.304c-1.164-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 0 0-1.063-1.059l-2.424 2.433c-1.911 1.92-2.151 4.982-.303 6.838c1.85 1.858 4.907 1.615 6.82-.304l4.847-4.867c1.911-1.918 2.151-4.982.303-6.837'
								/>
							</svg>
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};
