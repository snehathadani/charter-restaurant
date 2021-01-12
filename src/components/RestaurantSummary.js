import {useEffect, useState} from "react"
import Pagination from "./Pagination"

const RestaurantSummary = ({restaurants})=> {
    const [pages, setPages] = useState([])
    const [pageId, setPageId] = useState(0)
    useEffect(() => {
        let sorted =  restaurants.sort((a, b) => a.name.localeCompare(b.name))
        const pages = []
        for(let i = 0; i < sorted.length; i+=10) {
            const copiedSlice = sorted.slice(i, i + 10)
            const page = []
            for(let j = 0; j < copiedSlice.length; j++) {
                page.push({...copiedSlice[j]})
            }
            pages.push(page)
        }
        setPages(pages)
        setPageId(0)
    }, [restaurants])

    return(
        <div>
        <table className='restaurant-summary'>
            <thead>
                <tr><th>Name</th><th>City</th><th>State</th><th>Phone Number</th><th>Genres</th></tr>
            </thead>
            <tbody>
             {pages && pages.length > 0 && pages[pageId].map(restaurant =>{
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
        <Pagination itemCount={restaurants.length} pageSize = {10} currentPage={pageId + 1} onPageChange = {(id) => setPageId(id - 1)}/>
        </div>
    )
}

export default RestaurantSummary;