<template>
  <div>
    <h1>Confirmed cases in {{ this.$route.query.countrySelected }}</h1>
    <div class="cases-per-day">
      <div class="cases" v-for="country in dayOneCountry" :key="country.id">
        <p>{{ country.Date | dateParse('YYYY-MM-DD') | dateFormat('DD-MM-YYYY') }}</p>
        <p>{{ country.Cases }}</p>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        dayOneCountry: [],
        countrySelected: Object
      }
    },
    mounted() {
      this.getDayOneCountry();
    },
    methods: {
      getDayOneCountry() {
        axios
          .get('https://api.covid19api.com/dayone/country/' + this.$route.query.countrySelected + '/status/confirmed')
          .then( response => {
            console.log("first call axios: ", response.data)
            console.log(this.$route.query.countrySelected)
            this.dayOneCountry = response.data
            console.log(this.dayOneCountry)
          }).catch( e=> console.log(e))
      }
    }
  }
</script>

<style scoped>
.cases-per-day {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2em;
}

.cases {
  display: inline-block;
  width: 15%;
  border-radius: 10px;
  margin: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.cases:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
</style>