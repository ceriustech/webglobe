import HomePage from '../pages/Home';
import WorkspacePage from '../pages/Workspace';
import FaqPage from '../pages/Faq';

export const navItems = [
	{
		linkName: 'home',
		component: HomePage,
		path: '/',
		subNav: [
			{
				subLinkName: 'Sub Link 1',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 2',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 3',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 4',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
		],
	},
	{
		linkName: 'workspace',
		component: WorkspacePage,
		path: '/workspace',
		subNav: [
			{
				subLinkName: 'Sub Link 1',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 2',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 3',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 4',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
		],
	},
	{
		linkName: 'faq',
		component: FaqPage,
		path: '/faq',
		subNav: [
			{
				subLinkName: 'Sub Link 1',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 2',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 3',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 4',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
		],
	},
	// {
	// 	linkName: 'Sign up',
	// 	component: Signup,
	// 	path: '/register',
	// 	subNav: [
	// 		{
	// 			subLinkName: 'Sub Link 1',
	// 			path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
	// 		},
	// 		{
	// 			subLinkName: 'Sub Link 2',
	// 			path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
	// 		},
	// 		{
	// 			subLinkName: 'Sub Link 3',
	// 			path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
	// 		},
	// 		{
	// 			subLinkName: 'Sub Link 4',
	// 			path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
	// 		},
	// 	],
	// },
	// {
	// 	linkName: 'Login',
	// 	component: Login,
	// 	path: '/login',
	// 	subNav: [
	// 		{
	// 			subLinkName: 'Sub Link 1',
	// 			path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
	// 		},
	// 		{
	// 			subLinkName: 'Sub Link 2',
	// 			path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
	// 		},
	// 		{
	// 			subLinkName: 'Sub Link 3',
	// 			path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
	// 		},
	// 		{
	// 			subLinkName: 'Sub Link 4',
	// 			path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
	// 		},
	// 	],
	// },
];
