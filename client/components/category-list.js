import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCategoryList } from '../actions/actions.js';
import Nav from '../components/nav.js';

const mapStateToProps = ({ list }) => ({ list });

const mapDispathToProps = dispath => ({
  getList: (id) => dispath(getCategoryList.categoryPending(id))
});

class CategoryList extends React.Component {
  componentWillMount() {
    this.props.getList(this.props.match.params.id);
  }

  componentWillUpdate(prevProps) {
    if(prevProps.match.params.id != this.props.match.params.id)
      this.props.getList(prevProps.match.params.id);

  }

  componentDidMount() {
    let elem = document.createElement('link');
    elem.setAttribute('rel', 'stylesheet');
    elem.setAttribute('href', '/css/articles.css');
    document.head.appendChild(elem);

    this.props.getList(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <Nav />
        <h3 className="text-center"></h3>
        <div className="col-xs-10">
          <div className="row">
            <div className="wrap">
              {
                this.props.list.map(item => {
                  return(
                    <div key={item.id} className="article">
                      <Link to={"/article/" + item.id} className="article-link">
                        <div className="img-block">
                          <img src={item.logo} alt="club" />
                        </div>
                        <div className="text-block">
                          <h4>{item.title}</h4>
                          <p className="text-news">{item.discription}</p>
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
