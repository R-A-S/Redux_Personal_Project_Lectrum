// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Components
import Scheduler from '../../components/Scheduler';
import Catcher from '../../components/Catcher';

@hot(module)
export default class App extends Component {
    render () {
        return (
            <Catcher>
                <Scheduler />
            </Catcher>
        );
    }
}
