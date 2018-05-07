<template>
<div class="login">

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


    <div class="ui centered grid">
        <div class="six wide column">
            <div class="ui  raised  segment">
                <div class="ui  grid">
                    <div class="sixteen wide column">
                    <div class="ui green raised segment">
                        <label class="center">LOGIN</label>
                    </div>
                    </div>
                </div>
            
            
            


            <div class="ui grid">
                <div class="fourty wide column">
                <form class="ui form">
                    <div class="field">
                        <input type="text" name="username" placeholder="Email" v-model="User.Username">
                    </div>
                    <div class="field">
                        <input type="text" name="password" placeholder="Password" v-model="User.Password">
                    </div>
                    <!-- <div class="field">
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden">
                            <label>I agree to the Terms and Conditions</label>
                        </div>
                    </div> -->
                <button class="ui wide button"  type="submit" @click="clickLogin">Submit</button>
                </form>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      User: {
        Username: '',
        Password: ''
      },
      Token:{
          success: '',
          token: ''
      }
    }
  },
  methods: {
    clickLogin () {
        var thisfunc = this
        console.log("login")
      let newAuth = {
        Username: this.User.Username,
        Password: this.User.Password
      }
      console.log(newAuth.Username+" "+newAuth.Password)

      axios.post('http://localhost:8081/authenticate',newAuth) 
                .then(function(response){ 
                    
                if(response.data.success) 
                { 
                console.log(response.data.token) 
                localStorage.setItem('token', response.data.token) 
                thisfunc.$router.push({ path: '/allContact'}) 
                } 
                else{ 
                this.message="Invalid Username or password" 
                } 

})
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>




