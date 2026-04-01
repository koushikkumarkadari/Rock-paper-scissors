import styled from 'styled-components'

export const ContainerBig = styled.div`
  background-color: ${props => (props.lightTheme ? 'white' : 'black')};
  min-height: 100vh;
  max-height: auto;
`
export const Container = styled.div`
  background-color: ${props => (props.lightTheme ? 'white' : 'black')};
`
export const Text = styled.p`
  color: ${props => (props.lightTheme ? 'black' : 'white')};
`

export const CustomButton = styled.button``

export const Input = styled.input``

export const Image = styled.img``
