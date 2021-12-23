<template>
   <div class="posts">
                   

                    <div class="posts-content" >
                        <div class="post" v-for="p in posts" :key="p.id">
                            <div class="title">
                            <div class="image">
                            <img src="../assets/frau.png">
                        </div>
                            <div class="name">
                                   {{ p.user }} 
                                </div>
                        
                        </div>
                        <div class="posts-title"> {{ p.content }} </div>
                        <!-- <div class="posts-image">
                            <img src="images/freedom.jpg">
                        </div> -->
                        <div class="date">{{ p.date }}</div>

                        <div class="posts-like">
                            <div class="likes"></div>
                            <div class="comments"></div>
                        </div>

                    </div>
                    
                    <div class="posts-allcommits">

                    </div>
                    </div>
                    
                </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
    data(){
        return{
            loading:false
            
        }
    },
    methods:{

    },
    created(){


      
      
    },
     computed:{
    meineLokaleComputed () { return ""; /* normale, lokale Computed data */ },
    ...mapState(["posts"]),
    ...mapGetters(["postsContent", "postsDate", "postsUser"])}
          
           
        



            
}

</script>