import {ListItem, UnOrderedList, Image, CustomButton} from './styledComponents'

const GameView = props => {
  const {choicesList, onSelect} = props
  return (
    <div>
      <UnOrderedList>
        {choicesList.map(each => {
          const {id, imageUrl} = each
          const onSelectOption = () => {
            onSelect(id)
          }
          const idInLowerString = id.toLowerCase()
          return (
            <ListItem key={id}>
              <CustomButton
                data-testid={`${idInLowerString}Button`}
                onClick={onSelectOption}
                type="button"
              >
                <Image alt={id} src={imageUrl} />
              </CustomButton>
            </ListItem>
          )
        })}
      </UnOrderedList>
    </div>
  )
}
export default GameView
