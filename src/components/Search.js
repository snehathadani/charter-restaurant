import {useState} from 'react'

const Search = ({data, applySearchCriteria}) => {
    const [searchText, setSearchText] = useState('')

    const passFilter = (restaurant) => {
        if(searchText.length === 0) {
            return true
        }
        return (restaurant.name.toLowerCase() === searchText.toLowerCase() || 
            restaurant.city.toLowerCase() === searchText.toLowerCase() || 
            restaurant.genre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        )
    }

    const handleChange = (e) => {
        setSearchText(e.target.value)
        if(e.target.value.length === 0) {
            applySearchCriteria(data)
        }
    }

    const submitSearch = (e) => {
        e.preventDefault()
        applySearchCriteria(data.filter(passFilter))
    }
    return (
        <form className="search" onSubmit={submitSearch}>
            <input type="text" name="search" placeholder="Search" value={searchText} onChange={handleChange}/>
            <input type="submit" value="Search" className="submit"/>
        </form>
    )
}

export default Search