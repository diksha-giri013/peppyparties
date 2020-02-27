//#region Main Libs
import React, { Suspense, lazy } from 'react';
import { Router, useParams } from '@reach/router';

//#endregion

//#region project components
import Navbar from './components/nav/Navbar';
import Home from './pages/Home';
//#endregion

//#region styles and image resources
import './xstyles/app.css';

//#endregion

//#region lazily loaded components
const User = lazy(() => import('./pages/UserProfile'));
//#endregion

//#region additional components - to be refactored
let Dash = () => <div>Dash</div>;

const Invoice = () => {
	const params = useParams();
	console.log(params);
	return (
		<div>
			{params.invoiceId === '42' ? (
				<h1>
					You've found the answer to Life, universe and everything with Invoice
					id: {params.invoiceId}
				</h1>
			) : (
				<h1>Invoice {params.invoiceId}</h1>
			)}
		</div>
	);
};
//#endregion

export const routes = {
	Home: { name: 'Home', path: '/' },
	Learn: { name: 'Learn', path: '/start-learning' },
	// Build: { name: 'Build', path: '/start-building' },
	Dash: { name: 'Dash', path: '/dash/', requiresAuth: true },
	Toolkit: { name: 'Toolkit', path: '/toolkit/' },
	Feedback: { name: 'Feedback', path: '/feedback/' },
	Studio: { name: 'Studio', path: '/create-forms', requiresAuth: true },
};

function App() {
	//#region hooks and variables

	//#endregion

	return (
		<div className='app'>
			<Navbar />
			<Suspense delay={`50ms`} fallback={<h4>Loading the Cool stuff</h4>}>
				<Router className='pages_container'>
					<Home path='*/' />
					<Dash path='/dashboard' />
					<Invoice path='/invoice/:invoiceId' />
					<User path='/profile' />
				</Router>
			</Suspense>
		</div>
	);
}

export default App;
