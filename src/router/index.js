import Vue from 'vue'
import Router from 'vue-router'
import chat from '@/components/chat'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/',
      name: 'Todo',
      component: Todo
    },
  ]
})
