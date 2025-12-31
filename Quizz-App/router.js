const routes = [
    {
        path: '/question/:id',
        name: 'quiz-question',
        component: QuizzComponent,
        props: true
    },
    {
        path: '/',
        redirect: '/question/0' 
    }
];
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});