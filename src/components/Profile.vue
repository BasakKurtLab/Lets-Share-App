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
      </div>
      <div class="left">
        <div class="top">
          <div class="username">{{ email }}</div>
          <button >Edit my profil</button>
        </div>
        <div class="bottom">
            <span class="posts_n">{{ posts }} posts</span>
            <span class="followers_n">{{ followers }} followers</span>
            <span class="following">{{ following }} following</span>
        </div>
        
            <div class="name"> {{ name }} {{ surname }}</div>
       
      </div>
       
    </div>

    

    <!-- <div class="row alt">
      <div class="postlar">
        <img
          src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          class="loadingImg"
          v-show="loading"
        />
      </div>
    </div> -->
  
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      username: "",
      email:"",
      posts:"",
      name:"",
      surname:"",
      followers:"",
      following:""
      

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
          this.email = sonuc.email;
          this.posts = sonuc.posts;
          this.name = sonuc.name;
          this.surname = sonuc.surname;
          this.followers = sonuc.followers;
          this.following = sonuc.following;

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
.profile{
 
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.row {
  flex-grow: 1;
 margin: 0 auto;
 padding: 20px;
 margin-right: 25px;
 
  
}
.ust {
  
  display: flex;
  justify-content: center;
  align-items: center;
}
.left{
  flex-grow: 4;
  
}
.left .top, .bottom{
  display: flex;
  justify-content: space-between;
  
  
}
.left span{
  font-family: "Ubuntu", sans-serif;
  
}
.left .top .username{
  font-size: 1.4em;
  margin-right: 50px;
}
.left  .name{
  
  font-weight: 600;
  
}
.left .top button{
  padding:5px 8px;
  border-radius: 6px;
  outline: none;
  border:1px solid rgb(182, 179, 179);
  align-self: flex-end;
  background-color: white;
  color:var(--c1);
  cursor: pointer;
  transition: all o.2s;
  
}
.left .top button:hover{
  background-color: var(--c1);
  color:white;
}
.bottom{
  margin-top: 20px;
  margin-bottom: 20px;
}

.profilResmi {
  background-color: rgb(236, 233, 233);
  border-radius: 50%;
  margin-right: 0;
  height: 150px;
  width: 150px;
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
