import React, { Component } from 'react'

class AddForm extends Component {

    /*
        // your props will look like this
        this.props = {
            onAdd: function
        }

    */

    render() {
        const {onAdd} = this.props
        return (
            <form onSubmit={onAdd}>
                <input name="title" type="text" placeholder="Enter title" />
                <input name="price" type="number" />
                <button type="submit" >Add Item</button>
            </form>
        )
    }
}

export default AddForm
