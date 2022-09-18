import { Component } from 'react';
import GetSearchImages from './GetSearchImages';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
state = {
  items: [],
  searchQuery: ''
}

handleFormSubmit = searchQuery => {
  this.setState({ searchQuery });
};


// componentDidUpdate(prevProps, prevState) {
// }

  render() {
  return (
    <div>
  <Searchbar onSubmit={this.handleFormSubmit}/>
  <ImageGallery />
    </div>
  );
}
};

export default App;