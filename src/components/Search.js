import React from 'react'

// destructure props in the parameter itself
function Search({myChange}) {
    return (
        <div >
           <input  onChange={myChange} type="text" placeholder="Search book name"/> 
        </div>
    )
}

export default Search