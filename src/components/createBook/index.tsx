import * as React from 'react';
import axios from 'axios';

class Create extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      _id: null,
      title: '',
      isbn: null,
      pageCount: null,
      publishedDate: Date.now(),
      thumbnailUrl: '',
      shortDescription: '',
      longDescription: '',
      status: 'PUBLISHED',
      author: '',
      category: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public componentDidMount() {
    console.log(this.props);
  }

  public UTCDate() {
    const date = new Date(); 
    const UTC =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    return new Date(UTC);
  }


  public slugifyUrl(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  public handleSubmit() {
    const categories: any = [];
    const authors: any = [];
    const publishedDate = this.UTCDate();
    categories.push(this.state.category);
    authors.push(this.state.author);

    axios.post('https://sharepoint-backend.herokuapp.com/api/create', { 
      _id: this.state._id,
      title: this.state.title,
      isbn: this.state.isbn,
      pageCount: this.state.pageCount,
      thumbnailUrl: this.state.thumbnailUrl,
      shortDescription: this.state.shortDescription,
      longDescription: this.state.longDescription,
      status: this.state.status,
      authors,
      categories,
      publishedDate
     }).then(result => {
       console.log(result);
       this.props.history.push({
        pathname: `/detail/${this.slugifyUrl(result.data.title)}`,
        state: { book: result.data }
       });
     }).catch(error => {
       console.log(error);
     });
  }

  public render() {
    return (
      <div style={{ padding: 100 }}>
        <div className="bk-img">
          <div className="bk-wrapper">
            <div className="bk-book bk-bookdefault">
              <div className="bk-front">
                <div className="bk-cover" style={{ backgroundImage: `url(${this.state.thumbnailUrl})` }}/>
              </div>
              <div className="bk-back"/>
              <div className="bk-left"/>
            </div>
          </div>
        </div>
        <div className="item-details">
        <br/> 
        <div style={{ width: '70%' }}>
        <div style={{ width: '25%', float: "left" }}>Book ID: </div>
        <input type='number' onChange={e => this.setState({ _id: e.target.value }, () => { console.log(this.state) }) } style={{ width: '40%' }} />
        <br/>
        </div>
        <div style={{ width: '70%' }}>
        <div style={{ width: '25%', float: "left" }}>Book Title: </div>
        <input type='text' onChange={e => this.setState({ title: e.target.value }, () => { console.log(this.state) }) } style={{ width: '40%' }} />
        <br/>
        </div>
        <div style={{ width: '70%' }}>
        <div style={{ width: '25%', float: "left" }}> ISBN Number: </div>
        <input type='number' onChange={e => this.setState({ isbn: e.target.value }, () => { console.log(this.state) }) } style={{ width: '40%' }} />
        <br/>
        </div>
        <div style={{ width: '70%' }}>
        <div style={{ width: '25%', float: "left" }}> Page Count: </div>
        <input type='number' onChange={e => this.setState({ pageCount: e.target.value }, () => { console.log(this.state) }) } style={{ width: '40%' }} />
        <br/>
        </div>
        <div style={{ width: '70%' }}>
        <div style={{ width: '25%', float: "left" }}> Book Image URL: </div>
        <input type='text' onChange={e => this.setState({ thumbnailUrl: e.target.value }, () => { console.log(this.state) }) } style={{ width: '40%' }} />
        <br/>
        </div>
        <div style={{ width: '70%' }}>
        <div style={{ width: '25%', float: "left" }}> Short Description: </div>
        <input type='text' onChange={e => this.setState({ shortDescription: e.target.value }, () => { console.log(this.state) }) } style={{ width: '40%' }} />
        <br/>
        </div>
        <div style={{ width: '70%' }}>
        <div style={{ width: '25%', float: "left" }}> Long Description: </div>
        <input type='text' onChange={e => this.setState({ longDescription: e.target.value }, () => { console.log(this.state) }) } style={{ width: '40%' }} />
        <br/>
        </div>
        <div style={{ width: '70%' }}>
        <div style={{ width: '25%', float: "left" }}> Book Author: </div>
        <input type='text' onChange={e => this.setState({ author: e.target.value }, () => { console.log(this.state) }) } style={{ width: '40%' }} />
        <br/>
        </div>
        <div style={{ width: '70%' }}>
        <div style={{ width: '25%', float: "left" }}> Book Category: </div>
        <input type='text' onChange={e => this.setState({ category: e.target.value }, () => { console.log(this.state) }) } style={{ width: '40%' }} />
        </div>
        <button onClick={this.handleSubmit} style={{ marginLeft: '40.3%' }}>Submit</button>
        </div>

      </div>
    );
  }
} 

export default Create;
