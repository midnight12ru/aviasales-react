import React, {Component} from 'react';

import './FilterAS.scss'
import {FilterASItem} from "../index";

export default class FilterAS extends Component {

    state = {
        contentArr: [
            ['all', 'Все'],
            ['0', 'Без пересадок'],
            ['1', '1 пересадка'],
            ['2', '2 пересадки'],
            ['3', '3 пересадки']
        ]
    };

    constructor(props) {
        super(props);

        this.listRef = React.createRef();

        this.toggleActiveState = this.toggleActiveState.bind(this);
    }

    componentDidMount() {
        document.getElementById('Filter').addEventListener('click', (e) => {
            let val = e.target.getAttribute('data-val') ? e.target.getAttribute('data-val') : e.target.parentNode.getAttribute('data-val')
            this.props.FilterHandler(val)
        }, true)
    }

    toggleActiveState() {

    }

    render() {
        let {contentArr} = this.state;
        return (
            <div className={'FilterAS'}>
                <h3 className={'FilterAS__label'}>Количество пересадок</h3>
                <ul id={'Filter'} className={'FilterAS__checkbox'} ref={this.listRef}>
					{contentArr.map((el, index)=>{
						return <FilterASItem key={index} {...el}/>
					})}
                </ul>
            </div>
        );
    }
}