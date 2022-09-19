import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

const ImageGallery =({items}) => {
    return (
    <ul className="gallery">
    <ImageGalleryItem items={items}/>
    </ul>
    )
}

export default ImageGallery;