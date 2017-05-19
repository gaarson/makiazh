import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

class Article extends React.Component {

  componentWillMount() {
    console.log('article');
  }

  render() {
  
    return(
      <div className="afasf">
        afasfasfas
      </div>
    )
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
