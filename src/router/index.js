import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import addUser from '@/components/addUser'
import allContact from '@/components/allContact'
import editUser from '@/components/editUser'
import Weather from '@/components/Weather'

Vue.use(Router)

let router = new Router({
  routes:[
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/addUser',
      name: 'AddUser',
      component: addUser
    },
    {
      path: '/editUser',
      name: 'editUser',
      component: editUser,
      props: true
    },
    {
      path: '/allContact',
      name: 'allContact',
      component: allContact,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/weather/:cityname',
      name: 'Weather',
      component: Weather,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => { 
  let currentUser = firebase.auth().currentUser 
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth) 
  if (requiresAuth && !currentUser) { 
  next('login') 
  } else if (!requiresAuth && currentUser) { 
  next('allContact') 
  } else { 
  next() 
  } 
  })

export default router