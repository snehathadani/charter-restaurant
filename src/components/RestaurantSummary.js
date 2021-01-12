const RestaurantSummary = ({restaurants})=> {
    return(
        <table>
            <thead>
                <tr><th>Name</th><th>City</th><th>State</th><th>Phone Number</th><th>Genres</th></tr>
            </thead>
            <tbody>
             {restaurants.sort((a, b) => a.name.localeCompare(b.name)).map(restaurant =>{
                 return (<tr key={restaurant.id}>
                     <td>{restaurant.name}</td>
                     <td>{restaurant.city}</td>
                     <td>{restaurant.state}</td>
                     <td>{restaurant.telephone}</td>
                     <td>{restaurant.genre}</td>
                 </tr>)
            })}
            </tbody>
        </table>
    )
}

export default RestaurantSummary;