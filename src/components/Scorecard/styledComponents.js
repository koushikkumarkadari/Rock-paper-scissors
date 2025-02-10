import styled from 'styled-components'

export const Heading = styled.h1`
  margin: 5px;
  color: ${props => (props.score ? '#223a5f' : 'white')};
  font-family: ${props => (props.score ? 'Roboto' : 'Bree Serif')};
  font-weight: bold;
  font-size: xx-large;
  @media (max-width: 767px) {
    font-size: larger;
    font-weight: bold;
  }
`
export const DivContainer = styled.div`
  background-color: ${props => (props.score ? 'white' : '#223a5f')};
  display: flex;
  flex-direction: ${props => (props.main ? 'row' : 'column')};
  justify-content: ${props => (props.main ? 'space-between' : 'center')};
  align-items: ${props => (props.main ? 'center' : 'center')};
  border-radius: 20px;
  padding: ${props => (props.main ? '20px' : '')}${props => (props.score ? '20px' : '')};
  border: ${props => (props.main ? '1px solid white' : '')};
`
