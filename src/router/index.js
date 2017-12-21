import Vue from 'vue'
import Router from 'vue-router'
import Frontpage from '@/components/Frontpage'
import ReviewCreate1 from '@/components/ReviewCreate1'
import ReviewCreate2 from '@/components/ReviewCreate2'
import Review from '@/components/Review'
import ReviewOpen from '@/components/ReviewOpen'
import ReviewAnswered from '@/components/ReviewAnswered'
import ReviewConcluded from '@/components/ReviewConcluded'
import MyReviews from '@/components/MyReviews'
import ReviewsCurrent from '@/components/ReviewsCurrent'
import ReviewsConcluded from '@/components/ReviewsConcluded'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Frontpage',
      component: Frontpage
    },
    {
      path: '/review/create',
      name: 'ReviewCreate1',
      component: ReviewCreate1
    },
    {
      path: '/review/create-part2',
      name: 'ReviewCreate2',
      component: ReviewCreate2
    },
    {
      path: '/review/:sbsys_no',
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
      name: 'ReviewsCurrent',
      component: ReviewsCurrent
    },
    {
      path: '/reviews/concluded',
      name: 'ReviewsConcluded',
      component: ReviewsConcluded
    }
  ]
})
