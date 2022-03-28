import { Modal } from '../Modal/Modal'
import {Card, IconMedia, User, FollowersCounter} from "./Card.styled"
import { useState } from "react"
import Today from '../TodayCounter/Today'

function MediaCard({props}) {

  const [modal, setModal] = useState(false);

  const handleClick = () => {
   setModal(!modal);
  }

  return (
    <>
      { modal && <Modal props={props} handleClick={handleClick}/> }
      <Card onClick={handleClick} borderTop={props.colorBar}>
        <User>
          <IconMedia src={props.icon} alt={props.socialMedia}/>
          <h2>{props.userName}</h2>
        </User>
        <FollowersCounter>
          <h1>{props.TotalCounter}</h1>
          <h3>{props.type.toUpperCase()}</h3>
        </FollowersCounter>
        <Today dayCounter={props.dayCounter}/>
      </Card>
    </>
  )
}

export default MediaCard