
import Vue from 'Vue'
import * as api from '../../api/index.js'

const types ={
  SWITCH_THREAD:'SWITCH_THREAD',
  RECEIVE_ALL:'RECEIVE_ALL',
  RECEIVE_MESSAGE:'RECEIVE_MESSAGE',
}
// const SWITCH_THREAD = 'SWITCH_THREAD'
// const RECEIVE_ALL = 'RECEIVE_ALL'
// const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'

const state = {
  currentThreadID: null,
  threads: {
    /*
    id: {
      id,
      name,
      messages: [...ids],
      lastMessage
    }
    */
  },
  messages: {
    /*
    id: {
      id,
      threadID,
      threadName,
      authorName,
      text,
      timestamp,
      isRead
    }
    */
  }
}

// getters
const getters = {
  threads:state => state.threads,
  currentThreadID:state=>state.currentThreadID,
  // unread: state => {
  //     const threads = state.threads
  //     return Object.keys(threads).reduce((count, id) => {
  //       return threads[id].lastMessage.isRead
  //         ? count
  //         : count + 1
  //     }, 0)
  // //   return Object.keys(state.threads).reduce((count,id) =>{
  // //     return state.threads[id].lastMessage.isRead ? count : count+1;
  // //   },0);
  // },
  currentThread: state =>{
    return state.currentThreadID ? state.threads[state.currentThreadID] : {};
  },
  currentMessages:state=>{
    const thread = getters.currentThread(state)
    return thread.messages ? thread.messages.map(id=>state.messages[id]) : {};
  },
  unreadCount:state=>{
    const threads = state.threads
    return Object.keys(threads).reduce((count, id) => {
      return threads[id].lastMessage.isRead
        ? count
        : count + 1
    }, 0)
  },

};

// actions
const actions = {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.added]
    commit(types.CHECKOUT_REQUEST)
    shop.buyProducts(
      products,
      () => commit(types.CHECKOUT_SUCCESS),
      () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    )
  },
  getAllMessages({ commit }){
    api.getAllMessages(messages => {
      commit(types.RECEIVE_ALL, {
        messages
      });
    });
  },
  sendMessage({ commit }, payload) {
    api.createMessage(payload, message => {
      commit(types.RECEIVE_MESSAGE, {
        message
      })
    })
  }
 
  // switchThread({ commit }, payload) {
  //   commit(types.SWITCH_THREAD, payload)
  // },
};

// mutations
const mutations = {
  [types.RECEIVE_ALL](state, { messages }){
    let latestMessage;
    messages.forEach(message => {
      if(!state.threads[message.threadID]){
        createThread(state, message.threadID, message.threadName);
      }
      if(!latestMessage || message.timestamp > latestMessage.timestamp){
        latestMessage = message;
      }
      addMessage(state, message);
    });

    // set initial thread to the one with the latest message
    setCurrentThread(state, latestMessage.threadID)
  },
  [types.SWITCH_THREAD](state,{threadID}){
    setCurrentThread(state,threadID);
    // console.log(state.threads);
  },
    [types.RECEIVE_MESSAGE] (state, { message }) {
    addMessage(state, message)
  },
}

function createThread(state, id, name){
    Vue.set(state.threads,id,{
      id,
      name,
      messages: [],
      lastMessage: null
    });
}
function addMessage (state, message) {
  // add a `isRead` field before adding the message
  message.isRead = message.threadID === state.currentThreadID
  // add it to the thread it belongs to
  const thread = state.threads[message.threadID]
  if (!thread.messages.some(id => id === message.id)) {
    thread.messages.push(message.id)
    thread.lastMessage = message
  }
  // add it to the messages map
  Vue.set(state.messages, message.id, message)
}

// function addMessage(state, message){
//     message.isRead = message.threadID === state.currentThreadID;
//     const thread = state.threads[message.threadID];
//     if(!thread.messages.some(id => id === message.id)){
//       console.log(thread.messages);
//       thread.messages.push(message.id);
//       console.log(thread.messages);
//       thread.lastMessage = message;
//     }
//     Vue.set(state.messages, message.id, message);
//   }
function setCurrentThread(state,id){
    state.currentThreadID = id
    if (!state.threads[id]) {
      debugger
    }
    // mark thread as read
     state.threads[id].lastMessage.isRead = true;
    //Vue.set(state.threads[id].lastMessage,'isRead',true);
  }

export default {
  state,
  getters,
  actions,
  mutations
};
