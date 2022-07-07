import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import LandingPage2 from '../views/LandingPage2.vue'
import ActivityChoose from '../views/ActivityChoose.vue'
import TravelPost from '../views/TravelPost.vue'

const routes = [
    {
        path: '/',
        name: 'landingPage2',
        component: LandingPage2,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/act',
        name: 'act',
        component: ActivityChoose,
    },
    {
        path: '/newtravel',
        name: 'newtravel',
        component: TravelPost,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
