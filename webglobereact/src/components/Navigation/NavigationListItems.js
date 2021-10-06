import React from 'react';
import { Link } from 'react-router-dom';
// import '../../Styles/NavigationListItems.Styles.scss';

const NavigationListItems = ({ data }) => {
	return (
		<Link to={data.path} className="nav-item">
			{data.linkName}
		</Link>
	);
};

export default NavigationListItems;
