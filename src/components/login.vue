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
                        <input type="text" name="username" placeholder="Email" v-model="formData.email">
                    </div>
                    <div class="field">
                        <input type="text" name="password" placeholder="Password" v-model="formData.password">
                    </div>
                    <!-- <div class="field">
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden">
                            <label>I agree to the Terms and Conditions</label>
                        </div>
                    </div> -->
                <button class="green ui bottom attached button"  type="button" @click="clickLogin()">LOGIN</button>
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
      
      formData: {
        email: '',
        password: ''
      }
    
  
    }
  },
  methods: {
    clickLogin () {
      const firebase = window.firebase
      console.log("click LOGIN!!")
      firebase
        .auth()
        .signInWithEmailAndPassword(this.formData.email, this.formData.password)
        .then(user => {
          // this.$router.replace('/movie')
          this.$router.push({
            path: '/allContact'
          })
        })
        .catch(e => {
          alert(e.message)
        })
    }
  },
  created () {}
}
</script>




