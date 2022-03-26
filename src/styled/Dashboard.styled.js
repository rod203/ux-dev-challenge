import styled from 'styled-components';

export const Dashboard = styled.div`
    max-width:1280px;
    width:80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    aling-items: center;

    .topBg {
        width:100%;
        height:380px;
        background-color: ${(props) => props.theme.topBackgroundPattern};
        position:absolute;
        top:0;
        left:0;
        z-index:-1;
        transition: all 300ms cubic-bezier(0.250, 0.460, 0.450, 0.940);
        @media (min-width: 650px) {
            height:240px;
        }
    }
`

export const OverviewTitel = styled.div`
    margin: 44px 0 24px 0;
`