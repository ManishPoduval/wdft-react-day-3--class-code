import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import Total from './components/Total'
import Items from './components/Items'

function App() {

  //create a state to store all times to be shown on the right hand side
  const [totalItems, updateItems] = useState([])

  const handleAddItem = (book, quantity) => {
    // use spread operators to create a new object
    let myItem = {...book, quantity}

    //add a new item to the `totalItems` state
    updateItems([...totalItems, myItem])
  }

  return (
    <Container>
      <Row>
        <Col>
          <Items onItemAdd={handleAddItem}/>
        </Col>
        <Col>
          <Total items={totalItems} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
