import React, { Component } from 'react'
import axios from 'axios'

class ShowMenu extends Component {
  state = {
    foodItems: [],
    message: {},
    orderId: ''
  }

  componentDidMount () {
    axios.get('/products').then(response => {
      this.setState({
        foodItems: response.data.products
      })
    })
  }

  async addToOrder (event) {
    let id = event.target.parentElement.parentElement.dataset.id
    let result
    if(this.state.orderId !== '') {
      result = await axios.put(`http://localhost:3000/api/v1/orders${this.state.orderId}`, {
      id: id
    })
    } else {
      result = await axios.post('http://localhost:3000/api/v1/orders', {
      id: id
    })
    this.setState({
      orderId: result.data.order_id
    })
    }
    this.setState({
      message: { id: id, message: result.data.message }
    })
  }

  render () {
    const foodItems = this.state.foodItems
    let menuList

    if (foodItems.length > 0) {
      menuList = foodItems.map(foodItem => {
        return (
          <>

              <div
                key={foodItem.id}
                id={`menu-item-${foodItem.id}`}
                data-id={foodItem.id}
                data-price={foodItem.price}
                class='row'
              >
                <div class='three wide column'>{foodItem.name}</div>
                <div class='ten wide column'>
                  {foodItem.description}
                  {parseInt(this.state.message.id) === foodItem.id && (
                    <p className='message'>{this.state.message.message}</p>
                  )}
                </div>
                <div class='one wide column'>{foodItem.price}</div>
                <div class='one wide column'>
                  <button id='button' onClick={this.addToOrder.bind(this)}>
                    Add to order
                  </button>
                </div>
              </div>
          </>
        )
      })
    }
    return (
      <>
        {this.state.orderId !== '' && <button>View order</button>}
        <div class='ui grid meny'>
        {menuList}
        </div>
      </>
    )
  }
}

export default ShowMenu
