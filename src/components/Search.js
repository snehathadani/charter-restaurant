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
    return (<form onSubmit={submitSearch}>
        <input type="text" name="search" value={searchText} onChange={handleChange}/>
        <input type="submit" value="Search"/>
    </form>)
}

export default Search