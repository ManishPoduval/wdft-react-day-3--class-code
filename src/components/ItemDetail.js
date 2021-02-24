import React, {useState} from 'react'
import {Card, Button} from 'react-bootstrap'

// destructure props in the parameter itself
function ItemDetail({book, onItemAdd}) {

    //create a state that keeps a track of all the quantity
    const [quantity, updateQuantity] = useState(1)

    // event handler that updates the state at every onChange event trigger
    const handleQuantity = (event) => {
        updateQuantity(event.target.value)
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                    {book.price}
                    <input onChange={handleQuantity} type="number" />
                </Card.Text>
                <Button onClick={() => { onItemAdd(book, quantity ) } } variant="primary">Add</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail
