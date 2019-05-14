/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
//import News from './pages/News';
import Addstocks from './pages/Addstocks';
import Secret from './pages/Secret';
import Login from './pages/Login';
import Signup from './pages/Signup';
import api from '../api';
import StockDetails from './pages/StockDetails';
import userPortfolio from './pages/userPortfolio';

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
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {/* <li className="nav-item active">
                                    <a className="nav-link">
                                        <NavLink to="/stocks">News</NavLink>
                                    </a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link">
                                        {api.isLoggedIn() && (
                                            <NavLink to="/add-stocks">Add stocks</NavLink>
                                        )}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}{' '}
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
                    {/* <Route path="/news" component={News} /> */}
                    <Route path="/add-stocks" component={Addstocks} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/secret" component={Secret} />
                    <Route path="/stockdetail/:id" component={StockDetails} />
                    <Route path="/userPortfolio" component={userPortfolio} />

                    <Route render={() => <h2>404</h2>} />
                </Switch>
            </div>
        );
    }
}
