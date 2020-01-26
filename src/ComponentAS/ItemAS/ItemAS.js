import React, {Component} from "react";
import {Item} from 'semantic-ui-react';
import convertData from "../../funcAS/convertData";

import './ItemAS.scss'

export default class ItemAS extends Component {
    componentDidMount() {
    }

    render() {
        let segmentsFirst = convertData(this.props.segments[0])
        let segmentsSecond = convertData(this.props.segments[1])

        return (
            <Item>
                <div className={'item__head'}>
                    <div className={'price'}>
                        <span >{String(this.props.price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} Р</span>
                    </div>
                    <div className={'img'}>
                        <img src={`http://pics.avs.io/99/36/${this.props.carrier}.png`} alt=""/>
                    </div>
                </div>
                <div className={'item__desc'}>
                    <div className={'col'}>
                        <Item.Content>
                            <Item.Header as='p'>{segmentsFirst.cityStr}</Item.Header>
                            <Item.Description>
                                {segmentsFirst.departure} - {segmentsFirst.arrival}
                            </Item.Description>
                        </Item.Content>
                    </div>
                    <div className={'col'}>
                        <Item.Content>
                            <Item.Header as='p'>в пути</Item.Header>
                            <Item.Description>
                                {segmentsFirst.duration}
                            </Item.Description>
                        </Item.Content>
                    </div>
                    <div className={'col'}>
                        <Item.Content>
                            <Item.Header as='p'>пересадки</Item.Header>
                            <Item.Description>
                                {segmentsFirst.stops[1]  || 'без пересадок'}
                            </Item.Description>
                        </Item.Content>
                    </div>
                </div>
                <div className={'item__desc'}>
                    <div className={'col'}>
                        <Item.Content>
                            <Item.Header as='p'>{segmentsSecond.cityStr}</Item.Header>
                            <Item.Description>
                                {segmentsSecond.departure} - {segmentsSecond.arrival}
                            </Item.Description>
                        </Item.Content>
                    </div>
                    <div className={'col'}>
                        <Item.Content>
                            <Item.Header as='p'>в пути</Item.Header>
                            <Item.Description>
                                {segmentsSecond.duration}
                            </Item.Description>
                        </Item.Content>
                    </div>
                    <div className={'col'}>
                        <Item.Content>
                            <Item.Header as='p'>пересадки</Item.Header>
                            <Item.Description>
                                {segmentsSecond.stops[1] || 'без пересадок'}
                            </Item.Description>
                        </Item.Content>
                    </div>
                </div>

            </Item>
        );
    }
}

// cityStr: "MOW - HKT"
// departure: "1 февраля 2020 г., 19:04"
// duration: "20ч. 19 мин."
// arrival