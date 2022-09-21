import { Component } from 'react';

import api from '../services/getSearchImages';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Vortex } from  'react-loader-spinner';


class App extends Component {
  state = {
    items: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    error: null,
    isOpenModal: false,
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


  GetSearchImages = async () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };
      try {
        this.setState({ isLoading: true });

        const items = await api.getSearchImages(options);

        this.setState(prevState => ({
        items: [...prevState.items, ...items],
        currentPage: prevState.currentPage + 1,
        }));
      } 
      catch (error) {
        this.setState({ error: true });
        console.log(error);
      } 
      finally {
        this.setState({ isLoading: false });
      }
  }

  clickPicture =() => {
    this.setState({ isOpenModal: true });
  }

  render() {
    const {items, isLoading } = this.state;
    const {onChangeQuery, GetSearchImages} = this;

    return (
      <div>
        <Searchbar 
          onSubmit={onChangeQuery}
        />

        <ImageGallery 
          items={items} 
        />

        {items.length > 0 && 
          <Button 
            onClick={GetSearchImages}
          />
        }

        {isLoading && 
          <Vortex 
            visible={true} 
            height="150" 
            width="150"
          />
        }

        <ToastContainer 
          autoClose={3000} 
          theme={'colored'}
        />

      </div>
    );
  }
};

export default App;