import React from 'react';
import { connect } from 'react-redux';
import renderHtml from 'react-html-parser';

import {getArticle, searchArticle} from '../actions/actions.js';

import Nav from './nav.js';

const mapStateToProps = ({ article }) => ({ article });

const mapDispatchToProps = dispatch => ({
  getArticle: (id) => dispatch(getArticle.articlePending(id)),
  searchArticle: (text) => {
    if(text.key == 'Enter')
      dispatch(searchArticle.searchPending(text.target))
  }
});

class Article extends React.Component {

  componentWillMount() {
    const props = this.props;
    let elem = document.createElement('link');
    elem.setAttribute('rel', 'stylesheet');
    elem.setAttribute('href', '/css/article.css');
    document.head.appendChild(elem);

    if(!Object.keys(props.article).length) 
      props.getArticle(props.match.params.id);
  }
  
  componentDidMount() {
      this.props.getArticle(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    const {discription, title, logo} = this.props.article;
    return(
      <div>
        <Nav searchArticle={this.props.searchArticle}
              history={this.props.history}/>
        <div className='container'>

          <div className='row'>
            <h1>{title}</h1>
            <img src={logo} className="img" alt="" /><br/>
            <div>
            {renderHtml(discription)}
            </div>   
          </div>
        
        </div>
        
      </div>
    )
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
