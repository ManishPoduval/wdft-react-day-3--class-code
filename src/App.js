import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import Total from './components/Total'
import Items from './components/Items'

class App extends Component {


  // This state is for all items on the right hand side in the screen
  state = {
    totalItems: []
  }


  handleAddItem = (book, quantity) => {
    console.log(book)
    console.log(quantity)

    //let myItem = {...book, quantity}

    // Easy way
    let myItem = {
      title: book.title, 
      price: book.price,
      quantity: quantity
    }

    //Always update the state
    this.setState({
      totalItems: [...this.state.totalItems, myItem]
    })
  }

  // We do prop drilling
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Items onItemAdd={this.handleAddItem}/>
          </Col>
          <Col>
            <Total items={this.state.totalItems} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App 