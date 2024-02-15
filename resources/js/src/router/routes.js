import Home from '@/pages/Home.vue';
import Todo from '@/pages/Todo.vue';
import Axios from '@/pages/Axios.vue';

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/todo-app',
		component: Todo,
	},
	{
		path: '/axios',
		component: Axios,
	},
];

export default routes;