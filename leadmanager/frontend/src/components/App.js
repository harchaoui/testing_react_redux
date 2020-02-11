import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

// import components
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'

// import react-redux to link react redux 
import { Provider } from 'react-redux'; //the provider is used to connect redux with react

import store from '../store'



class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div className="container">
                        <Dashboard />
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))