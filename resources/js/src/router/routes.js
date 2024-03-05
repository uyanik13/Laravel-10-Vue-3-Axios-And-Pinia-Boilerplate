import Home from '@/pages/Home.vue';
import Success from '@/pages/Success.vue';

const routes = [
	{
		path: '/',
		component: Home,
		name:'home-page'
	},
	{
		path: '/success',
		component: Success,
		name:'success-page'
	},
];

export default routes;