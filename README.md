# COVID-19 info - WIP

Project made in Vue.js

[Official webpage](https://covid19api.com/) of  the API.


⬇⬇ Examples of API calls ⬇⬇ 

Base URL: https://api.covid19tracking.narrativa.com/

Dates must be in YYYY-DD-MM

| URL | Description |
| ------ | ----------- |
| /api/{date} | Data from each country of the world in a specific date |
| /api?date_from={date}&date_to={date} | Data from every country in a date range |
| /api/{date}/country/{country} | Data from a specific country in a specific date |
| /api/country/{country}?date_from={date}&date_to={date} | Data from a specific country in a date range |
| /api/{date}/country/{country}/region/{region} | Data from a region in a specific date |
| /api/country/{country}/region/{region}?date_from={date}&date_to={date} | Data from a region in a date range |


## Project setup
First step:
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




