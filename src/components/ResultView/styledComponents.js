import styled from 'styled-components'

export const DivContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.result ? 'row' : 'column')};
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  list-style-type: none;
  width: ${props => props.listItem && '50%'};
`
export const CustomButton = styled.button`
  background-color: white;
  border: transparent;
  color: #223a5f;
  border-radius: 10px;
  align-self: center;
  width: 200px;
  height: 50px;
  font-weight: bold;
  font-family: Bree serif;
  font-size: larger;
  margin-top: 20px;
  padding: 0px;
`
export const Heading = styled.h1`
  font-family: ${props => (props.playAgainText ? 'Bree Serif' : 'Roboto')};
  margin: 5px;
  color: ${props => (props.playAgainText ? '#223a5f' : 'white')};
  font-size: ${props => (props.playAgainText ? 'larger' : 'xx-large')};
  font-weight: bold;
  @media (max-width: 767px) {
    font-size: medium;
  }
`

export const Image = styled.img`
  width: 50%;
  @media (max-width: 767px) {
    width: 100%;
  }
`
