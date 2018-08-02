import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '@/login.vue'
import main from '@/components/main.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/main',
            name: 'main',
            component: main
        }
    ]
})