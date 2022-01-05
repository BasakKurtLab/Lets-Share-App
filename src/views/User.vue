<template>
  <div>
    <Header />
    <main class="mitte">
     <div class="middle">
        <section class="middle-top ">
        <Profile></Profile>
        </section>
     </div>
      <div class="middle">
        <section class="middle-bottom">
          <Userposts />
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Profile from "../components/Profile.vue";
import Userposts from "../components/Userposts.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "User",
  components: {
    Header,
    Profile,
    Userposts,
    Footer,
  },
  computed: {
    routeKey() {
        const helper = this.$route.matched[0].meta.key
        return helper ? helper(this.$route) : undefined
    }
}
}
  

</script>

<style scoped>
.mitte{
  width: 100%;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
}
.middle{
  width: calc(40%);
}

</style>
