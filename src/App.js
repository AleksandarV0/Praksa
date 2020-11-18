import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import '../src/assets/css/style.css';
import TimeSheet from './components/timeSheet/TimeSheet';
import DayOverview from './components/days/DayOverview';
import ClientsOverview from './components/clients/ClientsOverview';
import ProjectsOverview from './components/projects/ProjectsOverview';
import CategoriesOverview from './components/categories/CategoriesOverview';
import TeamMembersOverview from './components/teamMembers/TeamMembersOverview';
import ReportsOverview from './components/reports/ReportsOverview';

function App() {
	return (
		<div className='App container'>
			<Header />
			{/* <TimeSheet /> */}
			{/* <DayOverview /> */}
			{/* <ClientsOverview /> */}
			{/* <ProjectsOverview /> */}
			{/* <CategoriesOverview /> */}
			{/* <TeamMembersOverview /> */}
			<ReportsOverview />
			<Footer />
		</div>
	);
}

export default App;
