import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import '../src/assets/css/style.css';
import TimeSheet from './components/timeSheet/TimeSheet';
import DayOverview from './components/days/DayOverview';

function App() {
	return (
		<div className='App container'>
			<Header />
			{/* <TimeSheet /> */}
			<DayOverview />
			<Footer />
		</div>
	);
}

export default App;
