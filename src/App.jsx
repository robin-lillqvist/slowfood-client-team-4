import React, { Component } from 'react'
// import axios from 'axios'
import ShowMenu from './components/ShowMenu'
import './App.css'

class App extends Component {
  // state = { foodItems: [] }

  // componentDidMount () {
  //   axios.get('menu.json').then(response => {
  //     this.setState({
  //       foodItems: response.data
  //     })
  //   })
  // }

  render () {
    // const foodItems = this.state.foodItems
    // let menuList

    // if (foodItems.length > 0) {
    //   menuList = foodItems.map(foodItem => {
    //     return (
    //       <>
    //         <div class='row'>
    //           <div class='five wide column'>{foodItem.name}</div>
    //           <div class='eight wide column'>{foodItem.desc}</div>
    //           <div class='two wide column'>{foodItem.price}</div>
    //         </div>
    //       </>
    //     )
    //   })
    // }

    return (
      <>
        <h1>Slowfood</h1>
        {/* <div class='ui three column centered grid'>{menuList}</div> */}
        <ShowMenu />
      </>
    )
  }
}

export default App
