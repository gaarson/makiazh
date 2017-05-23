import React from 'react';
import TinyMCE from 'react-tinymce';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createArticle } from '../actions/actions.js';

const mapStateToProps = () => ({

});

const mapDispathToProps = dispath => ({
  editorHandler: (e) => dispath(createArticle.writeData(e)),
  createArticle: () => dispath(createArticle.createPending()),
});

class Create extends React.Component {
  
  componentWillMount() {
    let elem = document.createElement('link');
    elem.setAttribute('rel', 'stylesheet');
    elem.setAttribute('href', '/css/create.css');

  }

  render() {
    return (
      <div>
        <TinyMCE 
          
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Create);
