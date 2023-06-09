// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="img-container">
      <img className="destination-img" src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
