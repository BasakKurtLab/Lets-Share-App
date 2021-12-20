<template>
    <div class="post">
                    <div class="post-menu">
                        <h5> {{ username }} </h5>
                       
                        <a href="" class="menu-btn"> <span>Posts</span></a>
                    
                        <a href="" class="menu-btn"><span>Photos</span></a>
                    </div>
                    <div class="post-bottom">
                    <div class="image"><img src="../assets/frau.png"></div>
                    <div class="post-text">
                        <input type="text" placeholder="Write a post...">
                    </div>
                </div>
                </div>
</template>
<script>
export default {
     data()
  {
    return {
      loading: true,
      username: ""
    }
  },
  created()
  {
    setTimeout(() => {

      fetch("http://localhost/profil.php?token=" + (document.cookie.split("=")[1]),
      {
        mode: "cors",

      })
      .then(response => response.json())
      .then(sonuc => {

        if(sonuc.successful == "1")
        {
          this.username = sonuc.username;
        }

        
      })
      .finally(() =>
      {
        this.loading = false;
      });

    }, 1500);
    
  },

}
</script>