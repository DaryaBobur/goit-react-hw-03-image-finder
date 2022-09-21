import PropTypes from 'prop-types';

const ImageGalleryItem = ( {items} ) => {
  return (
    items.map(({id, webformatURL, tags}) => (
      <li key={id}>
        <img src={webformatURL} alt={tags} />
      </li>
    ))
  )
}

ImageGalleryItem.propTypes = {
  items: PropTypes.array,
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
}

export default ImageGalleryItem; 