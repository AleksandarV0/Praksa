import React from 'react';

import TeamMemberFunctions from './TeamMemberFunctions';
import Pagination from '../common/Pagination';
import AllTeamMembers from './AllTeamMembers';

const TeamMembersOverview = () => {
	return (
		<div className='wrapper'>
			<section className='content'>
				<h2>
					<i className='ico team-member'></i>Team members
				</h2>
				<TeamMemberFunctions />
				<AllTeamMembers />
				<Pagination />
			</section>
		</div>
	);
};

export default TeamMembersOverview;
