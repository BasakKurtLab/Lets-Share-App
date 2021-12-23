<template>
<div>
  <Header/>
  <main>
        <div class="max-width">
            <section class="left">
                <Menu/>
                    
                <Groups/>

            </section>
            <div class="middle">
            <section class="middle-top">
                <Post/>
            </section>

            <section class="middle-bottom">
            

                <Posts/>
                


            </section>
        </div>
            <div class="right">
                
                <section class="right-top">
                    <Events/>
                </section>
                <section class="right-bottom">
                  <Messages/>
                </section>

            </div>
        </div>

    </main>
    <Footer/>
</div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
// @ is an alias to /src
 import Header from "../components/Header.vue";
  import Menu from "../components/Menu.vue";
  import Groups from "../components/Groups.vue";
  import Post from "../components/Post.vue";
  import Posts from "../components/Posts.vue";
  import Events from "../components/Events.vue";
  import Footer from "../components/Footer.vue";
  import Messages from "../components/Messages.vue";

export default {
  name: 'About',
  components: {
    Header,
    Menu,
    Groups,
    Post,
    Posts,
    Events,
    Messages,
    Footer
  },
   created()
  {
    this.$store.dispatch("initPosts");

    setInterval(() =>
    {
      this.$store.dispatch("updatePosts");
    }, 7000)

  },

   computed:{
    meineLokaleComputed () { return ""; /* normale, lokale Computed data */ },
    ...mapState(["posts"]),
    ...mapGetters(["postsContent", "postsDate", "postsUser"])}
}

  
 


</script>
