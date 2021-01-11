import React, {useState,useEffect} from "react";
import axios from "axios";
import './App.css';
import RestaurantSummary from "./components/RestaurantSummary";

const API_KEY = process.env.REACT_APP_API_KEY 
function App() {
  /* The Apps seems to be on the client side, so therefore there is no need to constantly download the array. Hence storing in restaurantData for a lifetime of an application */
  let restaurantData = [];
  const [filteredResults, setfilteredResults ] = useState([]);

  useEffect(()=>{
    const fetchData = async()=> {
      const result = await axios(
        `https://code-challenge.spectrumtoolbox.com/api/restaurants`, {
          headers: {
            Authorization: API_KEY,
          }
        }
      )
      restaurantData = result.data;
      console.log(restaurantData)
      setfilteredResults([...restaurantData]);
    }
      fetchData();
  }, [])
  return (
    <div className="App">
    
     <RestaurantSummary restaurants ={filteredResults}/>
    </div>
  );
}

export default App;