import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Achievement from '@/views/Achievement'
import Work from '@/views/Work'
import Research from '@/views/Research'
import Serve from '@/views/Serve'
import ContactUs from '@/views/ContactUs'
import Team from '@/views/Team'
import SoftwareDetail from '@/views/SoftwareDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
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
    {
      path: '/softwareDetail',
      name: 'SoftwareDetail',
      component: SoftwareDetail
    },
  ]
})
