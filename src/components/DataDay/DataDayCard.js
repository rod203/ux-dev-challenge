import { Card, Rows } from './CardDataDay.styled.js'
import Today from '../TodayCounter/Today.js'

function DataDayCard (props) {

  return (
    <Card>
      <Rows>
        <h3>{props.type}</h3>
        <img src={props.icon}/>
      </Rows>
      <Rows>
        <h2>{props.counter}</h2>
        <Today dayCounter={props.percentage}/>
      </Rows>
    </Card>
  )
}

export default DataDayCard