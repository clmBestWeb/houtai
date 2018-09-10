import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Login from '@/views/ '

export default new Router({
    routes: [
        { name: 'login', path: '/login', component: 'Login' }
    ]
});