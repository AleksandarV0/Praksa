import React from 'react';

import TeamMemberDetails from './TeamMemberDetails';

const AllTeamMembers = () => {
	return (
		<div className='accordion-wrap'>
			{[0, 1, 2].map((example) => (
				<TeamMemberDetails key={Math.random()} />
			))}
		</div>
	);
};

export default AllTeamMembers;
