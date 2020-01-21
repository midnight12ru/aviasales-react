import React, {Component} from 'react';
import {ListAS} from "./ComponentAS";
import getData from './funcAS/getDataAS'

export default class App extends Component {

    state = {
        ticketsData: []
    };

    componentDidMount() {
        getData('https://front-test.beta.aviasales.ru/search')
            .then(r => {
                getData(`https://front-test.beta.aviasales.ru/tickets?searchId=${r.searchId}`)
                    .then(r => {
                        this.setState({
                            ticketsData: r.tickets.slice(0, 10)
                        })
                    })
            })
    }



    render() {
        return (
            <div>
                App
                <ListAS data={this.state.ticketsData}/>
            </div>
        );
    }


}