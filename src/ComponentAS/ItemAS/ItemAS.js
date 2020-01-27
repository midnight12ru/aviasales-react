import React, {Component} from "react";
import {Item} from 'semantic-ui-react';
import convertData from "../../funcAS/convertData";
import {ItemASdesc} from "../index";

import './ItemAS.scss'

export default class ItemAS extends Component {
    componentDidMount() {
    }

    render() {
        let [segmentsFirst, segmentsSecond] = [convertData(this.props.segments[0]), convertData(this.props.segments[1])];

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
                <ItemASdesc {...segmentsFirst}/>
                <ItemASdesc {...segmentsSecond}/>
            </Item>
        );
    }
}