<template>
   <div class="posts">
                   

     <div class="posts-content" >
        <div class="post" v-for="(p, index) in userposts" :key="p.id">
            <div class="title">
                <div class="image">
                     <img src="../assets/frau.png">
                </div>
                 <div class="name">
                   <a href="" >{{ p.user }} </a>
                </div>
                <div class="date">{{ p.date }}</div>
                        
            </div>

            <div class="posts-like">
                <div class="likes"><i  @click="like(p.id)" class="far fa-heart"  v-bind:style=" liked == index  ? 'color: red;' : 'color: black;' " ></i></div>
                <div class="comments"><i class="far fa-comment" @click="commit"></i></div>
               
            </div>
             

            <div class="posts-content">  
                <!-- <div class="posts-image">
                            <img src="images/freedom.jpg">
                </div> -->
                <div class="content">{{ p.content }}{{ p.id }}</div>
             
                <div class="posts-allcommits" v-if="commited==index">

                   <input type="text" v-model="commitText" placeholder="Write a commit...">
               <button>send</button>
               
                    </div>
            </div>
            
            

            

        </div>
                    
                    
                    </div>
                    
                </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
    data(){
        return{
            loading:false,
            posts: []
            
           
            
        }
    },
    methods:{
        

    },
    created(){
     this.$store.dispatch("inituserPosts");
     this.$store.dispatch("updateuserposts");

    // //     setTimeout(() => {

    // //   fetch("http://localhost/userposts.php?token=" + (document.cookie.split("=")[1]),
    // //   {
    // //     mode: "cors",

    // //   })
    // //   .then(response => response.json())
    // //   .then(result => {

    // //     if(result.successful == "1")
    // //     {
    // //       this.posts.push(result);
    // //     }

        
    //   })
    //   .finally(() =>
    //   {
    //     this.loading = false;
    //   });

    // }, 1500);
    
  

     
   


      
    },
     computed:{
         
    meineLokaleComputed () { return ""; /* normale, lokale Computed data */ },
    ...mapState(["userposts"]),
    ...mapGetters(["userpostsContent", "userpostsDate", "userpostsUser", "userpostsId"])
    }
          
               
}

</script>
<style  scoped>
i{
    cursor:pointer;
    
}

</style>