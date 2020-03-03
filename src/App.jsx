import React from 'react'

var foodlist = {
                  dish1: ['potatis', 'fast', 98],
                  dish2: ['fisk', 'lax', 10],
                  dish3: ['kött', 'Entrecote', 150]
                }

const App = () => {
  // let showFoodlist

  // if (foodlist) {
  //   showFoodlist = (
  //     <>
  //       {foodlist.map(dish => {
  //         return (
  //           <div class='dish'>
  //             <div>{dish[0]}</div>
  //           </div>
  //         )
  //       })}
  //     </>
  //   )
  // }

  return (
    <>
      <h1>Slowfood</h1>
      <div className="foodlist">
        <div className="food">Potatis</div>
        <div className="description">Potatis plockad på dom hallänska vidderna</div>
        <div className="price">98</div>
      </div>
    </>
  )
}

export default App
