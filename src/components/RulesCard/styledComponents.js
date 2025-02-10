import styled from 'styled-components'

export const CustomButton = styled.button`
  background-color: ${props => (props.rule ? '#223a5f' : 'white')};
  border: transparent;
  height: 36px;
  width: 100px;
  font-weight: bold;
  border-radius: 5px;
  align-self: flex-end;
  color: #223a5f;
  pointer: cursor;
  margin: 0px 0px 10px 0px;
`
export const Image = styled.img`
  width: 80%;
  align-self: center;
  @media (max-width: 767px) {
    width: 120%;
  }
`

export const DivContainer = styled.div`
  background-color: white;
  min-height: 100vh;
  max-height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    min-height: 50vh;
    align-self: center;
    width: 90%;
    justify-self: center;
  }
`
