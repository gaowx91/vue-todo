import Vue from 'vue'
import Vuex from 'vuex'
export const STORAGE_KEY = 'todos-vuejs'
Vue.use(Vuex)

const state = {
	todoList:JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  // todoList: [{
  //     text: 'Hello',
  //     done: false
  //   },
  //   {
  //     text: 'welcome',
  //     done: false
  //   },
  //   {
  //     text: 'China',
  //     done: false
  //   }
  // ],
}

const getters = {
  'todoList': state => state.todoList,
  'allChecked':state => {
  	let c = state.todoList.every(todo => todo.done);
  	// console.log(c);
  	return  c;
  },
}
const actions = {}

const mutations = {
  addTodo: (state, { text }) => {
    if (text) {
      state.todoList.push({
        text,
        done: false
      });
    }
  },
   toggleAll (state, { done }) {
    state.todoList.forEach((todo) => {
      todo.done = done
    })
  },
  toggleTodo(state, { todo }){
  	todo.done = !todo.done
  },
  deleteTodo(state, { todo }){
  	state.todoList.splice(state.todoList.indexOf(todo),1);
  },
  editTodo(state, { todo ,value}){
  	todo.text = value
  },
  clearCompleted(state, { todo}){
    state.todoList = state.todoList.filter(todo => !todo.done)
  },
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
