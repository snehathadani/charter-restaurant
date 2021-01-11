import React from "react";

const RestaurantSummary = ({restaurants})=> {
    return(
        <table>
            <th>Name</th> <th>City</th> <th>State</th> <th>Phone Number</th> <th>Genres</th>
            
             {restaurants.sort((a, b) => a.name.localeCompare(b.name)).map(restaurant =>{
                 return (<tr>
                     <td>{restaurant.name}</td>
                     <td>{restaurant.city}</td>
                     <td>{restaurant.state}</td>
                     <td>{restaurant.telephone}</td>
                     <td>{restaurant.genre}</td>
                 </tr>)
            })}
        </table>
    )
}

export default RestaurantSummary;