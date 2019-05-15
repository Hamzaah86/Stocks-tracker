import React, { Component } from 'react';
import Axios from 'axios';
// import api from '../../api';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }
    render() {
        return (
            <div className="News">
                <h2>News</h2>
                {this.state.news.map((article, idx) => (
                    <li key={idx}>{article.title}</li>
                ))}
            </div>
        );
    }
    componentDidMount() {
        Axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${'28ee5d1128754b7490f09e8a20906afd'}`
        ).then(res => {
            console.log(res);
            this.setState({ news: res.data.articles });
        });
    }
}
