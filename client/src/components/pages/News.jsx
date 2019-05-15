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
            
            <div class="ticker-wrap">
            <div class="ticker">
                {this.state.news && this.state.news.map((article, idx) => (
                    <div className="ticker__item">{article.title}</div>
                ))}
              
            </div>
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
