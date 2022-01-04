<template>
  <div class="post">
    <div class="post-menu">
      <h5>{{ username }}</h5>

      <a href="" class="menu-btn"> <span>Post</span></a>

      <a href="" class="menu-btn"><span>Photos</span></a>
    </div>
    <div class="post-bottom">
      <div class="image"><img src="../assets/frau.png" /></div>
      <div class="post-text">
        <input type="text" v-model="postText" placeholder="Write a post..." />
        <!-- <div class="img-add">
                          <input ref="file" type="file" style="display: none;" class="form-control">
                          <button class="btn btn-outline-secondary " type="button" @click="$refs.file.click()">...</button></div> -->
      </div>

      <button @click="send">{{ btn_text }}</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      username: "",
      postText: "",
      btn_text: "Just Share",
    };
  },
  created() {
    setTimeout(() => {
      fetch(
        "http://localhost/profil.php?token=" + document.cookie.split("=")[1],
        {
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((sonuc) => {
          if (sonuc.successful == "1") {
            this.username = sonuc.username;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    }, 1500);
  },
  methods: {
    send() {
      {
        this.loading = true;
        this.btn_text = "Sending...";

        const formData = new FormData();
        formData.append("username", this.username);
        formData.append("postText", this.postText);

        fetch("http://localhost/send.php", {
          method: "POST",
          mode: "cors",
          body: formData,
        })
          .then((answer) => answer.json())
          .then((result) => {
            if (result.successful == "1") {
              this.postText = "";
              this.loading = false;
            }
          })
          .finally(() => {
            this.btn_text = "Just Share";
            this.loading = false;
          });
      }
    },
  },
};
</script>
