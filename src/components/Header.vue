<template>

<div class="navbar" >
        <div class="max-width">
            <div class="logo">
                <a href="index.html">
                    <i class="fab fa-slideshare"></i>
                <span>Just Share </span></a>           
            </div>
            <div class="search">
                <input type="text" placeholder="Search..."><i class="fas fa-search"></i>
                

            </div>
            <ul class="menu">
                <li><a @click.prevent="home" href="" class="menu-btn"> <i class="fas fa-home"></i></a></li>
                <li><a @click.prevent="update" href="" class="menu-btn"> <i class="fas fa-cog"></i></a></li>
                <li><a href="" class="menu-btn">
                    <div class="image"><img src="../assets/frau.png"></div></a></li>
                <li><a @click.prevent="logout" href="#">Logout</a>
                    </li>
                
                
            </ul>
            
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </div>

</template>

 
<script>
    export default {
      data(){
        return{
          update_s : false,

        }
      },
        methods: {
          logout(){
            setTimeout(() => {

      fetch("http://localhost/logout.php?token=" + (document.cookie.split("=")[1]),
      {
        mode: "cors",

      })
      .then(response => response.json())
      .then(sonuc => {

        if(sonuc.successful == "1")
        {
          
          document.cookie = "token=" + sonuc.token;
          
          // HOS GELDIN
          // sayfayi degis
          // ...
           this.$router.push({ path: '/' });
        }

        
      })
      .finally(() =>
      {
        this.loading = false;
      });

    }, 500);

        },

        update(){
             this.$router.push({ path: '/user' });

        },
        home(){
            this.$router.push({ path: '/about' });
        }
        
        
        
        },
        
        computed: {
         
    }
    }
</script>
<style>

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Ubuntu:wght@400;500;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
:root {
  --c1: #90a877; /*header*/
  --c2: #7a925e; /*header input*/
  --c3: #e9eee5; /*header menu*/

  --c4: #a0b08c; /*icon main*/
  --c5: #ffffff; /*main bg color*/
  --c6: #bdbdbd; /*main title*/
  --c7: #eef7e6fd; /*body background color*/
  --c8: #f3f6f0; /*main a:hover*/
}
.max-width {
  max-width: 1400px;
  padding: 0 80px;
  margin: auto;
}

/* header style*/
.navbar {
  /*position: fixed;*/
  width: 100%;
  padding: 30px 0;
  font-family: "Ubuntu", sans-serif;
  transition: all 03 ease;
  z-index: 999;
  background-color: var(--c1);
}
.navbar .max-width {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar .logo a {
  color: var(--c3);
  font-size: 30px;
  font-weight: 400;
}
.navbar .logo a span {
  color: var(--c3);
}
.navbar.sticky .logo a span {
  color: var(--c3);
  transition: all 0.3s ease;
}
.navbar .search {
  height: 50px;
  width: calc(50% - 30px);
  position: relative;
}
.navbar .search input {
  height: 100%;
  width: 100%;
  border: 1px solid var(--c2);
  background-color: var(--c2);
  border-radius: 6px;
  outline: none;
  padding: 0 20px 0 32px;
  font-size: 16px;
  color: var(--c7);
}
.navbar .search input::placeholder {
  color: var(--c7);
  opacity: 0.4;
}
.navbar .search i {
  position: absolute;
  left: 12px;
  top: 16px;
  color: var(--c7);
  opacity: 0.4;
}
.navbar .menu {
  display: flex;
  align-items: center;
}
.navbar .menu li {
  list-style: none;
  display: inline-block;
}
.navbar .menu li .image,
main .groups .image,
main .middle .post .image,
main .posts-info .image,
.menu .menu-left .image img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--c3);
  overflow: hidden;
}
.navbar .menu li .image img,
main .groups .image img, .menu .menu-left .image img,
main .middle .post .image img,
main .posts-info .image img {
  width: 100%;
  object-fit: cover;
}

.navbar .menu li a {
  display: block;
  color: var(--c3);
  font-size: 25px;
  font-weight: 500;
  margin-left: 15px;
  transition: color 0.3s ease;
}
.navbar .menu li a:hover {
  color: var(--c2);
}
.navbar.sticky .menu li a:hover {
  color: var(--c2);
}
.menu-btn {
  color: var(--c3);
  font-size: 23px;
  cursor: pointer;
  display: none;
}
/*****main styling*********/
main {
  background-color: var(--c7);
  padding: 18px 0;
}
main .max-width {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
main section:not(section.left) {
  padding: 30px 25px 25px 25px;
}
main section , .posts-content>.posts{
  border-radius: 10px;
  background-color: var(--c5);
  border: 1px solid var(--c7);
  box-shadow: 0px 0px 9px 0px rgba(203, 207, 205, 0.71);
  margin-bottom: 15px;
}
main .left,
main .right {
  width: calc(25% - 15px);
}
main .middle {
  width: calc(50% - 15px);
}
main section .title,
main .f-groups .title {
  color: var(--c6);
  font-size: 1.5em;
  font-family: "Ubuntu", sans-serif;
}
main .left .title,
main .f-groups .title {
  padding: 30px 25px 25px 25px;
}
main .left .menu-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
}
main .left .menu-left a {
  display: block;
  color: var(--c6);
  font-family: "Ubuntu", sans-serif;
  font-size: 1.2em;
  transition: color 0.3s ease;
  padding: 12px 10px;
}

main .left .menu-left a i {
  color: var(--c4);
  width: 20px;
  margin-right: 15px;
}

main .left .menu-left a:hover {
  background-color: var(--c8);
}
main .left .menu-left a:hover span {
  color: rgb(97, 95, 95);
}
main .f-groups .title,
main .post .title {
  position: relative;
}
main .f-groups .title::before {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #6663633d;
  position: absolute;
  top: 0;
  left: 0;
}
/********favorite Groups******/

main .groups, .menu .menu-left {
  display: flex;
  flex-direction: column;
  padding: 0px 25px 25px 25px;
}
main .groups a, .menu .menu-left a {
  display: block;
  display: flex;
  align-items: center;
  padding: 8px 0;
  color: var(--c6);
  font-family: "Ubuntu", sans-serif;
  font-size: 1.2em;
  transition: color 0.3s ease;
}
main .groups a span, .menu .menu-left {
  margin-left: 10px;
}
/******* section middle *****/
main .post {
  position: relative;
}

main .post .post-menu::after {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #6663633d;
  position: absolute;
  top: 30px;
  left: 0;
}
main .middle .post-menu {
  display: flex;
  justify-content: flex-start;
}

main .middle .post-menu a {
  display: inline-block;
  color: var(--c6);
  font-family: "Ubuntu", sans-serif;
  font-size: 1.2em;
  transition: color 0.3s ease;
  padding: 0 10px;
  cursor: pointer;
}
main .middle .post-menu a:hover {
  color: rgb(97, 95, 95);
}

main .middle .post-bottom {
  margin-top: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
main .middle .post-text {
  height: 45px;
  width: 100%;
}

main .middle .post-text input, .posts-allcommits input {
  height: 100%;
  width: 100%;
  border: 1px solid var(--c7);
  background-color: #dbd6d63d;
  border-radius: 6px;
  outline: none;
  padding: 0 30px 0 45px;
  font-size: 16px;
  color: rgb(97, 95, 95);
}
main .middle .post .image {
  position: absolute;
  top: 3px;
  left: 3px;
}
main .middle .post-text .img-add {
  position: absolute;
  right:5px;
  top:-10px;
  

}


main .middle .post .post-bottom button, .posts-allcommits button, .card>button {
  padding:5px 8px;
  margin-top: 20px;
  border-radius: 6px;
  outline: none;
  border:1px solid rgb(182, 179, 179);
  align-self: flex-end;
  background-color: var(--c1);
  color:var(--c3);
  cursor: pointer;
  transition: all o.2s;
  
}
main .middle .post .post-bottom button:hover{
  background-color: var(--c2);
}

/********posts styling******/
main .posts-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  
}
main .posts-content>.post{
  margin-bottom:10px;
  border:1px solid rgb(219, 216, 216);
  border-radius: 10px;
  padding:10px;
}
main .posts-content .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
main .posts .date {
  align-self: flex-end;
  font-size: 0.4em;
}
.posts .name {
  font-family: "Ubuntu", sans-serif;
  font-size: 0.6em;
  color: rgb(78, 76, 76);
  
  margin-left: 50px;
  font-weight: bold;
  margin-top: 12px;
  
  
 
}
.post .posts-like{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top:20px;
  padding: 10px;
}
.post .posts-like .likes{
margin-right: 10px;
}

.post .posts-content .content {
  font-size: 1em;
  color: rgb(168, 162, 162);
  font-family: "Ubuntu", sans-serif;
  
  padding: 0 10px;
  
}



main .posts-content .image {
  width: 50px;
  height: 50px;
  border: 1px solid var(--c2);
  margin-right: 15px;
}





/* main .posts-content .posts-image {
  width: 350px;
  overflow: hidden;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
}
main .posts-content .posts-image img {
  width: 100%;
  object-fit: cover;
} */

/*******footer*******/

.footer {
  width: 100%;
  padding: 30px 0;
  font-family: "Ubuntu", sans-serif;
  background-color: var(--c1);
  text-align: center;
}
.footer span {
  color: #e7f0e3;
  font-size: 0.9em;
}
.footer a {
  color: #f3eaea;
}

/******right-top******/
main .right-top .events-list {
  margin-top: 20px;
}

main .right-top a {
  display: block;
  color: var(--c6);
  font-family: "Ubuntu", sans-serif;
  font-size: 1.2em;
  transition: color 0.3s ease;
  margin-bottom: 8px;
}
main .right-top a span {
  color: rgb(97, 95, 95);
}
main .right-top a i {
  margin-right: 15px;
}

/* responsive media query starts*/
@media (max-width: 1300px) {
}
@media (max-width: 1104px) {
}
@media (max-width: 991px) {
  .max-width {
    padding: 0 50px;
  }
}

@media (max-width: 947px) {
  .max-width {
    padding: 0 50px;
  }
  .menu-btn {
    display: block;
    z-index: 999;
  }
  .menu-btn i.active:before {
    content: "\f00d";
  }
  .navbar .menu {
    position: fixed;
    height: 100vh;
    width: 100%;
    left: -100%;
    top: 0;
    background: #111;
    text-align: center;
    padding-top: 80px;
    transition: all 0.3s ease;
  }
  .navbar .menu.active {
    left: 0;
  }
  .navbar .menu li {
    display: block;
  }
  .navbar .menu li a {
    display: inline-block;
    margin: 20px 0;
    font-size: 25px;
  }

  .max-width {
    max-width: 800px;
  }
}

@media (max-width: 690px) {
  .max-width {
    padding: 0 23px;
  }
}
@media (max-width: 500px) {
}
</style>
