import React from 'react';
import {getHomepageData} from '../actions/actions.js';
import { connect } from 'react-redux';

import Nav from './nav.js';
import Sliders from './slider.js';
import Test from './test.js';

const mapStateToProps = ({ app }) => ({
  articlesList: app,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getHomepageData.dataPending())
});

class App extends React.Component {
    componentWillMount() {
      let elem = document.createElement('link');
      elem.setAttribute('rel', 'stylesheet');
      elem.setAttribute('href', '/css/style.css');
      document.head.appendChild(elem);

      if(!this.props.articlesList.length) this.props.fetchData(); 
    }
    
    componentDidMount() {
        let script = document.createElement('script');
        script.setAttribute('src', '/js/main.js');
        document.body.appendChild(script);
    }
    
    render() {
      console.log(this.props);
      return(
        <div>
            <Nav />
            <Sliders list={this.props.articlesList}/>
            <Test />
        </div>
      )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
