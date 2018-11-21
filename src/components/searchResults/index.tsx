import * as React from 'react';
import Book from '../book';

class BookList extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    console.log('search');
    console.log(this.props); 
  }

  public render() {
    return (
      <section className='book_list'>
        <div className='grid-shuffle'>
          <br/>
          <h4>Search Results</h4>
          <hr/>
          <ul className='row'>
          { this.props.books.lenth }
              { this.props.books.map(book => { 
                return ( 
                  <Book key={book._id} book={book}/>
                );
                })
              }
          </ul>  
          <hr/>
        </div>
      </section>

    );
  }
}

export default BookList;