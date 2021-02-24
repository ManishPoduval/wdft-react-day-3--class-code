import React from 'react'

// destructure props in the parameter itself
function AddForm({onAdd}) {
    return (
        <form onSubmit={onAdd}>
            <input name="title" type="text" placeholder="Enter title" />
            <input name="price" type="number" />
            <button type="submit" >Add Item</button>
        </form>
    )
}

export default AddForm

