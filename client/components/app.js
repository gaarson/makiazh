import React from 'react'
import { connect } from 'react-redux';

import Nav from './nav.js';
import Sliders from './slider.js';
import Test from './test.js';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const App = props => 
    <div>
        <Nav />
        <Sliders />
        <Test />
    </div>

export default connect(mapStateToProps, mapDispatchToProps)(App);
