import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUser: "",
    token: "",
    posts: [],
    looding: "",
    userposts: [],
    friends: []
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
    },
    friendsEmail(state) {
      return state.friends.find(el => el.name == "email")
    },
    friendsUsername(state) {
      return state.friends.find(el => el.name == "username")
    },
    friendsImg(state) {
      return state.friends.find(el => el.name == "img")
    },
    friendsId(state) {
      return state.friends.find(el => el.name == "id")
    }

  },
  mutations: {
    addUserPosts(state, payload) {
      state.userposts.push(payload)
    },
    updateUserPosts(state, payload) {
      state.userposts.splice(payload.id_a, 1, { id: payload.id, user: payload.user, content: payload.content, date: payload.date })
    },
    addPosts(state, payload) {
      state.posts.push(payload)
    },
    updatePosts(state, payload) {
      state.posts.splice(payload.id_a, 1, { id: payload.id, user: payload.user, content: payload.content, date: payload.date })
    },
    addFriends(state, payload) {
      state.friends.push(payload)
    },
    updateFriends(state, payload) {
      state.friends.splice(payload.id_a, 1, { id: payload.id, username: payload.username, email: payload.email, img: payload.img })
    }

  },
  actions: {
    async initUserPosts(context) {
      
      let response = await fetch("http://localhost/userposts.php?token="+ (document.cookie.split("=")[1]));

      let result = await response.json();
        
       
       
      let i = 0;  
      for (let p in result)
      {
        context.commit("addUserPosts", { id_a: i, id: result[p].id, content: result[p].content, date: result[p].date, user: result[p].user })
        i++;   
          }
          
    },
    
    
        async updateUserPosts(context)
     {
          let response = await fetch("http://localhost/userposts.php?token="+ (document.cookie.split("=")[1]));
          let result = await response.json();
      
        
          
          let i = 0; 
         for(let p in result)
       {
           context.commit("updateUserPosts", { id_a:i, id: result[p].id, content: result[p].content, date: result[p].date, user: result[p].user });
           i++;
           
           

        }
           
    },

    async initPosts(context) {
      
      let response = await fetch("http://localhost/posts.php?token="+ (document.cookie.split("=")[1]));

      let result = await response.json();
        
       
       
        
      let i = 0;   
      for (let p in result)
      {
        context.commit("addPosts", { id_a: i, id: result[p].id, content: result[p].content, date: result[p].date, user: result[p].user })
        i++;  
          }
          
        },
    
        async updatePosts(context)
     {
          let response = await fetch("http://localhost/posts.php?token="+ (document.cookie.split("=")[1]));
          let result = await response.json();
      
        
          
          let i = 0; 
         for(let p in result)
       {
           context.commit("updatePosts", { id_a: i, id: result[p].id, content: result[p].content, date: result[p].date, user: result[p].user })
           i++;
           
           

        }
           
    },
    async initFriends(context) {
      
      let response = await fetch("http://localhost/friends.php?token="+ (document.cookie.split("=")[1]));

      let result = await response.json();
        
       
       
      let i = 0; 
          
      for (let p in result)
      {
        context.commit("addFriends", { id_a: i, id: result[p].id, username: result[p].username, email: result[p].email, img: result[p].img })
        i++; 
          }
          
        },
    
        async updateFriends(context)
     {
          let response = await fetch("http://localhost/friends.php?token="+ (document.cookie.split("=")[1]));
          let result = await response.json();
      
        
          
          let i = 0; 
         for(let p in result)
       {
           context.commit("updateFriends", { id_a:i, id: result[p].id, username: result[p].username, email: result[p].email, img: result[p].img })
           i++;
         
        }
           
       }
      
      }
    
  })

