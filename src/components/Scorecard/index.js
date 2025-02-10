import {DivContainer, Heading} from './styledComponents'

const Scorecard = props => {
  const {score} = props
  return (
    <DivContainer main>
      <DivContainer>
        <Heading>Rock Paper Scissors</Heading>
      </DivContainer>
      <DivContainer score>
        <Heading as="p" score>
          Score
        </Heading>
        <Heading as="p" score>
          {score}
        </Heading>
      </DivContainer>
    </DivContainer>
  )
}
export default Scorecard
