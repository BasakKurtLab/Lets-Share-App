import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUser: "",
    token: "",
    posts: [],
    looding: "",
    userposts: []
  },
  getters:
  {
    postsContent(state) {
      return state.posts.find(el => el.name == "content")
    },
    postsDate(state) {
      return state.posts.find(el => el.name == "date")
    },
    postsUser(state) {
      return state.posts.find(el => el.name == "user")
    },
    postsId(state) {
      return state.posts.find(el => el.name == "id")
    },
    userpostsContent(state) {
      return state.userposts.find(el => el.name == "content")
    },
    userpostsDate(state) {
      return state.userposts.find(el => el.name == "date")
    },
    userpostsUser(state) {
      return state.userposts.find(el => el.name == "user")
    },
    userpostsId(state) {
      return state.userposts.find(el => el.name == "id")
    }
  },
  mutations: {
    addUserposts(state, payload) {
      state.userposts.push(payload)
    },
    addPosts(state, payload) {
      state.posts.push(payload)
    },
    updatePosts(state, payload) {
      state.posts.splice(payload.id, 1, { id: payload.id, user: payload.user, content: payload.content, date: payload.date })
    }
  },
  actions: {
    async inituserPosts(context) {
      
      let response = await fetch("http://localhost/posts.php");

      let result = await response.json();
        
       
       
        
          let i = 1;
      for (let p in result)
      {
            context.commit("addUserposts", { id: result[p].id, content: result[p].content, date: result[p].date, user: result[p].user})
            i++;
          }
          
        },

    async initPosts(context) {
      
      let response = await fetch("http://localhost/posts.php");

      let result = await response.json();
        
       
       
        
          let i = 1;
      for (let p in result)
      {
            context.commit("addPosts", { id: result[p].id, content: result[p].content, date: result[p].date, user: result[p].user})
            i++;
          }
          
        },
    
        async updatePosts(context)
     {
          let response = await fetch("http://localhost/posts.php");
          let result = await response.json();
      
        
          
         let i = 0;
         for(let p in result)
       {
           context.commit("updatePosts", { id: result[p].id, content: result[p].content, date: result[p].date, user: result[p].user });
           i++
           
           

        }
           
       }
      
      }
    
  })

