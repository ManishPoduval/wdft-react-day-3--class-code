import React, { Component } from 'react'

class Search extends Component {

    /*
        // This is how your props will look like
        this.props = {
            myChange: function
        }

    */

    render() {
        return (
            <div >
               <input  onChange={this.props.myChange} type="text" placeholder="Search book name"/> 
            </div>
        )
    }
}

export default Search
