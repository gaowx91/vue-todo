<template>
  <div class="chatapp">
    <div class="thread-section">
      <div class="thread-count" v-show="unread">
        Unread threads:{{unread}}
      </div>
      <ul class="thread-list">
        <li class="thread-list-item" v-for="(thread,index) in threads" :class="{ active: thread.id === currentThreadID }" @click="switchThread(thread.id)">
          <span class="thread-name">
            {{thread.name}}
          </span>
          <div class="thread-time">{{thread.lastMessage.timestamp | time}}</div>
          <div class="thread-last-message">
           {{thread.lastMessage.text}}
          </div>
        </li>
      </ul>
    </div>
    <div class="message-section">
      <h3 class="message-thread-heading">Functional Heads</h3>
      <ul class="message-list">
        <li class="message-list-item" v-for="(message,index) in currentMessages" :key="index">
          <span class="message-author-name">{{message.authorName}}</span>
          <div class="message-time">{{message.timestamp | time}}</div>
          <div class="message-text">{{message.text}}</div>
        </li>
      </ul>
      <textarea class="message-composer"></textarea>
    </div>

  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
  name: 'chat',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  filters:{
    time:(timestamp) => {
      return new Date(timestamp).toLocaleTimeString()
    }
  },
  computed:{
    ...mapGetters([
      'threads',
      'currentThreadID',
      'unread',
      'currentMessages',
      ]),
      // unreadCount () {
      //   //const threads = this.threads
      //   console.log(88);
      //   return Object.keys(this.threads).reduce((count, id) => {
      //     return this.threads[id].lastMessage.isRead
      //       ? count
      //       : count + 1
      //   }, 0)
      // }
  },
  methods:{
    switchThread(threadID){
      this.$store.commit('SWITCH_THREAD',{threadID});
    }
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chatapp{
  font-family: 'Muli', 'Helvetica Neue', helvetica, arial!important;
  max-width:760px;
  margin:20px auto;
}
.thread-section{
  float:left;
  width:32.5%;
}
.message-section{
  float: right;
  width:65%;
}
.message-thread-heading, .thread-count{
  height:40px;
  margin:0;
}
.message-list, .thread-list {
    border: 1px solid #ccf;
    font-size: 16px;
    height: 400px;
    margin: 0;
    overflow-y: auto;
    padding: 0;
}
.thread-list-item {
    border-bottom: 1px solid #ccc;
    cursor: pointer;
}
.message-list-item, .thread-list-item {
    list-style: none;
    padding: 12px 14px 14px;
}
.message-author-name, .thread-name {
    color: #66c;
    float: left;
    font-size: 13px;
    margin: 0;
}
.message-time, .thread-time {
    color: #aad;
    float: right;
    font-size: 12px;
}
.thread-last-message,.message-text{
  clear:both;
  font-size: 14px;
  padding-top: 10px;
}
.message-composer{
  margin:20px 0 0;
  padding:10px;
  font-size: 14px;
  height:5em;
  width:100%;
  box-sizing: border-box;
}

.thread-list:hover .thread-list-item:hover {
  background-color: #f8f8ff;
}

.thread-list:hover .thread-list-item {
  background-color: #fff;
}

.thread-list-item.active,
.thread-list:hover .thread-list-item.active,
.thread-list:hover .thread-list-item.active:hover {
  background-color: #efefff;
  cursor: default;
}


</style>
