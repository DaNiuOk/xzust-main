import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Achievement from '@/components/Achievement'
import Work from '@/components/Work'
import Research from '@/components/Research'
import Serve from '@/components/Serve'
import ContactUs from '@/components/ContactUs'
import Team from '@/components/Team'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/achievement',
      name: 'Achievement',
      component: Achievement
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/research',
      name: 'Research',
      component: Research
    },
    {
      path: '/serve',
      name: 'Serve',
      component: Serve
    },
    {
      path: '/contactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
  ]
})
