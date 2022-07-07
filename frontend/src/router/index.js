import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
<<<<<<< Updated upstream
import Login from '../views/LoginPage.vue'
=======
import LandingPage2 from '../views/LandingPage2.vue'
import ActivityChoose from '../views/ActivityChoose.vue'
import TravelPost from '../views/TravelPost.vue'
>>>>>>> Stashed changes

const routes = [
    {
        path: '/',
<<<<<<< Updated upstream
        name: 'login',
        component: Login,
=======
        name: 'landingPage2',
        component: LandingPage2,
>>>>>>> Stashed changes
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
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
