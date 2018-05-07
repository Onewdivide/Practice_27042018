// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBdW9LUZMK31ijDW4KcLLume-rdu9yIl-4",
    authDomain: "onew0982617716.firebaseapp.com",
    databaseURL: "https://onew0982617716.firebaseio.com",
    projectId: "onew0982617716",
    storageBucket: "onew0982617716.appspot.com",
    messagingSenderId: "899318483750"
  };
  firebase.initializeApp(config);
  window.firebase = firebase
  let app
  
  /* eslint-disable no-new */
  
  firebase.auth().onAuthStateChanged((user) => {
    if (!app) {
      app = new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>'
      })
    }
  })

