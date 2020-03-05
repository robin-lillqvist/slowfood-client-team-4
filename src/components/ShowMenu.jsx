import React, { Component } from 'react'
import axios from 'axios'

export default class ShowMenu extends Component {
  state = { 
    foodItems: [] 
  }

  componentDidMount () {
    axios.get('/products').then(response => {
      debugger
      this.setState({
        foodItems: response.data.products
      })
    })
  }

  render (){
    const foodItems = this.state.foodItems
    let menuList

    if (foodItems.length > 0) {
      menuList = foodItems.map(foodItem => {
        return (
          <>
            <div key={foodItem.id} id='menu-item' className='row'>
              <div className='five wide column'>
                <div className='.meal_name'>{foodItem.name}</div>
              </div>
              <div className='eight wide column'>
                <div className='.meal_desc'>{foodItem.description}</div>
              </div>
              <div className='two wide column'>
                <div className='.meal_price'>{foodItem.price}</div>
              </div>
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
