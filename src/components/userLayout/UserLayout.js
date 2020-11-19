import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import TimeSheetOverview from '../timeSheet/TimeSheetOverview';
import DayOverview from '../days/DayOverview';
import ClientsOverview from '../clients/ClientsOverview';
import ProjectsOverview from '../projects/ProjectsOverview';
import CategoriesOverview from '../categories/CategoriesOverview';
import TeamMembersOverview from '../teamMembers/TeamMembersOverview';
import ReportsOverview from '../reports/ReportsOverview';
import Blank from '../blank/Blank';

function UserLayout() {
	// layout
	return (
		<>
			<Header />

			<Switch>
				<Route path='/' exact component={TimeSheetOverview} />
				<Route path='/index' exact component={TimeSheetOverview} />
				<Route path='/days/:id' component={DayOverview} />
				<Route path='/clients' exact component={ClientsOverview} />
				<Route path='/projects' exact component={ProjectsOverview} />
				<Route path='/categories' exact component={CategoriesOverview} />
				<Route path='/team-members' exact component={TeamMembersOverview} />
				<Route path='/reports' exact component={ReportsOverview} />
				<Route path='/blank' exact component={Blank} />
			</Switch>

			<Footer />
		</>
	);
}

export default UserLayout;
