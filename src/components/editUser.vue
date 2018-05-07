//----- AddUser.vue -----//
<template>

<div class="ui grid">

    <div class="ui top fixed inverted menu">
            <div class="left menu">
            <div class="ui image">
                <svg width="50" height="50">
                    <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="@/assets/logo.png" x="5" y="5" width="80%" height="80%"></image>
                </svg>
            </div>
        <a class="item">Contact</a>
            </div>
            <div class="right menu">
                <a class="item"><i class="user icon"></i></a>
            </div>
        </div>

    <div class="ten wide centered column">
        <div class="ui raised segment">
            <form class="ui form">
        <div>
            <h1>Edit Contact</h1>
        </div>
        <div class="required field">
            <label>Contact ID</label>
            <input type="text" name="first-name" v-model="Users.ContactID" placeholder="Contact ID" >
        </div>
    <div class="required field">
        <label>First Name</label>
        <input type="text" name="first-name" v-model="Users.FirstName" placeholder="First Name">
    </div>
    <div class="required field">
        <label>Last Name</label>
        <input type="text" name="last-name" v-model="Users.LastName" placeholder="Last Name">
    </div>
    <div class="required field">
        <label>Mobile No</label>
        <input type="text" name="first-name" v-model="Users.Mobile" placeholder="Mobile No">
    </div>
    <div class="field">
        <label>Email</label>
        <input type="text" name="first-name" v-model="Users.Email" placeholder="Email">
    </div>
    <div class="field">
        <label>Facebook</label>
        <input type="text" name="first-name" v-model="Users.Facebook" placeholder="Facebook">
    </div>
    <div class="field">
        <label>Img Url</label>
        <input type="text" name="first-name" v-model="Users.ImgUrl" placeholder="Img Url">
    </div>

    <div class="ui buttons">
        <button class="large ui teal button" @click="updateContact()">Submit</button>
        <button class="large ui orange button" @click="Close()">Close</button>
    </div>
    </form>
        </div>
        </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'editUser',
  props: ['ID'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Users: []
    }
  },
  methods: {
      Close(){
        this.$router.push({path: '/allContact'})
      },
    updateContact () {
      let newUser = {
        'ContactID':this.Users.ContactID,
        'FirstName': this.Users.FirstName,
        'LastName': this.Users.LastName,
        'Mobile': this.Users.Mobile,
        'Email': this.Users.Email,
        'Facebook': this.Users.Facebook,
        'ImgUrl': this.Users.ImgUrl
      }
      console.log(newUser)
      axios.post('http://localhost:8081/contact/'+this.ID, newUser)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
        this.$router.push({path: '/allContact'})
    }
  }
//   ,
//   mounted (){ 
//     axios.get('http://localhost:8081/contact/'+this.ID) 
//     .then((response)=>{ 
//     console.log(response.data) 
//     this.Users = response.data 
//     }) 
//     .catch((error)=>{ 
//     console.log(error) 
//     }) 
//     console(Users)
//     } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>