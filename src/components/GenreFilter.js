
/*Methods for extracting the filter values so we can draw genre checkboxes and apply filters for genres when clicked*/
const extractor = (data) => {
    const genres = data.flatMap(e => e.genre.split(','))
    return [...new Set(genres)]
}

const applyFilter = (data, filters) => {
    if(filters.length === 0) {
        return data
    }
    return data.filter(restaurant => filters.filter(f => restaurant.genre.indexOf(f) !== -1).length !== 0)
}

export {extractor, applyFilter}