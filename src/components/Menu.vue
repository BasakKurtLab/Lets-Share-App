<template>
    
        
                <div class="menu">
                    <div class="title"><i class="fas fa-user-friends"></i> Friends</div>
                    <div class="menu-left">
                        
                        <div class="card" v-for="p in friends" :key="p.id">
                                <a href="" class="menu-btn" @click="info(p.id)"> 
                                        <div class="image"><img :src="selectedImg == null ? '/user.png' : p.img"></div>
                                        <div class="info">
                                                <span class="name">{{ p.username }}</span>
                                                <span>{{ p.email }}</span>
                                        </div>
                                 </a>
                        </div>
                        
                      
                        
                            
                        
                            
                        
                    </div>
         </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
        data(){
        return{
              selectedImg: null  

        }
        },
        
    created(){


    this.$store.dispatch("initFriends");
    this.$store.dispatch("updateFriends");


      
    },
     computed:{
    meineLokaleComputed () { return ""; /* normale, lokale Computed data */ },
    ...mapState(["friends"]),
    ...mapGetters(["friendsId", "friendsEmail", "friendsUsername", "friendsImg"])}
    
}
</script>
<style  scoped>



.menu-left .card{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.menu .menu-left .image img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid var(--c3);
  overflow: hidden;
}

.card .menu-btn {
        display: flex;

}
.card .menu-btn span {
        margin-left: 10px;

}
.card .info{
        display: flex;
        flex-direction: column;
}
.card span{
        font-size: 0.8em;
}

</style>