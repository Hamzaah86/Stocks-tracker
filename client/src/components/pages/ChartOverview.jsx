import React, { Component } from 'react';
import Chart from './Chart';
import api from '../../api';

export default class ChartOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: {},
            arrayCompanies: []
        };
    }

    componentDidMount() {
        api.getStocks()
            .then(result => {
                const arrayOfCompanies = result.watchList;
                const companies = arrayOfCompanies.reduce(
                    (a, key) => Object.assign(a, { [key]: [] }),
                    {}
                );
                this.setState({
                    companies,
                    arrayCompanies: arrayOfCompanies
                });
            })

            .then(() => {
                api.getMultiplePrices(this.state.arrayCompanies).then(result => {
                    let copyCompanies = this.state.companies;
                    let keys = Object.keys(copyCompanies);

                    keys.forEach((key, idx) => {
                        copyCompanies[key] = result[idx];
                    });
                    this.setState({
                        companies: copyCompanies
                    });
                });
            });
    }
    render() {
        /* Names and values are stored in state.companies
        How to pass them to component Chart?.. */
        /* Ternary. Thor do this */
        console.log(this.state.companies);
        let companyNames = Object.keys(this.state.companies);
        console.log(companyNames.length);
        let values = Object.values(this.state.companies);
        console.log(values, 'values');

        console.log(Object.entries(this.state.companies));

        return Object.keys(this.state.companies).length === 0 ? (
            <h1>Loading..</h1>
        ) : (
            <div>
                {Object.entries(this.state.companies).map((arr, i) => {
                    return (
                        <Chart
                            key={i}
                            name={arr[0]}
                            symbol={arr[0]}
                            values={arr[1] ? arr[1].map(e => e.open) : []}
                        />
                    );
                })}
                {/* this.state.companies.map((el, i) => {
                    return (
                        <Chart name={el} symbol={el} values={[10, 20, 30, 20, 25, 0, 10, 5, 5]} />
                    );
                }) */}
            </div>
        );
    }
}
