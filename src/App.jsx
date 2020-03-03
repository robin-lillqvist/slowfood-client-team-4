import React from 'react'

var foodlist = {
                  dish1: ['potatis', 'fast', 98],
                  dish2: ['fisk', 'lax', 10],
                  dish3: ['kött', 'Entrecote', 150]
                }

const App = () => {
  let showFoodlist

  if (foodlist) {
    showFoodlist = (
      <>
        {foodlist.map(dish => {
          return (
            <div class='dish'>
              <div>{dish[0]}</div>
            </div>
          )
        })}
      </>
    )
  }

  foodlist.forEach(currentItem => {})

  return (
    <>
      <h1>Slowfood</h1>

      {showFoodlist}
    </>
  )
}

export default App
