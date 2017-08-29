<template>
	 <li class="todo" :class="{ completed: todo.done, editing: editing }">
          <div class="view">
            <input type="checkbox" class="toggle" :checked="todo.done" @change="toggleTodo({todo:todo})">
            <label @dblclick="editing = true">{{todo.text}}</label>
            <!-- <button class="destroy" @click="deleteTodo({ todo: todo })"></button> -->
          </div>
          <input class="edit" v-show="editing" :value="todo.text" @keyup.enter="doneEdit" @keyup.esc="cancelEdit"
						 @blur="doneEdit" v-focus="editing">
        </li>
</template>
<script>
	import { mapMutations } from 'vuex'
	export default{
		name:'todoli',
		props:['todo'],
		data(){
			return{
				editing: false
			};
		},
		directives: {
		    focus (el, { value }, { context }) {
		      if (value) {
		        context.$nextTick(() => {
		          el.focus()
		        })
		      }
		    }
		},
		methods:{
			...mapMutations([
				'toggleTodo',
				'deleteTodo',
				'editTodo'
			]),
			'doneEdit':function(e){
				const value = e.target.value.trim()
		        const { todo } = this
			      if (!value) {
			        this.deleteTodo({
			          todo
			        })
			      } else if (this.editing) {
			        this.editTodo({
			          todo,
			          value
			        })
			        this.editing = false
			    }
			},
		    cancelEdit (e) {
		      e.target.value = this.todo.text
		      this.editing = false
		    },
		}

	}
</script>
