import React, {useState,useEffect} from "react";
import axios from "axios";
import './App.css';
import RestaurantSummary from "./components/RestaurantSummary";
import Filter from "./components/Filter";
import {extractor as stateExtractor, applyFilter as applyStateFilter} from "./components/StateFilter"
import {extractor as genreExtractor, applyFilter as applyGenreFilter} from "./components/GenreFilter"


const API_KEY = process.env.REACT_APP_API_KEY 
function App() {
  /* The Apps seems to be on the client side, so therefore there is no need to constantly download the array. Hence storing in restaurantData for a lifetime of an application */
  const [restaurantData,setRestaurantData] = useState([]);

  const [filteredResults, setFilteredResults ] = useState([]);

  const [filterResultByCategory, setFilterResultByCategory] = useState({})

  useEffect(()=>{
    const fetchData = async()=> {
      const result = await axios(
        `https://code-challenge.spectrumtoolbox.com/api/restaurants`, {
          headers: {
            Authorization: API_KEY,
          }
        }
      )
      setRestaurantData(result.data);
      setFilteredResults([...result.data]);
    }
    fetchData();
  }, [])

  /**Combine the filter results
   * This function keeps the search results by category(state, genre) in state and as the individual filters are applied the function joins the results by the 
   * restaurant id.
  */
  const setFilterResults = (results, category) => {
    if(results.length === restaurantData.length) {
      //filter for a category has been removed 
      delete filterResultByCategory[category]
      setFilterResultByCategory(filterResultByCategory)
    } 
   
    if(Object.keys(filterResultByCategory) === 0) {
      //if there are no filters applied then show all the results
      setFilteredResults(restaurantData)
    }
    else {
      //otherwise apply the results by reducing over the categories joining 2 at a time
      filterResultByCategory[category] = results
      setFilterResultByCategory(filterResultByCategory)
      const filteredEntries = Object.values(filterResultByCategory).reduce((acc, v) =>{
        const resultRestaurants = v.map(restaurantDetails => restaurantDetails.id)
        return(acc.filter(restaurantDetails => resultRestaurants.indexOf(restaurantDetails.id) !== -1))
      }, restaurantData)
      setFilteredResults(filteredEntries)
    }
  }

  return (
    <div className="App">
     <Filter data = {restaurantData} 
             extractor={stateExtractor} 
             applyFilter={applyStateFilter} 
             filterResults={(result) => setFilterResults(result, 'state')} />
     <Filter data = {restaurantData} 
             extractor={genreExtractor} 
             applyFilter={applyGenreFilter} 
             filterResults={(result) => setFilterResults(result, 'genre')} />
     <RestaurantSummary restaurants = {filteredResults}/>
    </div>
  );
}

export default App;