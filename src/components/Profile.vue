<template>
  <div class="profile">
    
    <div class="row ust">
      <div class="profilResmi">
        <img src="">
        <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" class="loadingImg" v-show="loading">
      </div>
      <div class="email">{{ email }}</div>
    </div>

    <div class="row alt">
      <div class="postlar">
        <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" class="loadingImg" v-show="loading">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  
  created()
  {
    setTimeout(() => {

      fetch("http://localhost/profile.php?id=" + "3" + "&token=" + (document.cookie.split("=")[1]),
      {
        mode: "cors",

      })
      .then(response => response.json())
      .then(sonuc => {

        if(sonuc.basarili == "1")
        {
          this.email = sonuc.email;
        }

        
      })
      .finally(() =>
      {
        this.loading = false;
      });

    }, 1500);
    
  },

  data()
  {
    return {
      loading: true,
      email: ""
    }
  }

}
</script>


<style scoped>

.row
{
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
.ust
{
  margin-bottom: 50px;
  display: flex;
  align-items: center;
}
.profilResmi
{
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

.postlar
{
  background-color: rgb(197, 197, 197);
  height: 300px;
  position: relative;
  display: flex;
  padding: 20px;
}


.loadingImg
{
  position: absolute;
  width: 30px;
}

</style>