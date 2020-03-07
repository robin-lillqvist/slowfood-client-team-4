import React, { Component } from 'react'
import axios from 'axios'

class ShowMenu extends Component {
  state = { 
    foodItems: [],
    message: {} 
  }

  componentDidMount () {
    axios.get('/products').then(response => {
      this.setState({
        foodItems: response.data.products
      })
    })
  }

  addToOrder() {
      let id= event.target.parentElement.dataset.id
    let result = await axios.post('http://localhost:3000/api/v1/orders', { id: id})
  }

  render (){
    const foodItems = this.state.foodItems
    let menuList

    if (foodItems.length > 0) {
      menuList = foodItems.map(foodItem => {
        return (
          <>
            <div key={foodItem.id} id={`menu-item-${foodItem.id}`} data-id={foodItem.id} data-price={foodItem.price} className='row'>
            {`${foodItem.name} ${foodItem.description} ${foodItem.price}`}
            <button id="button" onClick={this.addToOrder.bind(this)}>Add to order</button>
              {parseInt(this.state.message.id) === foodItem.id && <p class='message' >{this.state.message.message}</p>}
            </div>
          </>
        )
      })
    }
    return (
      <div>
        <div className='ui three column centered grid'>{menuList}</div>
      </div>
    )
  }
}

export default ShowMenu