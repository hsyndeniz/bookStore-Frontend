import * as React from 'react';
import axios from 'axios';
import BookList from './components/bookList';
import SearchResults from './components/searchResults';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchValue: '',
      searchFilter: 'books',
      searchResults: {
        books: [],
        authors: [],
        publishers: []
      }
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }
  
  public handleSearch(e: any) {
    console.log(e.target.value);
    this.setState({ searchValue: e.target.value }, () => {
      if(this.state.searchValue.length > 2) {
        axios.get(`https://sharepoint-backend.herokuapp.com/api/search?book=${this.state.searchValue}`)
        .then(result => {
          console.log(result.data);
          this.setState({ searchResults: {
            books: result.data.books,
            authors: result.data.authors,
            publishers: result.data.publishers
          } });
        }).catch(error => {
          console.log(error);
        })
      }
    });
  }

  public handleFilter(e: any) {    
    this.setState({ searchFilter: e.target.value });
  }

  public render() {
    return (
      <Provider store={store}>
          <div className="App">
          <div id="main-container" className="main-container nav-effect-1">
            <div className="main clearfix">
              <div className="page-container">
                <div style={{ float: "right", marginTop: 10 }}>
                  <input 
                    type='search' placeholder={`Search in ${this.state.searchFilter}...`} 
                    value={this.state.searchValue} 
                    onChange={this.handleSearch} />
                  <select value={this.state.searchFilter} style={{ position: 'absolute', width: 15, top: 17, right: 195, height: 20 }} onChange={this.handleFilter}>
                    <option value='books'>Books</option>
                    <option value='authors'>Authors</option>
                    <option value='publishers'>Publishers</option>
                  </select>
                </div>
                <br/>
                <br/>
              { (this.state.searchResults.books.length) && (this.state.searchFilter === 'books') ? (
                <SearchResults books={this.state.searchResults.books} />
              ) : ('') }

              { (this.state.searchResults.authors.length) && (this.state.searchFilter === 'authors') ? (
                <SearchResults books={this.state.searchResults.authors} />
              ) : ('') }

              { (this.state.searchResults.publishers.length) && (this.state.searchFilter === 'publishers') ? (
                <SearchResults books={this.state.searchResults.publishers} />
              ) : ('') }

              <BookList/>
              </div>
              </div>
            </div>
          </div>
      </Provider>
    );
  }
}

export default App;