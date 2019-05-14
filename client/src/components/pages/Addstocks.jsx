import React, { Component } from 'react';
import api from '../../api';
import TempStock from './TempStock';
import { Link } from 'react-router-dom';

/* TODO */
// Delay api calls
// Create delete function
// Style table
// Send information to mongodb
// Test API call so open/close values are correct always
// Create graphs

export default class Addstocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            companiesFromApi: [],
            clickedCompanies: [],
            message: null,
            test: 'Test'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        let keyword = event.target.value;
        api.searchName(keyword)
            .then(result => {
                this.setState({
                    companiesFromApi: result.bestMatches
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleClick(e) {
        let open;
        let closed;
        let data;
        let { name, symbol } = e.currentTarget.dataset;
        let copyCompanies = this.state.copyCompanies;
        console.log(this.state, 'copy 41');
        e.preventDefault();

        api.searchStock(e.currentTarget.dataset.name)
            .then(result => {
                let allValues = Object.values(result);
                let lastValue = allValues[allValues.length - 1];
                let lastValueOfLastValue =
                    lastValue &&
                    Object.values(lastValue).length &&
                    Object.values(lastValue)[Object.values(lastValue).length - 1];
                open = lastValue && Object.values(lastValueOfLastValue)[0];
                closed = lastValue && Object.values(lastValueOfLastValue)[3];

                data = {
                    name,
                    symbol,
                    open,
                    closed
                };

                this.setState({
                    clickedCompanies: [...this.state.clickedCompanies, data]
                });
            })

            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <div className="Addstocks">
                <h2>Add stocks</h2>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Open</th>
                            <th scope="col">Closed</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.test &&
                            this.state.clickedCompanies.map((el, key) => {
                                return (
                                    <TempStock
                                        key={key}
                                        name={el.name}
                                        open={el.open}
                                        closed={el.closed}
                                    />
                                );
                            })}
                    </tbody>
                </table>

                <form>
                    Search for stock:{' '}
                    <input
                        type="text"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleInputChange}
                    />{' '}
                    <br />
                    {/* <button onClick={e => this.handleClick(e)}>Add this company</button> */}
                </form>
                <ul>
                    {this.state.companiesFromApi &&
                        this.state.companiesFromApi.map((company, key) => (
                            <li
                                className="stockList"
                                onClick={this.handleClick}
                                key={key}
                                data-name={company['1. symbol']}
                                data-symbol={company['2. name']}
                            >
                                {company['1. symbol']} {company['2. name']}
                            </li>
                        ))}
                </ul>
                {this.state.message && <div className="info">{this.state.message}</div>}
            </div>
        );
    }
}