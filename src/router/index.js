import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '../pages/home'
import Joke from '../pages/joke'
import JokeImg from '../pages/joke-img'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/joke',
      name: 'Joke',
      component: Joke
    },
    {
      path: '/jokeimg',
      name: 'JokeImg',
      component: JokeImg
    }
  ]
})
