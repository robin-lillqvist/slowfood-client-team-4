import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

// let foodlist = [
//   ['potatis', 'plockad på dom hallänska vidderna', 98],
//   ['fisk', 'lax', 130],
//   ['kött', 'entrecote', 210],
//   ['kött', 'entrecote', 210],
//   ['kött', 'entrecote', 210],
//   ['kött', 'entrecote', 210],
//   ['kött', 'entrecote', 210],
//   ['kött', 'entrecote', 210],
//   ['kött', 'entrecote', 210],
//   ['kött', 'entrecote', 210],
//   ['kött', 'entrecote', 210],
//   ['kött', 'entrecote', 210]
// ]

class App extends Component {
  state = { foodItems: [] }

  render () {
    const foodItems = this.state.foodItems;
    let menuList;

    if (foodItems.length > 0) {
      menuList = foodItems.map(foodItem => {
        return (
          <>
            <div class='meal_name'>{foodItem.name}</div>
            <div class='meal_desc'>{foodItem.desc}</div>
            <div class='meal_price'>{foodItem.price}</div>
            </>
        );
      });
    }

    debugger

    return (
      <>
        <h1>Slowfood</h1>
        <div className='foodlist'>{menuList}</div>
        
      </>
    )
  }

  componentDidMount () {
    axios.get('./data/menu.json')
    .then(response => {
      this.setState({
        foodItems: response.data
      })
    })
  }
}

export default App
