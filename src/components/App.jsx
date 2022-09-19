import { Component } from 'react';
import API from './GetSearchImages';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';

class App extends Component {
state = {
  items: [],
  searchQuery: '',
  currentPage: 1,
}

componentDidUpdate(_, prevState) {
  if (prevState.searchQuery !== this.state.searchQuery) {
    this.GetSearchImages()
  }
}

onChangeQuery = query => {
  this.setState({
    searchQuery: query,
    currentPage: 1,
    items: [],

  });
};

GetSearchImages = () => {
  const { currentPage, searchQuery } = this.state;
  const options = { searchQuery, currentPage };

  API.GetSearchImages(options)
 .then( items => { 
  this.setState(prevState => ({
  items: [...prevState.items, ...items],
  currentPage: prevState.currentPage + 1,
  }))
 })
} 

  render() {
  return (
    <div>
  <Searchbar onSubmit={this.onChangeQuery}/>
  <ImageGallery items={this.state.items}/>
  <ToastContainer/>
    </div>
  );
}
};

export default App;