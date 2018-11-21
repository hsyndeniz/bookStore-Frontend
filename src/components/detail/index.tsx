import * as React from 'react';

class Detail extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    console.log(this.props.location.state);
  }

  public toDate(date) {
    const newDate = new Date(date);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[newDate.getMonth()]
    const year = newDate.getFullYear();
    return `${month} ${year}` 
  } 

  public render() {
    return (
      <div style={{ padding: 100 }}>
        <div className="bk-img">
          <div className="bk-wrapper">
            <div className="bk-book bk-bookdefault">
              <div className="bk-front">
                <div className="bk-cover" style={{ backgroundImage: `url(${this.props.location.state.book.thumbnailUrl})` }}/>
              </div>
              <div className="bk-back"/>
              <div className="bk-left"/>
            </div>
          </div>
        </div>
        <div className="item-details">
          <p style={{ float: "right" }}> #{ this.props.location.state.book.categories[0] } </p>
          <h3 className="book-item_title"> { this.props.location.state.book.title } </h3>
          <p className="author">by { this.props.location.state.book.authors[0] } &bull; { this.toDate(this.props.location.state.book.publishedDate) } </p>
          <p className='author'> ISBN: { this.props.location.state.book.isbn } </p>
          <p className='author'> Published by { this.props.location.state.book.publisher } | { this.props.location.state.book.publishedDate } </p>
          <p className='author'> Published Date: { this.props.location.state.book.publishedDate } </p>
          <p className='author'> Page Count: { this.props.location.state.book.pageCount } </p>

          <br/>
          <br/>
          Long Description
          <p style={{ overflow: 'scroll' }}> { this.props.location.state.book.longDescription } </p>
        </div>
        <div className="overlay-details">
          <div className="overlay-image">
            <img src={this.props.location.state.book.thumbnailUrl} alt="Book Cover"/>
          </div>
        </div>
      </div>
    );
  }
} 

export default Detail;
