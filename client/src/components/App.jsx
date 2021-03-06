/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ChartOverview from './pages/ChartOverview';
import Addstocks from './pages/Addstocks';
import Secret from './pages/Secret';
import Login from './pages/Login';
import Signup from './pages/Signup';
import signuplogin from './pages/signuplogin';
import api from '../api';
import StockDetails from './pages/StockDetails';
import userPortfolio from './pages/userPortfolio';
import News from './pages/News';

//import logo from '../logo.svg';
//<img src={logo} className="App-logo" alt="logo" />

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: []
        };
    }

    handleLogoutClick(e) {
        api.logout();
    }

    render() {
        return (
            <div className="App">
                {
                    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-font">
                        <a className="App-title">
                            {' '}
                            <NavLink to="/" exact>
                                Home
                            </NavLink>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse nav-display" id="navbarNav">
                            <ul className="navbar-nav mr-5">
                                {
                                    <li className="nav-item active">
                                        <a className="nav-link">
                                            {api.isLoggedIn() && (
                                                <NavLink to="/chart-overview">Charts</NavLink>
                                            )}
                                        </a>
                                    </li>
                                }
                                <li className="nav-item">
                                    <a className="nav-link">
                                        {api.isLoggedIn() && (
                                            <NavLink to="/add-stocks">Add stocks</NavLink>
                                        )}
                                    </a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link">
                                        <NavLink to="/signup">Signup</NavLink>
                                    </a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link">
                                        {!api.isLoggedIn() && <NavLink to="/login">Register</NavLink>}{' '}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        {api.isLoggedIn() && (
                                            <Link to="/" onClick={e => this.handleLogoutClick(e)}>
                                                Logout
                                            </Link>
                                        )}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    /* <header className="App-header">
                    <h1 className="App-title">Stocks-tracker</h1>
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                    <NavLink to="/stocks">News</NavLink>
                    <NavLink to="/add-stocks">Add stocks</NavLink>
                    {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
                    {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
                    {api.isLoggedIn() && (
                        <Link to="/" onClick={e => this.handleLogoutClick(e)}>
                            Logout
                        </Link>
                    )}
                    <NavLink to="/secret">Secret</NavLink>
                </header> */
                }
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/chart-overview" component={ChartOverview} />
                    <Route path="/add-stocks" component={Addstocks} />
                    <Route path="/signup" component={Signup} />
                    {/* <Route path="/login" component={Login} /> */}
                    <Route path="/login" component={signuplogin} />
                    <Route path="/stockdetail/:id" component={StockDetails} />
                    <Route path="/userPortfolio" component={userPortfolio} />

                    <Route render={() => <h2>404</h2>} />
                </Switch>
                <News />
            </div>
        );
    }
}
