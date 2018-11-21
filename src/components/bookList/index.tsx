import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Book from '../book';
import axios from 'axios';

class BookList extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      hasMore: false,
    };
    this.loadMore = this.loadMore.bind(this);
  }

  public componentDidMount() {    
    axios.get('https://sharepoint-backend.herokuapp.com/api')
    .then(result => {
      console.log(result.data);
      if(result.data.length < 20) {
        this.setState({ books: result.data, hasMore: false });
      } else {
        this.setState({ books: result.data, hasMore: true });
      }
    }).catch(error => {
      console.log(error);
    })
  }

  public loadMore() {
    console.log('load more');
    console.log(this.state);

    axios.get(`https://sharepoint-backend.herokuapp.com/api?skip=${this.state.books.length}`)
    .then(result => {
      console.log(result.data);
      if(result.data.length < 20) {
        this.setState({ hasMore: false })
      }
      this.setState({ books: this.state.books.concat(result.data) })
    }).catch(error => {
      console.log(error);
    })
  }

  public render() {
    return (
      <section className='book_list'>
        <div className='grid-shuffle'>
          <ul className='row'>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadMore}
            useWindow={false}
            hasMore={this.state.hasMore}
            loader={<div className="loader" key={0}>Loading ...</div>}/>

              { this.state.books.map(book => { 
                return ( 
                  <Book key={book._id} book={book}/>
                );
                })
              }
          </ul>
        </div>
      </section>
    );
  }
}

export default BookList;