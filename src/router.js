import Vue from 'vue';
import Router from 'vue-router';
import HomeComponent from '@/components/HomeComponent';
import AboutComponent from '@/components/AboutComponent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeComponent,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutComponent,
    },
  ],
});
