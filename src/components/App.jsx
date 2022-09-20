import { Component } from 'react';
import API from './GetSearchImages';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './Button/Button';
import { Vortex } from  'react-loader-spinner';



class App extends Component {
state = {
  items: [],
  searchQuery: '',
  currentPage: 1,
  isLoading: false,
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

  this.setState({ isLoading: true });
  setTimeout(() => {
    API.GetSearchImages(options)
    .then( items => { 
     this.setState(prevState => ({
     items: [...prevState.items, ...items],
     currentPage: prevState.currentPage + 1,
     }))
    }).catch(console.error()).finally(() => this.setState({ isLoading: false }))
  }, 2000);
//   API.GetSearchImages(options)
//  .then( items => { 
//   this.setState(prevState => ({
//   items: [...prevState.items, ...items],
//   currentPage: prevState.currentPage + 1,
//   }))
//  }).catch(console.error()).finally(() => this.setState({ isLoading: false }))
} 

  render() {
  return (
    <div>
  <Searchbar onSubmit={this.onChangeQuery}/>
  <ImageGallery items={this.state.items}/>
  {this.state.items.length > 0 && <Button onClick={this.GetSearchImages}/>}
   {this.state.isLoading && <Vortex visible={true} height="150" width="150"/>}
  <ToastContainer 
  autoClose={3000} 
  theme={'colored'}
  />

    </div>
  );
}
};

export default App;