import { Component } from 'react';


class Searchbar extends Component {
state = {
    searchQuery: '',
}

handleSearchQuery = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.resetForm();
    console.log(this.state.searchQuery)
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