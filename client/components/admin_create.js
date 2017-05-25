import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createArticle, getCategories } from '../actions/actions.js';

const mapStateToProps = ({create_article}) => ({
  categories: create_article.categories,
  articleData: create_article.articleData,
  error: create_article.error,
});

const mapDispathToProps = dispath => ({
  editorHandler: (e) => dispath(createArticle.writeData(e)),
  createArticle: (newArticle) => dispath(createArticle.createPending(newArticle)),
  getCategories: () => dispath(getCategories.categoriesPending())
});

class Create extends React.Component {
  
  componentWillMount() {
    let elem = document.createElement('link');
    elem.setAttribute('rel', 'stylesheet');
    elem.setAttribute('href', '/css/create.css');
    document.head.appendChild(elem);
  }

  componentDidMount() {
    if(!this.props.categories.length) this.props.getCategories();
  }

  render() {
    console.log(this.props);
    return (
      <div>
      <header className="title-page">
        <h3>Администрирование</h3>
      </header>
      <form className="container">
        <div>
          <div className="htmlForm-group col-xs-12 col-sm-6 col-lg-3">
            <label className="control-label" htmlFor="title-art">Название статьи</label>
            <div>
              <input id="title" className="htmlForm-control input-md" required="" onChange={this.props.editorHandler} type="text" />
            </div>
          </div>
          <div className="htmlForm-group col-xs-12 col-sm-6 col-lg-3">
            <label className="control-label" htmlFor="title-main-cat">Категория статьи</label>
            <div>
              <select id="category" className="htmlForm-control input-md" onChange={this.props.editorHandler} required="">
                <option value="0">-------------------</option>
                {this.props.categories.map(item => {
                    return <option key={item.id} value={item.id}>{item.title}</option> 
                })}
              </select>
            </div>
          </div>
          <div className="htmlForm-group col-xs-12 col-sm-6 col-lg-3">
            <label className="control-label" htmlFor="name">Имя автора</label>
            <div>
              <input id="author" className="htmlForm-control input-md"  onChange={this.props.editorHandler} required="" type="text" />
            </div>
          </div>
          <div className="htmlForm-group col-xs-12 col-sm-6 col-lg-3 logo">
            <label className="control-label" htmlFor="logo">Лого</label>
            <div>
              <label htmlFor="logo" className="file">Выберите лого</label>
              <input id="logo" className="htmlForm-control input-md" required="" onChange={this.props.editorHandler} type="file" />
            </div>
          </div>
        </div>
        <div className="article-wrapper">
          <Editor
            defaultEditorState={'' || this.props.articleData.discription}
            onEditorStateChange={this.props.editorHandler}
            wrapperClassName="wrapper-class" 
            editorClassName="editor-class" 
            toolbarClassName="toolbar-class"
            editorStyle={{border: 'solid'}}
          />
          <input type='button' className="create" value='Create' onClick={() => this.props.createArticle(this.props.articleData)} />
        </div>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Create);
