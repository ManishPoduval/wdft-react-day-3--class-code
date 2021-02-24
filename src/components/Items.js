import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Spinner} from 'react-bootstrap'
import ItemDetail from './ItemDetail'
import Search from './Search'
import AddForm from './AddForm'

// destructure props in the parameter itself
function Items({onItemAdd}) {

    // create 3 states

    //state to toggle the form
    const [showForm, updateShowForm] = useState(false)

    // state to staore all the original books
    const [books, updateBooks] = useState([])

    // state to staore all the filtered books
    const [filteredBooks, updateFilteredBooks] = useState([])

    //Behaves like your componentDidMount
    useEffect(() => {
        axios.get('https://6035eac86496b9001749f90e.mockapi.io/items')
        .then((response) => {
              // update the `books` state  
              updateBooks(response.data)
              // update the `filteredBooks` state  
              updateFilteredBooks(response.data)
        })
    }, [])

 
    const handleAddForm = (event) => {
         // ALWAYS DO THIS FIRST. YOU KNOW WHY!
         event.preventDefault()

         // destructure your event 
         const {title, price} = event.target

         let newItem = { 
             title: title.value, 
             price: price.value
         }

         let updatedBooks = [ newItem, ...books]

         // toggle the form, to hide it
         updateShowForm(false)

         // update the books and filtered books
         updateBooks(updatedBooks)
         updateFilteredBooks(updatedBooks)

     }
 
    const handleChange = (event) => { 

         let searchText = event.target.value.toLowerCase()
 
         let filteredList = books.filter((singleBook) => {
             return singleBook.title.toLowerCase().includes(searchText)
         })
 
         updateFilteredBooks(filteredList)
     }
 
    const handleShowForm = () => {
        updateShowForm(true)
    }
    
    if (!books.length) {
        return  <Spinner animation="border" variant="danger" />
    }

    return (
        <div>
            <h1 >Lists</h1>
            <Search  myChange={handleChange}/>
            {
                showForm ? <AddForm onAdd={handleAddForm}/> :  <button onClick={handleShowForm}>Show</button>
            }
            {
                // we loop over the filtered books, not the original books
                filteredBooks.map((singleBook, index) => {
                    return <ItemDetail 
                    onItemAdd={onItemAdd}
                    key={index} 
                    book={singleBook} />
                })
            }
        </div>
    )
}

export default Items
