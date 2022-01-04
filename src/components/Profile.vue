<template>
  <div class="profile">
    <div class="row ust">
      <div class="profilResmi">
        <img src="" />
        <img
          src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          class="loadingImg"
          v-show="loading"
        />
      </div>
      <div>
        <div class="username">{{ username }}</div>
        <a href="">Edit my profile</a>
      </div>
      <div>
        <div class="posts_n">{{ username }}</div>
        <div class="friends_n">{{ username }}</div>
        <div class="followers_n">{{ username }}</div>
      </div>
    </div>

    <div class="row alt">
      <div class="postlar">
        <img
          src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          class="loadingImg"
          v-show="loading"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      username: "",
    };
  },

  created() {
    fetch("http://localhost/user.php?token=" + document.cookie.split("=")[1], {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((sonuc) => {
        if (sonuc.successful == "1") {
          this.username = sonuc.username;
        }
      })
      .finally(() => {
        this.loading = false;
      });
  },
        
        computed: {
          
    }
};
</script>

<style scoped>
.row {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
.ust {
  margin-bottom: 50px;
  display: flex;
  align-items: center;
}
.profilResmi {
  background-color: rgb(197, 197, 197);
  border-radius: 50%;
  margin-right: 50px;
  height: 100px;
  width: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.postlar {
  background-color: rgb(197, 197, 197);
  height: 300px;
  position: relative;
  display: flex;
  padding: 20px;
}

.loadingImg {
  position: absolute;
  width: 30px;
}
</style>
