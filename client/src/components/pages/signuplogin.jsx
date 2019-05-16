import React, { Component } from 'react';
import api from '../../api';
import '../../loginstyle.css';
import '../../login.js';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            susername: '',
            spassword: '',
            lusername: '',
            lpassword: '',
            message: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    cambiar_login() {
        document.querySelector('.cont_forms').className = 'cont_forms cont_forms_active_login';
        document.querySelector('.cont_form_login').style.display = 'block';
        document.querySelector('.cont_form_sign_up').style.opacity = '0';

        setTimeout(function() {
            document.querySelector('.cont_form_login').style.opacity = '1';
        }, 400);

        setTimeout(function() {
            document.querySelector('.cont_form_sign_up').style.display = 'none';
        }, 200);
    }

    cambiar_sign_up(at) {
        document.querySelector('.cont_forms').className = 'cont_forms cont_forms_active_sign_up';
        document.querySelector('.cont_form_sign_up').style.display = 'block';
        document.querySelector('.cont_form_login').style.opacity = '0';

        setTimeout(function() {
            document.querySelector('.cont_form_sign_up').style.opacity = '1';
        }, 100);

        setTimeout(function() {
            document.querySelector('.cont_form_login').style.display = 'none';
        }, 400);
    }

    ocultar_login_sign_up() {
        document.querySelector('.cont_forms').className = 'cont_forms';
        document.querySelector('.cont_form_sign_up').style.opacity = '0';
        document.querySelector('.cont_form_login').style.opacity = '0';

        setTimeout(function() {
            document.querySelector('.cont_form_sign_up').style.display = 'none';
            document.querySelector('.cont_form_login').style.display = 'none';
        }, 500);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    }

    handleClick(e) {
        e.preventDefault();
        //this.cambiar_sign_up();
        let data = {
            username: this.state.susername,
            name: this.state.sname,
            password: this.state.spassword
        };
        api.signup(data)
            .then(result => {
                this.props.history.push('/');
            })
            .catch(err => this.setState({ message: err.toString() }));
    }

    handleLogin(e) {
        e.preventDefault();
        //this.cambiar_login();
        api.login(this.state.lusername, this.state.lpassword)
            .then(result => {
                this.props.history.push('/');
            })
            .catch(err => this.setState({ message: err.toString() }));
    }

    render() {
        return (
            <div class="cotn_principal">
                <div class="cont_centrar">
                    <div class="cont_login">
                        <div class="cont_info_log_sign_up">
                            <div class="col_md_login">
                                <div class="cont_ba_opcitiy">
                                    <h2>LOGIN</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <button class="btn_login" onClick={this.cambiar_login}>
                                        LOGIN
                                    </button>
                                </div>
                            </div>
                            <div class="col_md_sign_up">
                                <div class="cont_ba_opcitiy">
                                    <h2>SIGN UP</h2>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                    <button class="btn_sign_up" onClick={this.cambiar_sign_up}>
                                        SIGN UP
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="cont_back_info">
                            <div class="cont_img_back_grey">
                                <img
                                    src="https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-0.3.5&q=50&fm=jpg&crop=entropy&s=7686972873678f32efaf2cd79671673d"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="cont_forms">
                            <div class="cont_img_back_">
                                <img
                                    src="https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-0.3.5&q=50&fm=jpg&crop=entropy&s=7686972873678f32efaf2cd79671673d"
                                    alt=""
                                />
                            </div>
                            <div class="cont_form_login">
                                <a href="#" onClick={this.ocultar_login_sign_up}>
                                    <i class="material-icons">&#xE5C4;</i>
                                </a>
                                <h2>LOGIN</h2>
                                <input
                                    value={this.state.lusername}
                                    name="lusername"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Username"
                                />
                                <input
                                    type="password"
                                    value={this.state.lpassword}
                                    name="lpassword"
                                    onChange={this.handleInputChange}
                                    type="password"
                                    placeholder="Password"
                                />
                                <button class="btn_login" onClick={e => this.handleLogin(e)}>
                                    LOGIN
                                </button>
                            </div>

                            <div class="cont_form_sign_up">
                                <a href="#" onClick={this.ocultar_login_sign_up}>
                                    <i class="material-icons">&#xE5C4;</i>
                                </a>
                                <h2>SIGN UP</h2>
                                <input
                                    type="text"
                                    name="susername"
                                    onChange={this.handleInputChange}
                                    value={this.state.susername}
                                    placeholder="User"
                                />
                                <input
                                    type="password"
                                    value={this.state.spassword}
                                    name="spassword"
                                    onChange={this.handleInputChange}
                                    placeholder="Password"
                                />
                                <button class="btn_sign_up" onClick={e => this.handleClick(e)}>
                                    SIGN UP
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/* 

<div>
                <div className="Signup">
                    <h2>Signup</h2>
                    <form className="signup-input">
                        Username:{' '}
                        <input
                            type="text"
                            value={this.state.susername}
                            name="susername"
                            onChange={this.handleInputChange}
                        />{' '}
                        <br />
                        Name:{' '}
                        <input
                            type="text"
                            value={this.state.sname}
                            name="sname"
                            onChange={this.handleInputChange}
                        />{' '}
                        <br />
                        Password:{' '}
                        <input
                            type="password"
                            value={this.state.spassword}
                            name="spassword"
                            onChange={this.handleInputChange}
                        />{' '}
                        <br />
                        <button onClick={e => this.handleClick(e)}>Signup</button>
                    </form>
                    {this.state.message && <div className="info info-danger">{this.state.message}</div>}
                </div>

                <div className="Login">
                    <h2>Login</h2>
                    <form>
                        Username:{' '}
                        <input
                            type="text"
                            value={this.state.lusername}
                            name="lusername"
                            onChange={this.handleInputChange}
                        />{' '}
                        <br />
                        Password:{' '}
                        <input
                            type="password"
                            value={this.state.lpassword}
                            name="lpassword"
                            onChange={this.handleInputChange}
                        />{' '}
                        <br />
                        <button onClick={e => this.handleLogin(e)}>Login</button>
                    </form>
                    {this.state.message && <div className="info info-danger">{this.state.message}</div>}
                </div>
            </div>

 */
