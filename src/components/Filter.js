import React, {useEffect, useState} from "react";
/*
This is a generic filter component that takes in all the data and produces the filters from the data
As things are checked it appies the filter and calls the parent component back with the results
The appropriate methods for the columns are included in their own java script files
See StateFilter, GenreFilter...
*/ 
const Filter = ({data, extractor, applyFilter, filterResults})=> {
    useEffect(() => {
        const columnValues = extractor(data)
        const checkedVals = columnValues.reduce((result, column) => { 
            result[column] = false;
            return result;
        }, {})
        setChecked(checkedVals)
    }, [data]);

    const [checked, setChecked] = useState({});

    const toggleState = (column) => {
        checked[column] = !checked[column] 
        setChecked(checked)
        //setChecked({[column]: !checked[column], ...checked}) //TODO this is nicer but doesnt work yet
        const checkedFields = Object.keys(checked).filter(col => checked[col])
        filterResults(applyFilter(data, checkedFields))
    }
    
    return (
        <ul>
        {Object.keys(checked).sort().map(column=> 
            <li key={column}>
                <input type='checkbox' checked = {checked[column]} name = {column} onChange ={() => toggleState(column)}/>
                <label>{column}</label>
            </li>
        )}
        </ul>);
}

export default Filter;