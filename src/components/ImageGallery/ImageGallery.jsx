import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Modal from "components/Modal/Modal";
const ImageGallery =({items}) => {
    return (
    <ul className="gallery">
    <ImageGalleryItem items={items}/>
    <Modal items={items}/>
    </ul>

    )
    
}

export default ImageGallery;