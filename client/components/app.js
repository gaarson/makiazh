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
      if(!this.props.articlesList.length) this.props.fetchData(); 
    }
    
    componentDidUpdate() {
      Common();
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
