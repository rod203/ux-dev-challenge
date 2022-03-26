import styled from "styled-components"

const CounterDisplay = styled.div`
  color: #ffff;

  & .negative{
    color: hsl(356, 69%, 56%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & img{
      width:8px;
      height:4px;
      margin-right: 4px;
    }
  }

  & .positive{
    color: hsl(163, 72%, 41%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    & img{
      width:8px;
      height:4px;
      margin-right: 4px;
    }
  }
`

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