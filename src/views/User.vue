<template>
  <div>
    <Header />
    <main>
      <div class="max-width">
        <Profile></Profile>
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

<style></style>
