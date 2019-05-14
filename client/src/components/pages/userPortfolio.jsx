import React, { Component } from 'react';
import api from '../../api';

export default class userPortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            companyName: ''
        };
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return <div> something</div>;
    }
}
