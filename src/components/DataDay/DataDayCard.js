import { Card, Rows } from './Card.styled.js'
import Today from '../MediaCard/Today.js'

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