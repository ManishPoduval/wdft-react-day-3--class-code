import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'

class ItemDetail extends Component {
    /*
    // This is how your props will look like
    this.props = {
        onItemAdd: function, 
        book: {
            title: '',
            price: 12
        }
    }
    */
    
   // we store the quantity in state
   //this is done so that when the user clicks the Add button, we can send the quantity from the state itself 
   state = {
       quantity: 1
   } 

   // Track every change in the input
   handleQuantity = (event) => {
        this.setState({
            quantity: event.target.value
        })
   }

    render() {
        const {book,onItemAdd} = this.props
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        {book.price}
                        <input onChange={this.handleQuantity} type="number" />
                    </Card.Text>
                    <Button onClick={() => { onItemAdd(book, this.state.quantity ) } } variant="primary">Add</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ItemDetail
