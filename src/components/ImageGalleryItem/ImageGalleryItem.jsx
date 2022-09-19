
const ImageGalleryItem = ( {items} ) => {
return (
    items.map(({id, webformatURL, tags}) => (
        <li key={id}>
        <img src={webformatURL} alt={tags} />
      </li>
      ))
)
}

export default ImageGalleryItem; 