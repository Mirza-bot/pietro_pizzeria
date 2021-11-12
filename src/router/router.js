import { createRouter, createWebHistory} from 'vue-router'

import  StartPage  from '../components/StartPage.vue'
import  Menu  from '../components/Menu.vue'
import  Reservations  from '../components/Reservations.vue'
import  Gallery  from '../components/Gallery.vue'
import  NotFound  from '../components/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/main' }, 
        { path: '/main', component: StartPage },
        { path: '/menu', component: Menu },
        { path: '/reservation', component: Reservations },
        { path: '/gallery', component: Gallery },
        { path: '/:notFound(.*)', component: NotFound },         
    ],
})

export default router