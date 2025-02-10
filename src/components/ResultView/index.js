import {DivContainer, CustomButton, Heading, Image} from './styledComponents'

const ResultView = props => {
  const {
    result,
    yourSelection,
    opponentSelection,
    onPlayAgain,
    choicesList,
  } = props
  const retry = () => {
    onPlayAgain()
  }
  const myImage = choicesList.find(each => each.id === yourSelection)
  const oppImage = choicesList.find(each => each.id === opponentSelection)
  const myChoice = myImage.imageUrl
  console.log(myChoice)
  const oppChoice = oppImage.imageUrl
  console.log(oppChoice)
  return (
    <DivContainer>
      <DivContainer as="ul" result>
        <DivContainer listItem as="li">
          <Heading>YOU</Heading>
          <Image src={myChoice} alt="your choice" />
        </DivContainer>
        <DivContainer listItem as="li">
          <Heading>OPPONENT</Heading>
          <Image alt="opponent choice" src={oppChoice} />
        </DivContainer>
      </DivContainer>
      <Heading as="p">{result}</Heading>
      <CustomButton onClick={retry} type="button">
        <Heading as="p" playAgainText>
          PLAY AGAIN
        </Heading>
      </CustomButton>
    </DivContainer>
  )
}
export default ResultView
