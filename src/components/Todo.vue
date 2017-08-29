<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input autofocus="autofocus" placeholder="What needs to be done?" class="new-todo" v-model="newTodo" @keyup.enter="addTodo({text:newTodo})">
    </header>
    <section class="main" v-show="todoList.length">
      <input type="checkbox" class="toggle-all" id="toggle-all" :checked="allChecked" @change="toggleAll({'done':!allChecked})"> 
      <label for="toggle-all"></label>
      <ul class="todo-list">
        <todoLi v-for="(todo, index) in filteredTodos" :key="index" :todo="todo"></todoLi>
        <!-- <li class="todo">
          <div class="view">
            <input type="checkbox" class="toggle">
            <label>{{todo}}</label>
          </div>
        </li> -->
      </ul>
    </section>
    <footer class="footer" v-show="todoList.length">
      <span class="todo-count">
        <strong>{{remaining}}</strong>
        {{ remaining | pluralize('item') }} left
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters">
          <a :href="'#/' + key"
            :class="{ selected: visibility === key }"
            @click.prevent="visibility = key">{{ key | capitalize }}</a>
        </li>
      </ul>
      <button class="clear-completed" style="display:none" v-show="todoList.length > remaining" @click="clearCompleted">
        Clear-completed
      </button>
    </footer>
  </section>
</template>
<script>
import todoLi from './todoLi.vue'
import { mapGetters , mapMutations} from 'vuex'
const filters ={
  'all':todoList=>todoList,
  'active':todoList=>todoList.filter(todo => !todo.done),
  'completed':todoList=>todoList.filter(todo => todo.done),
}
export default {
  // name: 'todomvc',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      newTodo:'6666',
      visibility: 'all',
      filters:filters,
    }
  },
  components:{
    todoLi
  },
  created(){
    document.title = 'gaowx todomvc example';
  },
  computed:{
    ...mapGetters([
      'todoList',
      'allChecked'
      ]),
    remaining:function(){
      return this.todoList.filter(todo=>todo.done == false).length;
    },
    filteredTodos () {
      return filters[this.visibility](this.todoList)
    },
  },
  methods:{
    ...mapMutations([
      'addTodo',
      'toggleAll',
      'clearCompleted',
      ]),
  },
  filters: {
    pluralize: (n, w) => {return n <= 1 ? w : (w + 's')},
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
}
</script>
<!-- <style src="../../static/todoapp.css"></style> -->
<style>
  body{
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #F5F5F5;
    max-width: 550px;
    margin: 0 auto;
    font-weight: 300;
  }
  input{outline:none} 
  .todoapp{
    background-color: #fff;
    /*border:none;*/
    position:relative;
    margin:130px 0 40px 0;
  }
  .todoapp h1{
    position: absolute;
    top:-200px;
    width:100%;
    text-align: center;
    font-size: 100px;
    font-weight: 100;
    color:rgba(175, 47, 47, 0.15);
  }
  .new-todo,
  .edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .new-todo {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  }
  .main{
    position: relative;
    border-top: 1px solid #e6e6e6;
  }
  .toggle-all{
    opacity: 0;
    position: absolute;
  }
  .toggle-all + label{
    position: absolute;
    font-size: 0;
    webkit-transform: rotate(90deg);
    transform:rotate(90deg);
    top: -45px;
    left:17px;
  }
  .toggle-all + label:before{
    content: '\276F';
    font-size: 22px;
    color: #e6e6e6;
  }
  .todo-list{
    margin:0;
    padding:0;
    list-style:none;
  }
  .todo-list li{
    position: relative;
    font-size:24px;
    border-bottom: 1px solid #ededed;
  }
   /* .todo-list li .toggle + label {
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%2…none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: center left;
  }*/
  /* .todo-list li label{
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }*/
  /*.todo-list li .toggle{
    height:40px;
    background: none; 
     position: absolute;
    top: 5px;
    bottom: 0;
    width: 50px;
  }*/
 /* .todo-list li .toggle {
  text-align: center;
  width: 40px;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none; 
  -webkit-appearance: none;
  appearance: none;
 }*/
  .footer{
    color:#777;
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
  }
  .todo-count {
    float: left;
    text-align: left;
  }
  .footer:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
.filters{
       margin: 0; 
     padding: 0; 
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;
}
.filters li {
    display: inline;
}
.filters li a{
  text-decoration: none;
  color:inherit;
  padding:3px 7px;
      margin: 3px;
          border: 1px solid transparent;
          border-radius: 3px;
}
.filters li a.selected{
      border-color: rgba(175, 47, 47, 0.2);
}
.todo-list li.completed label {
  color: #d9d9d9;
  text-decoration: line-through;
}

.todo-list li .destroy {
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
}

.todo-list li .destroy:hover {
  color: #af5b5e;
}

.todo-list li .destroy:after {
  content: '×';
}

.todo-list li:hover .destroy {
  display: block;
}
button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.todo-list li.editing {
  border-bottom: none;
  padding: 0;
}

.todo-list li.editing .edit {
  display: block;
  width: 506px;
  padding: 12px 16px;
  margin: 0 0 0 43px;
}

.todo-list li.editing .view {
  display: none;
}
.todo-list li .edit {
  display: none;
}

.todo-list li.editing:last-child {
  margin-bottom: -1px;
}
.todoapp input::-webkit-input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.todoapp input::-moz-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.todoapp input::input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.clear-completed,
html .clear-completed:active {
  float: right;
  position: relative;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
}

.clear-completed:hover {
  text-decoration: underline;
}

.todo-list li .toggle {
  text-align: center;
  width: 40px;
  /* auto, since non-WebKit browsers doesn't support input styling */
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none; /* Mobile Safari */
  -webkit-appearance: none;
  appearance: none;
}

.todo-list li .toggle {
  opacity: 0;
}

.todo-list li .toggle + label {
  /*
    Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
    IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
  */
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: center left;
}

.todo-list li .toggle:checked + label {
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
}

.todo-list li label {
  word-break: break-all;
  padding: 15px 15px 15px 60px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
}

</style>