import styled from 'styled-components';

export const ContentModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000d1;
  z-index:999;
  display:flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms cubic-bezier(0.250, 0.460, 0.450, 0.940);;
`
export const DataModal = styled.div`
  z-index: 1000;
  position: relative;
  margin: auto 50px;
  background-color: ${(props) => props.theme.chart};
  border-radius: 16px;
  width:100%;
  max-width:1002px;
  height:100%;
  max-height:550px;
  transition: all 300ms cubic-bezier(0.250, 0.460, 0.450, 0.940);
`
export const CloseBtn = styled.div`
  margin: 28px 28px 0px 0px;
  cursor:pointer;
  font-weight:700;
  font-size:32px;
  
  & > svg{
    color: ${(props) => props.theme.whiteText};
  }
  & > path{
    color: ${(props) => props.theme.whiteText};
  }
`
export const User = styled.div`
  display:flex;
  flex-direction:row;
  margin-bottom:34px;
  font-weight:700;
`
export const ContainerData = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  gap: 20px 52px;

`
export const Data = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  font-size:40px;
  font-weight:700;

  & > h2 {
    font-size:40px;
  }

  & > p {
    font-size:14px;
    line-height: 1.4;
    max-width:140px;
    color: ${(props) => props.theme.whiteText};
    margin-left:15px;
    font-weight:400;
  }

  & .negative > img {
    margin-right:10px;
    width: 12px;
    height: 6px;
  }
`

export const ModalHeader = styled.div`
  display:flex;
  flex-direction:column;
  margin: 40px 40px 26px 40px;

  & > h2 {
    text-transform: capitalize;
    margin-bottom:13px;
    line-height:1.2;
  }
`

export const Close = styled.div`
  position:absolute;
  right:0;
  top:0;
`
export const ChartContainer = styled.div`
  margin: 0 auto;
  width:100%;
  height:

.highcharts-background {
  fill:${(props) => props.theme.chartBackground};
}
.highcharts-tooltip-box{
  fill: ${(props) => props.theme.chartBackground}
}
.highcharts-grid-line{
  stroke-width: 2px;
      stroke: ${(props) => props.theme.chartLine};
      stroke-dasharray: 1, 7;
}
  .highcharts-xaxis-grid .highcharts-grid-line {
      stroke-width: 2px;
      stroke: ${(props) => props.theme.chartLine};
  }
  .highcharts-axis-line{
    stroke-width: 1px;
      stroke: ${(props) => props.theme.chartLine};
  }
  .highcharts-xaxis .highcharts-tick {
      stroke-width: 0px;
  }

  .highcharts-tooltip text{
    fill: ${(props) => props.theme.chartLine};
  }

  .highcharts-minor-grid-line {
      stroke-dasharray: 2, 2;
  }
  .highcharts-axis-labels{
    fill: #8B97C6;
  }
  .highcharts-title {
    fill: #8B97C6;
    font-size: 18px;
  }
  .highcharts-color-0{
    fill: ${(props) => props.theme.chartBackground};
    stroke: #908CD8;
  }
  .highcharts-legend{
    display:none;
  }
  .highcharts-axis-title{
    display:none;
  }
  .highcharts-credits{
    display:none;
  }
  .highcharts-point{
    stroke-width:2px;
  }
  .highcharts-minor-grid-line {
    stroke: red;
  }

`