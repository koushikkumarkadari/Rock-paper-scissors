import styled from 'styled-components'

export const UnOrderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px;
`

export const CustomButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Image = styled.img`
  width: 50%;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const ListItem = styled.li`
  width: 40%;
`
