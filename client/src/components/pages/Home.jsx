import React, { Component } from 'react';
import News from './News';

export default class Home extends Component {
    // constructor(props) {
    //   super(props)
    //   this.state = {
    //   }
    // }
    render() {
        return (
            <div class="main d-flex justify-content-center align-items-end ">
                <div className="Home ">
                    <p>
                        <h3>Stocks Monitoring</h3>
                    </p>
                </div>
                <div class="list-group ">
                    <a href="#" class="list-group-item list-group-item-action active">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Philly Fed manufacturing index rebounds.</h5>
                            <small>1 day ago</small>
                        </div>
                        <p class="mb-1">
                            The numbers: The Philadelphia Fed manufacturing index in May rose to a
                            four-month high of 16.6 after registering 8.5 in April.
                        </p>
                        <small>
                            <a>Investing.com</a>
                        </small>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">The Trade War Weapon China Won’t Use.</h5>
                            <small class="text-muted">2 days ago</small>
                        </div>
                        <p class="mb-1">
                            As te trade war between U.S.and China heats up, there's increasing talks of
                            escalating the fight with monetary.
                        </p>
                        <small class="text-muted">MarketWatch.com</small>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">
                                Stocks aim for three-day win streak as investors eye trade headlines
                            </h5>
                            <small class="text-muted">3 days ago</small>
                        </div>
                        <p class="mb-1">
                            U.S. stocks rose at the opening bell as investors monitor developments on the
                            U.S.-China trade spat. The S&P 500 SPX, +0.67% was up 0.2% to 2,856.The Dow
                            Jones Industrial Average DJIA, +0.62% picked up 91 points.
                        </p>
                        <small class="text-muted">Bloomberg.com</small>
                    </a>
                </div>
            </div>
        );
    }
}
