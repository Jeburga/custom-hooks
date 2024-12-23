import { useState } from "react"

export const useCounter = (inicialValue = 10) => {
  const [ counter, setCounter ] = useState( inicialValue )

    const increment = () => {
        setCounter( counter + 1 )
    }

    const decrement = () => {
        counter === 0 ? 0 : setCounter( counter - 1 );
    }

    const reset = () => {
        setCounter(inicialValue)
    }

  return {
    counter,
    increment,
    decrement,
    reset,
  }
}
