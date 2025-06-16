export const TechStack = () => {
	return (
		<>
			{" "}
			<h2 className='font-header text-6xl font-extralight flex justify-center'>
				Tech Stack
			</h2>
			<div className='flex gap-8 justify-center my-8 '>
				<div className='card bg-base-100 w-96 border hover:scale-103 transition-all'>
					<div className='card-body '>
						<h2 className='card-title'>Languages & Databases</h2>
						<p>
							A card component has a figure, a body part, and inside body there
							are title and actions parts
						</p>
					</div>
				</div>
				<div className='card bg-base-100 w-96 border'>
					<div className='card-body'>
						<h2 className='card-title'>Frameworks & Libraries</h2>
						<p>
							A card component has a figure, a body part, and inside body there
							are title and actions parts
						</p>
					</div>
				</div>
				<div className='card bg-base-100 w-96 border'>
					<div className='card-body'>
						<h2 className='card-title'>Testing & Tools</h2>
						<p>
							A card component has a figure, a body part, and inside body there
							are title and actions parts A card component has a figure, a body
							part, and inside body there are title and actions parts
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
