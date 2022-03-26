import React from 'react'
import {ContentModal, ChartContainer, DataModal, ModalHeader, ContainerData, Close, Data, User, CloseBtn} from './Modal.styled'
import Today from '../MediaCard/Today'
import { IconMedia } from "../MediaCard/Card.styled"
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'


export const Modal = ({props, handleClick}) => {

  const options  = { 
    colorAxis:[{
      lineColor:'red',
    }],
    chart: {
      styledMode: true,
      type: 'spline',
      spacingBottom: 40,
      spacingLeft: 40,
      spacingRight: 50,
      spacingTop: 50,
      borderRadius:16,
      height: null,
      width:null, 
    },
    tooltip: {
      headerFormat: '{point.x} new ',
      pointFormat: 'followers',
    },

    title: {
      text: 'May 4 - May 13',
      align: 'left',
      x: 23,
      y: 0
    },
    series: [{
      data: [5,3,4,4,2,6,8,9,10,9,10,12,12]
    }],
  
    }
  return (
    <ContentModal>
      <DataModal>
        <ModalHeader>
          <Close>
            <CloseBtn onClick={handleClick}>
              <svg width="13" height="12" viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.6066 0.292893C11.2161 -0.0976311 10.5829 -0.0976311 10.1924 0.292893L6.08577 4.39951L1.97917 0.292906C1.58865 -0.0976187 0.955483 -0.0976187 0.564959 0.292906C0.174435 0.68343 0.174435 1.31659 0.564959 1.70712L4.67156 5.81372L0.292893 10.1924C-0.0976311 10.5829 -0.0976311 11.2161 0.292893 11.6066C0.683417 11.9971 1.31658 11.9971 1.70711 11.6066L6.08577 7.22793L10.4645 11.6066C10.855 11.9971 11.4881 11.9971 11.8787 11.6066C12.2692 11.2161 12.2692 10.5829 11.8787 10.1924L7.49999 5.81372L11.6066 1.70711C11.9971 1.31658 11.9971 0.683417 11.6066 0.292893Z"/>
              </svg> 
            </CloseBtn>
          </Close>
          <h2>{props.socialMedia} {props.type}</h2>
          <User>
            <IconMedia src={props.icon} alt={props.socialMedia}/> 
            <h3>{props.userName}</h3>
          </User>
          <ContainerData>
            <Data>
              <h2>{props.TotalCounter}</h2> 
              <p>Total<br/>{props.type}
              </p>
            </Data>
            <Data>
              <Today dayCounter={props.lastDays}/>
              <p>New {props.type} in <br/> the past 10 days</p>
            </Data>
            <Data>
              <Today dayCounter={props.dayCounter}/>
              <p>New Followers<br/>TODAY</p>
            </Data>
          </ContainerData>
        </ModalHeader>
        <ChartContainer>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </ChartContainer>
      </DataModal>
    </ContentModal>
  )
}
