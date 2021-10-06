import { Switch, Route } from 'react-router-dom';
import { navItems } from './data/NavData';
import NavigationContainer from './components/Navigation/NavigationContainer';
import './App.css';

const App = () => {
	const pageComponentArray = navItems.map(({ path, component }, key) => (
		<Route exact path={path} component={component} key={key} />
	));

	return (
		<div className="App">
			<NavigationContainer />
			<Switch>{pageComponentArray}</Switch>
		</div>
	);
};

export default App;
