import React, { Component } from 'react';
//import Addstocks from './Addstocks';
import api from '../../api';

export default class StockDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stockInfo: '',
            companyName: '',
            message: null
        };
    }

    fetchDetails = () => {
        let data = this.props.match.params.id;
        console.log(data, 'THIS VALUE:D:D');

        api.searchStock(data)
            .then(result => {
                console.log(result, 'this is the result');
                this.setState({
                    stockInfo: result,
                    companyName: data,
                    message: `Your order '${this.state.name}' has been created`
                });
                setTimeout(() => {
                    this.setState({
                        message: null
                    });
                }); //2000
            })
            .catch(err => this.setState({ message: err.toString() }));
    };

    componentDidMount() {
        this.fetchDetails();
    }

    handleClick = e => {
        e.preventDefault();
        console.log(this.state.companyName);
        let data = {
            name: this.state.companyName
        };
        api.addStocks(data)
            .then(result => {
                console.log('SUCCESS!');
                this.setState({
                    name: '',
                    message: `Your order '${this.state.companyName}' has been created`
                });
                setTimeout(() => {
                    this.setState({
                        message: null
                    });
                }, 2000);
            })
            .catch(err => this.setState({ message: err.toString() }));
    };
    // in backend, router.post to update user model
    // User.findOneAndUpdate({_id:req.user},{use the push operator})

    /*router.post("/Add stocks", (req, res, next) => {
            const { this.companyname } = req.body
           if (onClick == add to watch list)
              return 
            }
            User.findOne({  })
              .then(userDoc => {
                { _id: 1 },
                { $push: { watchlist: companyname } }
                  return
                }
    };*/

    render() {
        let allValues = Object.values(this.state.stockInfo);
        let lastValue = allValues[allValues.length - 1];
        let lastValueOfLastValue =
            lastValue &&
            Object.values(lastValue).length &&
            Object.values(lastValue)[Object.values(lastValue).length - 1];
        let open = lastValue && Object.values(lastValueOfLastValue)[0];
        let closed = lastValue && Object.values(lastValueOfLastValue)[3];
        return (
            <div>
                <div className="stock-details">
                    <p>{this.state.companyName}</p>
                    <p>Open: {open}</p>
                    <p>closed: {closed}</p>

                    <button onClick={this.handleClick}>add to watchlist</button>
                </div>
            </div>
        );
    }
}
