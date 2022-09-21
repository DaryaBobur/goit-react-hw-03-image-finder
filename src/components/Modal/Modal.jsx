// import PropTypes from 'prop-types';

const Modal = ({items}) => {
  return (
    <div className="overlay">
      <div className="modal">
        {items.map(({id, tags, largeImageURL}) => (<img key={id} src={largeImageURL} alt={tags} />))}  
      </div>
    </div>
  )
}

export default Modal;