<template>
  <div class="hello">

<div class="ui top fixed menu">
        <div class="left menu">
        <div class="ui image">
            <svg width="50" height="50">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="@/assets/planelogo.png" x="5" y="5" width="80%" height="80%"></image>
            </svg>
        </div>
    <a class="item" @click="home()">Home</a>
        </div>
        
    </div>

    <h4>{{ msg }} </h4>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"/>
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div v-for="(weath,key) in Weather.list" :key='key'>
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h3 class="panel-title"> {{ weath.name }}</h3>
                </div>
                <div class="panel-body">

                <table class="table table-borderes">
                    <tbody>
                        <tr>
                            <td>
                                <b>Location:</b> { {{weath.coord.lat}}, {{weath.coord.lon}} }
                            </td>
                            <td>
                                <b>Tempurature:</b> {{weath.main.temp_min}}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Pressure:</b> {{weath.main.pressure}}
                            </td>
                            <td>
                                <b>Humidity:</b> {{weath.main.humidity}}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Main Weather:</b> {{weath.weather[0].main}}
                            </td>
                            <td>
                                <b>Description:</b> {{weath.weather[0].description}}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <img v-bind:src="`http://openweathermap.org/img/w/${weath.weather[0].icon}.png`">
                </div>
            </div>
            <br/>
        </div>
    </div>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Weather',
  data () {
    return {
      msg: 'Weather',
      movie: null,
      Weather: {}
    }
  },
  mounted () {
    let APIKEY = '8401c953bf6da750a982308bf17ad82d'
    let url = 'http://api.openweathermap.org/data/2.5/find?q=' + this.$route.params.cityname + '&type=accurate&appid=' + APIKEY + '&units=metric'
    axios.get(url)
      .then((response) => {
        console.log(response.data)
        this.Weather = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods:{
      home () {
          this.$router.push({
            
            path: '/allContact'
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
  text-align: left;
}
</style>