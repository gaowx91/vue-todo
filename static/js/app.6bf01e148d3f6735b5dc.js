webpackJsonp([1],[,,function(t,e,o){"use strict";o.d(e,"b",function(){return r});var n=o(1),i=o(8),r="todos-vuejs";n.a.use(i.c);var s={todoList:JSON.parse(window.localStorage.getItem(r)||"[]")},a={todoList:function(t){return t.todoList},allChecked:function(t){return t.todoList.every(function(t){return t.done})}},l={},u={addTodo:function(t,e){var o=e.text;o&&t.todoList.push({text:o,done:!1})},toggleAll:function(t,e){var o=e.done;t.todoList.forEach(function(t){t.done=o})},toggleTodo:function(t,e){var o=e.todo;o.done=!o.done},deleteTodo:function(t,e){var o=e.todo;t.todoList.splice(t.todoList.indexOf(o),1)},editTodo:function(t,e){var o=e.todo,n=e.value;o.text=n},clearCompleted:function(t,e){e.todo;t.todoList=t.todoList.filter(function(t){return!t.done})}};e.a=new i.c.Store({state:s,getters:a,actions:l,mutations:u})},,,,,,,,,,,,,function(t,e,o){"use strict";var n=o(1),i=o(62),r=o(55),s=o.n(r),a=o(56),l=o.n(a);n.a.use(i.a),e.a=new i.a({routes:[{path:"/hello",name:"Hello",component:s.a},{path:"/",name:"Todo",component:l.a}]})},,function(t,e,o){function n(t){o(54)}var i=o(0)(o(18),o(61),n,null,null);t.exports=i.exports},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(9),i=o.n(n),r=o(57),s=o.n(r),a=o(8),l={all:function(t){return t},active:function(t){return t.filter(function(t){return!t.done})},completed:function(t){return t.filter(function(t){return t.done})}};e.default={data:function(){return{msg:"Welcome to Your Vue.js App",newTodo:"6666",visibility:"all",filters:l}},components:{todoLi:s.a},created:function(){document.title="gaowx todomvc example"},computed:i()({},o.i(a.a)(["todoList","allChecked"]),{remaining:function(){return this.todoList.filter(function(t){return 0==t.done}).length},filteredTodos:function(){return l[this.visibility](this.todoList)}}),methods:i()({},o.i(a.b)(["addTodo","toggleAll","clearCompleted"])),filters:{pluralize:function(t,e){return t<=1?e:e+"s"},capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(9),i=o.n(n),r=o(8);e.default={name:"todoli",props:["todo"],data:function(){return{editing:!1}},directives:{focus:function(t,e,o){var n=e.value,i=o.context;n&&i.$nextTick(function(){t.focus()})}},methods:i()({},o.i(r.b)(["toggleTodo","deleteTodo","editTodo"]),{doneEdit:function(t){var e=t.target.value.trim(),o=this.todo;e?this.editing&&(this.editTodo({todo:o,value:e}),this.editing=!1):this.deleteTodo({todo:o})},cancelEdit:function(t){t.target.value=this.todo.text,this.editing=!1}})}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(16),i=o.n(n),r=o(1),s=o(17),a=o.n(s),l=o(15),u=o(14),c=o(2),d=o(2);r.a.use(u.a),r.a.config.productionTip=!1,d.a.subscribe(function(t,e){var o=e.todoList;window.localStorage.setItem(c.b,i()(o))}),new r.a({el:"#app",store:d.a,router:l.a,template:"<App/>",components:{App:a.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e,o){function n(t){o(53)}var i=o(0)(o(19),o(59),n,"data-v-7826005b",null);t.exports=i.exports},function(t,e,o){function n(t){o(52)}var i=o(0)(o(20),o(58),n,null,null);t.exports=i.exports},function(t,e,o){var n=o(0)(o(21),o(60),null,null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"todoapp"},[o("header",{staticClass:"header"},[o("h1",[t._v("todos")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"new-todo",attrs:{autofocus:"autofocus",placeholder:"What needs to be done?"},domProps:{value:t.newTodo},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.addTodo({text:t.newTodo})},input:function(e){e.target.composing||(t.newTodo=e.target.value)}}})]),t._v(" "),o("section",{directives:[{name:"show",rawName:"v-show",value:t.todoList.length,expression:"todoList.length"}],staticClass:"main"},[o("input",{staticClass:"toggle-all",attrs:{type:"checkbox",id:"toggle-all"},domProps:{checked:t.allChecked},on:{change:function(e){t.toggleAll({done:!t.allChecked})}}}),t._v(" "),o("label",{attrs:{for:"toggle-all"}}),t._v(" "),o("ul",{staticClass:"todo-list"},t._l(t.filteredTodos,function(t,e){return o("todoLi",{key:e,attrs:{todo:t}})}))]),t._v(" "),o("footer",{directives:[{name:"show",rawName:"v-show",value:t.todoList.length,expression:"todoList.length"}],staticClass:"footer"},[o("span",{staticClass:"todo-count"},[o("strong",[t._v(t._s(t.remaining))]),t._v("\n      "+t._s(t._f("pluralize")(t.remaining,"item"))+" left\n    ")]),t._v(" "),o("ul",{staticClass:"filters"},t._l(t.filters,function(e,n){return o("li",[o("a",{class:{selected:t.visibility===n},attrs:{href:"#/"+n},on:{click:function(e){e.preventDefault(),t.visibility=n}}},[t._v(t._s(t._f("capitalize")(n)))])])})),t._v(" "),o("button",{directives:[{name:"show",rawName:"v-show",value:t.todoList.length>t.remaining,expression:"todoList.length > remaining"}],staticClass:"clear-completed",staticStyle:{display:"none"},on:{click:t.clearCompleted}},[t._v("\n      Clear-completed\n    ")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("h1",[t._v(t._s(t.msg))]),t._v(" "),o("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),o("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),o("br"),t._v(" "),o("li",[o("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),o("li",[o("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),o("li",[o("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"todo",class:{completed:t.todo.done,editing:t.editing}},[o("div",{staticClass:"view"},[o("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{change:function(e){t.toggleTodo({todo:t.todo})}}}),t._v(" "),o("label",{on:{dblclick:function(e){t.editing=!0}}},[t._v(t._s(t.todo.text))])]),t._v(" "),o("input",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"},{name:"focus",rawName:"v-focus",value:t.editing,expression:"editing"}],staticClass:"edit",domProps:{value:t.todo.text},on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.doneEdit(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;t.cancelEdit(e)}],blur:t.doneEdit}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},staticRenderFns:[]}}],[22]);
//# sourceMappingURL=app.6bf01e148d3f6735b5dc.js.map