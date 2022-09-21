import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

const ImageGallery =({items}) => {
    return (
        <ul className="gallery">
            <ImageGalleryItem 
              items={items}
            />
        </ul>
    )  
}

ImageGallery.propTypes = {
    items: PropTypes.array.isRequired,
}

export default ImageGallery;