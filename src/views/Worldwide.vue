<template>
  <div>
    <div class="last-update">
      <p>Last update: {{ updatedAt }}</p>
    </div>
    <h2 class="worldwide-title">Worldwide</h2>
    <div class="worldwide">
      <div class="worldwide--info">
        <h3>Total confirmed</h3>
        <p>{{ globalData.today_confirmed }}</p>
      </div>
      <div class="worldwide--info">
        <h3>Total deaths</h3>
        <p>{{ globalData.today_deaths }}</p>
      </div>
      <div class="worldwide--info">
        <h3>Total open cases</h3>
        <p>{{ globalData.today_open_cases }}</p>
      </div>
      <div class="worldwide--info">
        <h3>Total recovered</h3>
        <p>{{ globalData.today_recovered }}</p>
      </div>

      <div class="worldwide--info">
        <h3>Yesterday confirmed</h3>
        <p>{{ globalData.yesterday_confirmed }}</p>
      </div>
      <div class="worldwide--info">
        <h3>Yesterday deaths</h3>
        <p>{{ globalData.yesterday_deaths }}</p>
      </div>
      <div class="worldwide--info">
        <h3>Yesterday open cases</h3>
        <p>{{ globalData.yesterday_open_cases }}</p>
      </div>
      <div class="worldwide--info">
        <h3>Yesterday recovered</h3>
        <p>{{ globalData.yesterday_recovered }}</p>
      </div>
    </div>
    
    <h2 class="countries-title">Countries</h2>
    <div class="countries">
      <div v-for="data in countriesData" :key="data.id" class="countries__country-info">
        <div class="countries__main-info">
          <!-- <country-flag :country="data.CountryCode" size='normal'/> -->
          <h4 class="countries__main-info--title">{{ data.name_es }}</h4>
        </div>
        <p><b>Total confirmed: </b></p>
        <p><b>Total deaths: </b></p>
        <p><b>Total recovered: </b></p>
        <p><v-icon name="link"/><router-link class="countries__country-info--link" :to="{ path: 'country', query: { countrySelected: data.Country }}"><b> Info day by day</b></router-link></p>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        updatedAt: [],
        globalData: [],
        countriesData: []
      }
    },
    mounted() {
      this.getGlobalData();
      this.getTodayDataFromACountry();
    },
    methods: {
      getGlobalData() {
        var formatted_date = new Date().toJSON().slice(0,10).replace(/-/g,'-');
        console.log("formatted_date: ", formatted_date);
        axios
          .get('https://api.covid19tracking.narrativa.com/api/' + formatted_date)
          .then( response => {
            console.log("data: ", response.data)
            this.updatedAt = response.data.updated_at
            this.globalData = response.data.total
            console.log("updatedAt: ", response.data.updated_at)
          }).catch( e=> console.log(e))
      },
      getTodayDataFromACountry() {
        var formatted_date = new Date().toJSON().slice(0,10).replace(/-/g,'-');
        console.log("formatted_date: ", formatted_date);
        axios
          .get('https://api.covid19tracking.narrativa.com/api/countries')
          .then(response => {
            console.log("response of countries call: ", response.data)
            console.log("response of countries call (countries): ", response.data.countries)
            console.log("US???", response.data.countries[0])
            this.countriesData = response.data.countries
              return axios.get('https://api.covid19tracking.narrativa.com/api/' + formatted_date + '/country/' + this.countriesData[0].id);
          })
          .then(response => {
            console.log('Response', response);
          })
      }
    }
  }
</script>

<style scoped>

.countries-title,
.worldwide-title {
	color: black;
	background-image: linear-gradient(to bottom, transparent 65%, #fcf113 0);
	background-size: 0% 100%;
	background-repeat: no-repeat;
	text-decoration: none;
	transition: background-size .4s ease;
  width: max-content;
  margin: 0 auto;
}

.countries-title:hover,
.worldwide-title:hover {
	background-size: 100% 100%;
}

.last-update {
  display: block;
  position: fixed;
  right: 15px;
  bottom: 15px;
  background: #a2f96c;
  border-radius: 10px;
  padding: 5px;
  z-index: 1;
}

.worldwide {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2em;
}

.worldwide--info {
  width: 20%;
  border-radius: 10px;
  margin: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.worldwide--info:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.countries {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.countries__country-info {
  width: 20%;
  border-radius: 10px;
  margin: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.countries__country-info:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.countries__main-info--title {
  display: inline-block;
  text-transform: uppercase;
}

.countries__main-info .flag {
  vertical-align: middle;
}

.countries__country-info--link {
  color: #343139;
  text-decoration: none;
  border-bottom: .125em solid #1aa4e6;
  box-shadow: inset 0 -0.125em 0 #1aa4e6;
  transition: box-shadow 270ms cubic-bezier(0.77, 0, 0.175, 1), color 270ms cubic-bezier(0.77, 0, 0.175, 1);
}

.countries__country-info--link:hover {
  box-shadow: inset 0 -1.125em 0 #1aa4e6;
  color: #000;
}

.countries__country-info--link:focus {
  background: #fff;
  outline: none;
  background: #1aa4e6;
  color: #fff;
  box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.2);
}

@media (max-width: 700px) {
  .worldwide, .countries {
    background-color: lightblue;
    flex-direction: column;
  }

  .worldwide--info,
  .countries__country-info {
    width: 80%;
    margin-left: 10%;
  }

}

</style>