import React from 'react';

import ProjectFunctions from './ProjectFunctions';
import AlphabeticalFilter from '../common/AlphabeticalFilter';
import AllProjects from './AllProjects';
import Pagination from '../common/Pagination';

const ProjectsOverview = () => {
	return (
		<div className='wrapper'>
			<section className='content'>
				<h2>
					<i className='ico projects'></i>Projects
				</h2>
				<ProjectFunctions />
				<AlphabeticalFilter />
				<AllProjects />
				<Pagination />
			</section>
		</div>
	);
};

export default ProjectsOverview;
