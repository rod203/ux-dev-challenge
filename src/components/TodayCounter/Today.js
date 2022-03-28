import {CounterDisplay } from "./Today.styled"

function Today ({dayCounter}) {

  const detect = Math.sign(dayCounter);

  return(
    <CounterDisplay>
      { detect == -1 ?
        <p className="negative">
          <img src="./assets/icon-down.svg"/>
          {dayCounter * -1}
        </p>
        :
        <p className="positive">
          <img src="./assets/icon-up.svg"/>
          {dayCounter}
        </p> 
      }
    </CounterDisplay>
  )
};

export default Today