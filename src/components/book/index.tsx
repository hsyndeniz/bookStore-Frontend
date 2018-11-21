import * as React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Book extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  public toDate(date) {
    const newDate = new Date(date);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[newDate.getMonth()]
    const year = newDate.getFullYear();
    return `${month} ${year}` 
  } 

  public slugifyUrl(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  public render() {
    return (
      <li className="book-item small-12 medium-6 columns">
      <div className="bk-img">
        <div className="bk-wrapper">
          <div className="bk-book bk-bookdefault">
            <div className="bk-front">
              <div className="bk-cover" style={{ backgroundImage: `url(${this.props.book.thumbnailUrl})` }} />
            </div>
            <div className="bk-back"/>
            <div className="bk-left"/>
          </div>
        </div>
      </div>
      <div className="item-details">
        <h3 className="book-item_title"> { this.props.book.title } </h3>
        <p className="author">by { this.props.book.authors[0] } &bull; { this.toDate(this.props.book.publishedDate) } </p>
        <p> { this.props.book.shortDescription } </p>
        <Link to={{ pathname: `/detail/${this.slugifyUrl(this.props.book.title)}`, state: { book: this.props.book } }} className="button">Details</Link>
      </div>
    </li>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { 
      state: state.bookReducers
     };
}

export default connect(mapStateToProps)(Book);
