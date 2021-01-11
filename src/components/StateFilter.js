/*Methods for extracting the filter values so we can draw state checkboxes and apply filters for state when clicked*/
const extractor = (data) => {
    const states = data.map(e => e.state)
    return [...new Set(states)]
}

const applyFilter = (data, filters) => {
    if(filters.length === 0) {
        return data
    }
    return data.filter(restaurant => filters.indexOf(restaurant.state) !== -1)
}

export {extractor, applyFilter}