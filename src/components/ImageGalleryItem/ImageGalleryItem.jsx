import PropTypes from 'prop-types';
import { ImageGalleryCard, Image } from './ImageGalleryItemStyled';

const ImageGalleryItem = ( {items} ) => {
  return (
    items.map(({id, webformatURL, tags}) => (
      <ImageGalleryCard key={id}>
        <Image src={webformatURL} alt={tags}/>
      </ImageGalleryCard>
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