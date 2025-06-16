import { timelineData } from "./timelineData";
export const Timeline = () => {
	return (
		<ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-compact'>
			{timelineData.map((role, i) => {
				return (
					<li key={i}>
						{role.title !==
							"Senior Associate Software Engineer" && <hr className="bg-primary" />}
						<div className='timeline-middle'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='h-5 w-5'
							>
								<path
									fillRule='evenodd'
									d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
									clipRule='evenodd'
								/>
							</svg>
						</div>
						<div className='timeline-end md:mb-10'>
              <time className='font-mono italic'>{role.time}</time>
							<div className='text-lg font-black flex gap-1'>
                {role.title}{role.company && <p className="font-normal italic">@ {role.company}</p>}
							</div>
							The Apple Macintosh—later rebranded as the Macintosh 128K—is the
							original Apple Macintosh personal computer. It played a pivotal
							role in establishing desktop publishing as a general office
							function. The motherboard, a 9 in (23 cm) CRT monitor, and a
							floppy drive were housed in a beige case with integrated carrying
							handle; it came with a keyboard and single-button mouse.
						</div>
						{role.company !== "The Marcy Lab School" && <hr className="bg-primary"/>}
					</li>
				);
			})}
		</ul>
	);
};
