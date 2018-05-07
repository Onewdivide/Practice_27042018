<template>
  <div class="hello">
    <h4>{{ msg }} </h4>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"/>
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">Add New Movie</h3>
        </div>
        <input type="text" v-model='movie' class="form-control" @keyup.enter='addMovie'>
      </div>
      <!-- display movie list -->
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">List of Movies (Update/Delete)</h3>
        </div>
        <div class="panel-body">
          <table class="table table-borderes">
            <tbody>
              <tr v-for="(movieName,key) in movies" :key='key'>
                  <td>
                      <p class="text-left"><b>{{movieName.name}}</b></p>
                  </td>
                  <td>
                      <input type="text" v-model="editName[key]" class="form-control" @keyup.enter="editMovie(key)">
                  </td>
                  <td>
                      <button class="btn btn-xs btn-warning" @click="editMovie(key)">Update</button>
                  </td>
                  <td>
                      <button class="btn btn-xs btn-danger" @click="deleteMovie(key)">Delete</button>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="grid">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12" />
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <button @click="logout" class="btn btn-default"><span class="glyphicon glyphicon-log-out"></span> Logout</button>
            </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'addUser',
  data () {
    return {
      msg: 'Firebase CRUD Web Application',
      movie: null,
      movies: {},
      editName: [],
      firebase: window.firebase
    }
  },
  created () {
    this.firebase.database().ref('cities').on('value', (snapshot) => {
      this.movies = snapshot.val()
      console.log(this.movies)
    })
  },
  methods: {
    addMovie () {
      this.firebase.database().ref('cities').push({ name: this.movie })
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    editMovie (key) {
      this.firebase.database().ref('cities/' + key).set({
        name: this.editName[key]
      })
    },
    deleteMovie (key) {
      this.firebase.database().ref('cities/' + key).remove()
    },
    logout () {
      this.firebase.auth().signOut()
        .then(() => {
          this.$router.replace('/signin')
        })
        .catch((e) => {
          alert(e.message)
        })
    }
  }
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
.table>tbody>tr>td,
.table>tbody>tr>th {
  border-top: none;
}
</style>