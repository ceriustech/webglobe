import React from 'react';
import { Link } from 'react-router-dom';
import NavigationListItems from './NavigationListItems';
import { navItems } from '../../data/NavData';

const NavigationContainer = () => {
	const navigation = navItems
		.filter((item) => {
			return item.linkName !== 'CollarBlue';
		})
		.map((item, index) => <NavigationListItems data={item} key={index} />);

	return (
		<nav className="navbar">
			<ul>{navigation}</ul>
		</nav>
	);
};

export default NavigationContainer;
