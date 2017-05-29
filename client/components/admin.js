import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { getCategoryList,
         deleteArticle,
         publishedArticle,
         searchArticle } from '../actions/actions.js';

const mapStateToProps = ({ list }) => ({ list });

const mapDispathToProps = dispatch => ({
  getList: (id) => dispatch(getCategoryList.categoryPending(id)),
  deleteArticle: (id) => dispatch(deleteArticle.deletePending(id)),
  editArticle: (id) => dispatch(editArticle.editPending(id)),
  publishedArticle: (check) => dispatch(publishedArticle.publishedPending(check)),
  searchArticle: (text) => dispatch(searchArticlel.searchSuccess(text))
});

class Admin extends React.Component {
  componentWillMount() {
    let elem = document.createElement('link');
    elem.setAttribute('rel', 'stylesheet');
    elem.setAttribute('href', '/css/admin.css');
    document.head.appendChild(elem);

    if(!this.props.list.length) this.props.getList(0);
  }

  render() {
    console.log(this.props);
    const list = this.props.list;
    return (
      <div>
        <header className="title-page">
        <a href="/admin"><h3>Администрирование</h3></a>
        <form className="search" action="admin.html" method="post">
          <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" name="q" />
              <div className="input-group-btn">
                  <button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button>
              </div>
          </div>
        </form>
      </header>
      <div className="articles">
        <Link to="/create/new" className="create">Создать статью</Link>
        <ul>
          {
            list.map(item => {
              return (
                <li key={item.id} className="article">
                  <ul className="buttons">
                    <li><a href="#" className="publish"><i className="fa fa-check"></i></a></li>
                    <li><a
                        className="delete" 
                        onClick={() => this.props.deleteArticle(item.id)}>
                        <i className="fa fa-trash-o"></i></a></li>

                    <li><Link to={"/create/" + item.id} 
                            className="update">
                        <i className="fa fa-refresh"></i></Link></li>
                  </ul>
                  <h3>{item.title}</h3>
                </li>
              )
            }) 
          }
        </ul>
      </div>
    </div>
    );
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Admin);
