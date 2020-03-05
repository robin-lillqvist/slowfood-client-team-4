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
            <div class='row'>
              <div class='five wide column'>{foodItem.name}</div>
              <div class='eight wide column'>{foodItem.desc}</div>
              <div class='two wide column'>{foodItem.price}</div>
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
