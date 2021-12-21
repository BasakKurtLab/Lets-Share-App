<template>
  <div class="main">
    <div class="logo">
      <img src="../assets/logo2.png">
    </div>
    
    
    <div class="formContainer" v-show="!new_user">
      <img src="../assets/user.png">
          <h1>Login</h1>

          <form>
            
            <input type="email" placeholder="E-Mail-Address" v-model="u_email" required>
            <input type="password" placeholder="Password" v-model="u_pass" required>
          
          
          
            <button @click="login" >
                             {{btn_text}}
            </button>

            <span>{{ info }}</span>
                        
           </form> 

          <div class="bottom">
            <h5>Are you new?</h5>
            <a @click="reg" href="#">Sign Up</a>
          </div>
      </div>
  

          <div class="formContainer" v-show="new_user">
    
          <img src="../assets/user.png">
          <h1>Registration</h1>

        <form >
        <input type="text" placeholder="Name" v-model ="r_name"  required>
        <input type="text" placeholder="Surname" v-model="r_surname" required>
        <input type="text" placeholder="Username" v-model="r_username" required>
        <input type="email" placeholder="E-Mail-Address" v-model="r_email" required>
        <input type="password" placeholder="Password" v-model="r_pass" required>
        <input type="text" placeholder="Telephone" v-model="r_tel" required>
        <button @click="register" >
                             {{btn_text}}
        </button>
        
        
        <div class="bottom">
        <a @click="reg" href="#"><h5>Already have an account?</h5></a>
            
    </div>

        </form>
    </div>
  </div>
</template>

<script>

    export default {
        data() {
            return {
              
      u_email: "",
      u_pass: "",
      btn_text: "Login",
      loading: false,
      info: "",
      new_user:false,
      r_name:"",
      r_surname:"",
      r_username:"",
      r_email:"",
      r_pass:"",
      r_tel:""
    
                
            }
        },
        methods: {
          reg(){
            this.new_user= !this.new_user;
            if(this.new_user){
              this.btn_text="Sign Up";
            }
            else{
              this.btn_text="Login";
            }
            
            

          },
            login()
    {
      if(this.loading)
        return;

      this.loading = true;
      this.btn_text = "Please wait..."

      const formData = new FormData();
      formData.append("email", this.u_email);
      formData.append("pass", this.u_pass);

      fetch("http://localhost/login.php",
      {
        method: 'POST',
        mode: 'cors',
        body: formData
      })
      .then(answer => answer.json())
      .then(result => {
        
        if(result.successful == "1")
        {
          // BURASI DEGISTIRELECEK
          document.cookie = "token=" + result.token;
          
          // HOS GELDIN
          // sayfayi degis
          // ...
           this.$router.push('/about')

          
        }
        else
        {
          this.info = "incorrect entry";
        }

      })
      .finally(() =>
      {
        this.btn_text = "Login";
        this.loading = false;
      });

      
      
    },
    register()
    {
      if(this.loading)
        return;

      this.loading = true;
      

      const formData = new FormData();
      formData.append("name", this.r_name);
      formData.append("surname", this.r_surname);
      formData.append("username", this.r_username);
      formData.append("email", this.r_email);
      formData.append("pass", this.r_pass);
      formData.append("tel", this.r_tel);

      fetch("http://localhost/register.php",
      {
        method: 'POST',
        mode: 'cors',
        body: formData
      })
      .then(answer => answer.json())
      .then(result => {
        
        if(result.successful == "1")
        {
          
          
          this.new_user=false;

          
        }
        else
        {
          this.info = "Error";
        }

      })
      .finally(() =>
      {
       
        this.loading = false;
      });

      
      
    }
          
           
        },
        created(){
            
          }
    }
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Ubuntu:wght@400;500;700&display=swap");
* {
  box-sizing: border-box;
  padding:0;
  margin:0;
}
/*General style rules*/
:root {
  --primaryBnt: #90a877;
  
  --text: #37424c;
  --icon: #7a925e;
  --borderRadius: 8px;
}

.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  

  font-family: "Ubuntu", sans-serif;

  background: linear-gradient(
    45deg,
    #b5d493 0%,
    #c0daaafd 50%,
    rgba(243, 247, 241, 1) 100%
  );
  overflow: hidden;
 
}
a {
  color: #7a925e;
  
  font-size: 0.9em;
}
span {
  color: #1b1d1c;
  font-weight: bold;
  font-size: 0.8em;
  margin-bottom: 5px;
}

h1, h5 {
  text-align: center;
  font-weight: 300;
  color: rgb(43, 41, 41);
  
  
}

/*customer rules */
.logo{
  width:600px;
  
  border: none;
  margin-right: 80px;
  }
  .logo img{
    width:100%;
    object-fit: cover;
  }
.formContainer {
  width: 400px;
  padding: 40px;
  background-color: transparent;
  border-radius: var(--borderRadius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}
.formContainer > img {
  width: 100px;
  margin: 0 auto;
}
.formContainer h5 {
  margin: 0;
  margin-right: 5px;
}

.formContainer .bottom {
  display: flex;
  margin: 0 auto;
}
.formContainer > i {
  font-size: 3em;

  color: var(--icon);
}

input{
  font-family: Montserrat;
  border: none;
  border-bottom: 1px solid var(--icon);
  background-color: #c0daaafd;
  outline: none;
  padding: 8px 25px;
  border-radius: 6px;
  margin-bottom: 5px;
  
 
}
.formContainer form {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15px;
}
.icon_b,
.icon_p {
  position: absolute;
  top: 28px;
  left: 5px;
}

button {
  font-family: Montserrat;
  display: block;
  border-radius: 8px;
  color: rgb(248, 240, 240);
  background-color: #90a877;
  border: none;
  padding: 8px 0;
  margin-top: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all 0.4s;
}
button :hover {
  background-color: #404b33;
}
i {
  color: var(--icon);
}
#passVer {
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}
span.info {
  color: #940b12;
  text-align: center;
  height: 20px;
}
h5{
  font-size: 0.8em;
}
/* #under {
  text-align: center;
} */
/*second page css rules*/
table {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  border-collapse: collapse;
  border-style: hidden;
  font-size: 0.9em;
  font-weight: 600;
  text-align: left;
}
table td {
  width: 180px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 2px;
}
table td:nth-child(2) {
  border-right: 1px solid var(--icon);
  border-left: 1px solid var(--icon);
}

table th {
  border: 1px solid var(--icon);
  font-weight: normal;
  padding-bottom: 10px;
  padding-left: 10px;
}
/* #logout {
  margin-top: 30px;
  text-align: left;
  cursor: pointer;
} */

</style>
