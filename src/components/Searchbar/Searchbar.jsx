import { Component } from 'react';
import { toast } from 'react-toastify';


class Searchbar extends Component {
  state = {
    searchQuery: '',
  }

  handleSearchQuery = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if(this.state.searchQuery.trim() === '') {
      toast.error('Введіть слово для пошуку зображень!')
    }

    this.props.onSubmit(this.state.searchQuery);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({searchQuery: ''});
  }

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
      
          <button type="submit">
            <span>Search</span>
          </button>
      
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearchQuery}
            name="searchQuery"
            value={this.state.searchQuery}
          />
        </form>
      </header>
    )
  }
}

export default Searchbar;