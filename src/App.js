import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import TimeSheetOverview from './components/timeSheet/TimeSheetOverview';
import DayOverview from './components/days/DayOverview';
import ClientsOverview from './components/clients/ClientsOverview';
import ProjectsOverview from './components/projects/ProjectsOverview';
import CategoriesOverview from './components/categories/CategoriesOverview';
import TeamMembersOverview from './components/teamMembers/TeamMembersOverview';
import ReportsOverview from './components/reports/ReportsOverview';
import Blank from './components/blank/Blank';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import Login from './components/login/Login';

import '../src/assets/css/style.css';

function App() {
	return (
		<Router>
			<div className='App container'>
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
					<Route path='/login' exact component={Login} />
					<Route path='/forgot-pass' exact component={ForgotPassword} />
				</Switch>

				{/* <TimeSheetOverview /> */}
				{/* <DayOverview /> */}
				{/* <ClientsOverview /> */}
				{/* <ProjectsOverview /> */}
				{/* <CategoriesOverview /> */}
				{/* <TeamMembersOverview /> */}
				{/* <ReportsOverview /> */}
				{/* <Blank /> */}
				{/* <ForgotPassword /> */}
				{/* <Login /> */}

				<Footer />
			</div>
		</Router>
	);
}

export default App;
