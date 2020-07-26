// Auhtor: Mansoor Ghazi

import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from '../Common/Footer';

class Curriculum extends Component {
    clearLocalStorage = () => {
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <Header clearLocalStorage={this.clearLocalStorage} />
                <Main projectID={this.props.match.params.projectID} />
                <Footer />
            </>
        );
    }
}

export default Curriculum;