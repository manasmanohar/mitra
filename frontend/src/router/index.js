import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LandingPage from '../views/LandingPage.vue'
import NewPost from '../views/NewPost.vue'
import TravelPost from '../views/TravelPost.vue'
import UserInterests from '../views/UserInterests.vue'
import EventPost from '../views/EventPost'
import LandingPage3 from '../views/LandingPage3.vue'
import UserMessages from '../views/UserMessages.vue'

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
        props: true,
    },
    {
        path: '/newtravel',
        name: 'newtravelpost',
        component: TravelPost,
        props: true,
    },
    {
        path: '/newinterest',
        name: 'newinterest',
        component: UserInterests,
        props: true,
    },
    {
        path: '/newevent',
        name: 'newevent',
        component: EventPost,
        props: true,
    },
    {
        path: '/land',
        name: 'land',
        component: LandingPage3,
    },
    {
        path: '/messages',
        name: 'messages',
        component: UserMessages,
        props: true,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
