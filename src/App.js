import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/login/Login';
import UserLayout from './components/userLayout/UserLayout';
import ForgotPassword from './components/forgotPassword/ForgotPassword';

import './App.css';
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
