import React from 'react';

import ProjectDetails from './ProjectDetails';

const AllProjects = () => {
	return (
		<div className='accordion-wrap projects'>
			{[0, 1, 2].map((example) => (
				<ProjectDetails />
			))}
		</div>
	);
};

export default AllProjects;
