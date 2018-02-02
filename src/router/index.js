import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Overview from '@/components/Overview'
import ReviewCreate from '@/components/ReviewCreate'
import ReviewEdit from '@/components/ReviewEdit'
import Review from '@/components/Review'
import ReviewOpen from '@/components/ReviewOpen'
import ReviewAnswered from '@/components/ReviewAnswered'
import ReviewConcluded from '@/components/ReviewConcluded'
import MyReviews from '@/components/MyReviews'
import ReviewsInProgress from '@/components/ReviewsInProgress'
import ReviewsConcluded from '@/components/ReviewsConcluded'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/overview',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/review/create',
      name: 'ReviewCreate',
      component: ReviewCreate
    },
    {
      path: '/review/:id/edit',
      name: 'ReviewEdit',
      component: ReviewEdit
    },
    {
      path: '/review/:id',
      name: 'Review',
      component: Review
    },
    {
      path: '/review/open',
      name: 'ReviewOpen',
      component: ReviewOpen
    },
    {
      path: '/review/answered',
      name: 'ReviewAnswered',
      component: ReviewAnswered
    },
    {
      path: '/review/concluded',
      name: 'ReviewConcluded',
      component: ReviewConcluded
    },
    {
      path: '/reviews/mine',
      name: 'MyReviews',
      component: MyReviews
    },
    {
      path: '/reviews/current',
      name: 'ReviewsInProgress',
      component: ReviewsInProgress
    },
    {
      path: '/reviews/concluded',
      name: 'ReviewsConcluded',
      component: ReviewsConcluded
    }
  ]
})
