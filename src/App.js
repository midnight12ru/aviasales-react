import React, {Component} from 'react';
import {ListAS, FilterAS} from "./ComponentAS";
import getData from './funcAS/getDataAS'

import './App.scss'

export default class App extends Component {

    state = {
        ticketsData: [],

    };

    constructor(props){
        super(props)

        this.FilterHandler = this.FilterHandler.bind(this)
    }

    componentDidMount() {
        getData('https://front-test.beta.aviasales.ru/search')
            .then(r => {
                getData(`https://front-test.beta.aviasales.ru/tickets?searchId=${r.searchId}`)
                    .then(r => {
                        this.setState({
                            ticketsData: r.tickets
                        })
                    })
            })
    }

    FilterHandler(val){
        console.log('app: ',val)
    }

    render() {
        return (
            <div id='App'>
                <FilterAS FilterHandler={this.FilterHandler} />
                <ListAS data={this.state.ticketsData.slice(0, 10)}/>
            </div>
        );
    }
}