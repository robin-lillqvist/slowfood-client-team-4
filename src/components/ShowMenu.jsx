import React, { Component } from 'react'
import axios from 'axios'

class ShowMenu extends Component {
  state = {
    foodItems: [],
    message: {},
    orderId: '',
    showOrder: false
  }

  componentDidMount() {
    axios.get('/products').then(response => {
      this.setState({
        foodItems: response.data.products
      })
    })
  }

  async addToOrder(event) {

    let id = event.target.parentElement.parentElement.dataset.id
    let result
    if (this.state.orderId.hasOwnProperty('id')) {
      result = await axios.put(`http://localhost:3000/api/v1/orders/${this.state.orderId.id}`, { product_id: id })
    } else {
      result = await axios.post('http://localhost:3000/api/v1/orders/', { product_id: id })
    }
    this.setState({ message: { id: id, message: result.data.message }, orderId: result.data.order })
  }


  render() {
    const foodItems = this.state.foodItems
    let menuList, orderDetails

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

    if (this.state.orderId.hasOwnProperty('products')) {
			orderDetails = this.state.orderId.products.map(item => {
				return <li key={item.name}>{`${item.amount} x ${item.name}`}</li>
			})
		}
    return (
      <>
        {this.state.orderId !== '' &&
          <button onClick={() => this.setState({ showOrder: !this.state.showOrder })}>View order</button>
        }
        {
          this.state.showOrder &&
          <>
            <ul id="order-details">
              {orderDetails}
            </ul>
            <p>To pay: {this.state.orderId.order_total}</p>
          </>
        }
        <div class='ui grid meny'>
          {menuList}
        </div>
      </>
    )
  }
}

export default ShowMenu
