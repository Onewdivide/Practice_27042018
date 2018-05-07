<template> 
<div class="ListPage"> 

    <div class="ui top fixed menu">
        <div class="left menu">
        <div class="ui image">
            <svg width="50" height="50">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="@/assets/planelogo.png" x="5" y="5" width="80%" height="80%"></image>
            </svg>
        </div>
    <a class="item">Home</a>
        </div>
        
    </div>


<h1><center>EGCO427 Practice</center></h1>

<div class="ui centered grid"> 
<div class="fourteen wide column"> 
<div class="ui raised segment"> 
    <div class="ui raised segment">
    <h1><center>List of cities</center></h1>    
     </div>
<div class="ui grid"> 
<div class="five wide column" v-for="(i,key) in cityName" :key='key'> 
<div class="column"> 
<div class="ui card"> 
<div class="image"> 
<img v-bind:src="`/static/image/${i.image}`" width=60% height=60%/>
</div> 
<div class="content"> 
<div class="description">
<div><h1><center>{{i.name}}</center></h1></div>
<div>{{i.detail}}</div>
</div> 
</div> 
<div class="extra content"> 
<a> 
<!-- <router-link :to="{ path: 'weather/' + cities.name}" class="btn btn-sm btn-success " tag="button" type="button">
<span>Detail</span>
</router-link> -->
<button class="green ui button" @click="detail(i.name)"> 
Detail
</button> 
 


</a> 
</div> 
</div> 

</div> 
</div> 
</div> 
</div> 
</div> 
</div> 

<button class="large ui button" @click="logout()"> 
Logout
</button>
</div> 
</template> 

<script> 
import axios from 'axios' 
export default { 
name: 'allContact', 
data(){ 
return {
    search: '',
    cityName : {},
    firebase : window.firebase
} 

}, 
methods:{
logout () {
      this.firebase.auth().signOut()
        .then(() => {
          this.$router.replace('/')
        })
        .catch((e) => {
          alert(e.message)
        })
    },
    detail(name){
        this.$router.push({
            
            path: '/Weather/'+name
          })
    }
  
},

created(){
    const firebase = window.firebase
    firebase.database().ref('cities').on('value',(snapshot) => {
        this.cityName = snapshot.val()

    })

 

} 
}


</script> 

<style scoped> 

</style>