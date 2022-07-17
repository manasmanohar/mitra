import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LandingPage from '../views/LandingPage.vue'
import NewPost from '../views/NewPost.vue'
import TravelPost from '../views/TravelPost.vue'
import UserInterests from '../views/UserInterests.vue'
import EventPost from '../views/EventPost'

const routes = [
    {
        path: '/',
        name: 'landingPage',
        component: LandingPage,
    },
    {
        path: '/home',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/newpost',
        name: 'newpost',
        component: NewPost,
    },
    {
        path: '/newtravelPost',
        name: 'newtravelpost',
        component: TravelPost,
    },
    {
        path: '/newinterest',
        name: 'newinterest',
        component: UserInterests,
    },
    {
        path: '/newevent',
        name: 'newevent',
        component: EventPost,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
