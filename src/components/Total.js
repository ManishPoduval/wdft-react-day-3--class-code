import React, { Component } from 'react'

class Total extends Component {
    
    /*
    // You will get this props
    this.props = {
        items: Array
    }
    */

    render() {
        const {items} = this.props

        // calculate your total with some logic here
        let total = 0
        //Hint: Use .reduce()
        
        return (
            <div>
                <h1>Total</h1>
                {
                   items.map((singleItem) => {
                        return (<div>
    {singleItem.title} {singleItem.price} x {singleItem.quantity} = {singleItem.price * singleItem.quantity}
                            
                        </div>)
                    })
                }

                <div>Final Total is: {total}</div>
            </div>
        )
    }
}

export default Total
