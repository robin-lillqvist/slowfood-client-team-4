import React, { Component } from 'react'
import axios from 'axios'

export default class ShowMenu extends Component {
  state = { foodItems: [] }

  componentDidMount () {
    axios.get('menu.json').then(response => {
      this.setState({
        foodItems: response.data.products
      })
    })
  }

  render () {
    const foodItems = this.state.foodItems
    let menuList

    if (foodItems.length > 0) {
      menuList = foodItems.map(foodItem => {
        return (
          <>
            <div id='menu-item' class='row'>
              <div class='five wide column'>
                <div class='.meal_name'>{foodItem.name}</div>
              </div>
              <div class='eight wide column'>
                <div class='.meal_desc'>{foodItem.desc}</div>
              </div>
              <div class='two wide column'>
                <div class='.meal_price'>{foodItem.price}</div>
              </div>
            </div>
          </>
        )
      })
    }
    return (
      <div>
        <div class='ui three column centered grid'>{menuList}</div>
      </div>
    )
  }
}
