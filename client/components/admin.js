import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { getCategoryList, createArticle } from '../actions/actions.js';

const mapStateToProps = ({ list }) => ({ list });

const mapDispathToProps = dispath => ({
  getList: (id) => dispath(getCategoryList.categoryPending(id)),
  deleteArticle: (id) => dispath(createArticle.deleteArticle(id)),
});

class Admin extends React.Component {
  componentWillMount() {
    let elem = document.createElement('link');
    elem.setAttribute('rel', 'stylesheet');
    elem.setAttribute('href', '/css/admin.css');
    document.head.appendChild(elem);

    if(!this.props.list.length) this.props.getList();
  }

  render() {
    console.log(this.props);
    const list = this.props.list;
    return (
      <div>
        <header className="title-page">
        <h3>Администрирование</h3>
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
        <Link to="admin/create/">Создать статью</Link>
        <ul>
          {
            list.map(item => {
              return (
                <li key={item.id} className="article">
                  <ul className="buttons">
                    <li><a href="#" className="publish"><i className="fa fa-check"></i></a></li>
                    <li><a href="#" className="delete"><i className="fa fa-trash-o"></i></a></li>
                    <li><a href="#" className="update"><i className="fa fa-refresh"></i></a></li>
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
