import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import LandingPage from '../views/LandingPage.vue'
import ActivityChoose from '../views/ActivityChoose.vue'
import TravelPost from '../views/TravelPost.vue'

const routes = [
    {
        path: '/',
        name: 'landingPage',
        component: LandingPage,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/newactivity',
        name: 'newactivity',
        component: ActivityChoose,
    },
    {
        path: '/newtravel',
        name: 'newtrave',
        component: TravelPost,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
