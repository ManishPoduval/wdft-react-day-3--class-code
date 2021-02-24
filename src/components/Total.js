import React from 'react'

// destructure props in the parameter itself
function Total({items}) {

    let total = 0

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

export default Total
