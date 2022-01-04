<template>
  <div class="posts">
    <div class="posts-content">
      <div class="post" v-for="(p, index) in posts" :key="p.id">
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
          <div class="content">{{ p.content }}{{ p.id }}</div>

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
      liked: "",
      commitText: "",
      commited: false,
      likes_n: "",
    };
  },
  methods: {
    //     like: function(i){
    //   this.loading = true;
    //   this.liked = true
    //   fetch("http://localhost/like.php?id=" + (i) + "&token=" + (document.cookie.split("=")[1]),
    //   {
    //     mode: 'cors',
    //   })
    //   .then(answer => answer.json())
    //   .then(result => {
    //     if(result.successful == "1")
    //     {
    //      this.loading = false;
    //     }
    //   })
    //   .finally(() =>
    //   {
    //     this.loading = false;
    //     this.liked = true
    //   });
    // // },commit(){
    // //      this.loading = true;
    // //     this.commited = true;
    // // },
    // // commitSend:function(i){
    // //      const formData = new FormData();
    // //   formData.append("commit", this.commitText);
    // //   fetch("http://localhost/commit.php?id=" + (i) + "&token=" + (document.cookie.split("=")[1]),
    // //   {
    // //     method:'POST'
    // //     mode: 'cors',
    // //     body: formData
    // //   })
    // //   .then(answer => answer.json())
    // //   .then(result => {
    // //     if(result.successful == "1")
    // //     {
    // //         this.commitText = "";
    // //      this.loading = false;
    // //      this.commited = false;
    // //     }
    // //     else
    // //     {
    // //     }
    // //   })
    // //   .finally(() =>
    // //   {
    // //     this.loading = false;
    // //     this.commited = false
    // //   });
    // }
  },
  created() {
    this.$store.dispatch("initPosts");
    this.$store.dispatch("updatePosts");
  },
  computed: {
    meineLokaleComputed() {
      return ""; /* normale, lokale Computed data */
    },
    ...mapState(["posts"]),
    ...mapGetters(["postsContent", "postsDate", "postsUser", "postsId"]),
  },
};
</script>
<style scoped>
i {
  cursor: pointer;
}
</style>
