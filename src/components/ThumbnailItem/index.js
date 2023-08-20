import './index.css'

const ThumbnailItem = props => {
  const {changeImg, isActive, imgDetails} = props
  const {id, thumbnailUrl, thumbnailAltText} = imgDetails
  const changer = () => {
    changeImg(id)
  }
  const inactiveClassName = isActive ? ' ' : 'show-opacity'
  return (
    <li className={`each-thumbnail ${inactiveClassName}`} onClick={changer}>
      <button type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-img"
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
