import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import renderHtml from 'react-html-parser';

import { getCategoryList, searchArticle } from '../actions/actions.js';
import Nav from '../components/nav.js';

const mapStateToProps = ({ list }) => ({ list });

const mapDispathToProps = dispatch => ({
  getList: (id) => dispatch(getCategoryList.categoryPending(id)),
  searchArticle: (text) => {
    if(text.key == 'Enter')
      dispatch(searchArticle.searchPending(text.target))
  }
});

class CategoryList extends React.Component {
  componentWillMount() {
    let elem = document.createElement('link');
    elem.setAttribute('rel', 'stylesheet');
    elem.setAttribute('href', '/css/articles.css');
    document.head.appendChild(elem);
    this.props.getList(this.props.match.params.id);
  }

  componentDidMount() {
    let script = document.createElement('script');
    script.setAttribute('src', '/js/list.js');
    document.body.appendChild(script);
  }

  componentWillUpdate(prevProps) {
    if(prevProps.match.params.id != this.props.match.params.id) {
      this.props.getList(prevProps.match.params.id);
      let script = document.createElement('script');
      script.setAttribute('src', '/js/list.js');
      document.body.appendChild(script);
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Nav 
            searchArticle={this.props.searchArticle}
            history={this.props.history}
        />
        <h3 className="text-center"></h3>
        <div className="col-xs-10">
          <div className="row">
            <div className="wrap">
              {
                this.props.list.map(item => {
                  console.log(item.discription);
                  return(
                    <div key={item.id} className="article">
                      <Link to={"/article/" + item.id} className="article-link">
                        <div className="img-block">
                          <img src={item.logo} alt="club" />
                        </div>
                        <div className="text-block">
                          <h4>{item.title}</h4>
                          <p id='content' className="text-news">{item.discription}</p>
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispathToProps)(CategoryList);
