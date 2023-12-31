

// Define a constant BASE_URL
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Define a constant API_ID

const API_ID = "516b49fdbf891c5c237a43a3a975c8ed";

// Define a constant for UNITS

const UNITS = "metric";


class WeatherAPI {

    constructURL(userInput){
  
      this.apiURL = new URL(BASE_URL);
      
      this.apiURL.searchParams.append("q", userInput);
        
      this.apiURL.searchParams.append("appid",API_ID);

      this.apiURL.searchParams.append("units",UNITS);
      // appid
      // units
  
      return this.apiURL.toString();
  
    }
  
  
    async invokeURL(userInput){
        let api = await fetch(this.constructURL(userInput));
        let responseJson = await api.json();
        return responseJson;
    }
  
  }
  
  export {WeatherAPI}