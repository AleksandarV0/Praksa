import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
// import TimeSheetOverview from './components/timeSheet/TimeSheetOverview';
// import DayOverview from './components/days/DayOverview';
// import ClientsOverview from './components/clients/ClientsOverview';
// import ProjectsOverview from './components/projects/ProjectsOverview';
// import CategoriesOverview from './components/categories/CategoriesOverview';
// import TeamMembersOverview from './components/teamMembers/TeamMembersOverview';
// import ReportsOverview from './components/reports/ReportsOverview';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import Login from './components/login/Login';
import UserLayout from './components/userLayout/UserLayout';

import '../src/assets/css/style.css';

function App() {
	return (
		<Router>
			<div className='App container'>
				<Switch>
					<Route path='/login' exact component={Login} />
					<Route path='/forgot-pass' exact component={ForgotPassword} />
					<Route path='/' component={UserLayout} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
