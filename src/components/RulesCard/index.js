import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {CustomButton, Image, DivContainer} from './styledComponents'

const RulesCard = () => (
  <Popup trigger={<CustomButton type="button">RULES</CustomButton>} modal>
    {close => (
      <DivContainer>
        <CustomButton type="button" rule onClick={close}>
          <RiCloseLine color="white" size={30} />
        </CustomButton>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </DivContainer>
    )}
  </Popup>
)
export default RulesCard
