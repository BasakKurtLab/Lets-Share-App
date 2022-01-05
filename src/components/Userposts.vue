<template>
  <div class="posts">
    <div class="posts-content">
      <div class="post" v-for="(p, index) in userposts" :key="p.id">
        <div class="title">
          <div class="image">
            <img src="../assets/frau.png" />
          </div>
          <div class="name">
            <a href="">{{ p.user }} </a>
          </div>
          <div class="date">{{ p.date }}</div>
        </div>

        <div class="posts-like">
          <div class="likes">
            <i
              @click="like(p.id)"
              class="far fa-heart"
              v-bind:style="liked == index ? 'color: red;' : 'color: black;'"
            ></i>
          </div>
          <div class="comments">
            <i class="far fa-comment" @click="commit"></i>
          </div>
        </div>

        <div class="posts-content">
          <!-- <div class="posts-image">
                            <img src="images/freedom.jpg">
                </div> -->
          <div class="content">{{ p.content }}{{ p.id }}


            
            
            
          </div>
          <button  @click="del((p.id))"> Delete</button>

          <div class="posts-allcommits" v-if="commited == index">
            <input
              type="text"
              v-model="commitText"
              placeholder="Write a commit..."
            />
            <button>send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      loading: false,
      posts: [],
    };
  },
  methods: {
    del:function(index) {
      
      fetch("http://localhost/del.php?index=" + index,{

        mode: "cors",

      })
      .then(response => response.json())
      .then(sonuc => {

        if(sonuc.successful == "1")
        {
          
          this.$store.dispatch("initUserPosts");
          this.$store.dispatch("updateUserPosts");
          
          
        }

        
      })
      .finally(() =>
      {
        this.loading = false;
      })

    }

    },

  created() {
    this.$store.dispatch("initUserPosts");
    this.$store.dispatch("updateUserPosts");

    // //     setTimeout(() => {

    // //   fetch("http://localhost/userposts.php?token=" + (document.cookie.split("=")[1]),
    // //   {
    // //     mode: "cors",

    // //   })
    // //   .then(response => response.json())
    // //   .then(result => {

    // //     if(result.successful == "1")
    // //     {
    // //       this.posts.push(result);
    // //     }

    //   })
    //   .finally(() =>
    //   {
    //     this.loading = false;
    //   });

    // }, 1500);
  },
  computed: {
    meineLokaleComputed() {
      return {
          
      }
          
    
    },
    ...mapState(["userposts"]),
    ...mapGetters([
      "userpostsContent",
      "userpostsDate",
      "userpostsUser",
      "userpostsId",
    ]),
  },
};
</script>
<style scoped>
i {
  cursor: pointer;
}
.posts-content button{
  align-self: flex-end;
  padding:3px 6px;
 
  margin-top: 5px;
  border-radius: 6px;
  outline: none;
  border:1px solid rgb(182, 179, 179);
  align-self: flex-end;
  background-color: rgb(175, 33, 33);
  color:var(--c3);
  cursor: pointer;
  transition: all o.2s;
}
.posts-content button:hover{
  background-color: rgb(110, 23, 23);
  color:var(--c3);
}
</style>
