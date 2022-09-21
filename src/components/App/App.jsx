import { Component } from 'react';

import api from '../../services/getSearchImages';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MagnifyingGlass } from  'react-loader-spinner';
import { ContainerApp } from './AppStyled';

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

    else if(prevState.items !== this.state.items && this.state.items.length === 0) {
      toast.error('Sorry, there are no images matching your search query. Please try again.');
      return; 
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
        console.log(error.message);
      } 
      finally {
        this.setState({ isLoading: false });
      }
  }

  render() {
    const {items, isLoading } = this.state;
    const {onChangeQuery, GetSearchImages} = this;

    return (
      <ContainerApp>
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
          <MagnifyingGlass 
            visible={true} 
            height="150" 
            width="150"
            color='black'
            wrapperStyle={{marginRight: 'auto',
            marginLeft: 'auto'}}
          />
        }

        <ToastContainer 
          autoClose={3000} 
          theme={'colored'}
        />

      </ContainerApp>
    );
  }
};

export default App;