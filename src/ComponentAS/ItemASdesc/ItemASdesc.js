import React, {Component} from "react";
import {Item} from "semantic-ui-react";

export default class ItemASdesc extends Component {
    render() {
        return (
            <div className={'item__desc'}>
                <div className={'col'}>
                    <Item.Content>
                        <Item.Header as='p'>{this.props.cityStr}</Item.Header>
                        <Item.Description>
                            {this.props.departure} - {this.props.arrival}
                        </Item.Description>
                    </Item.Content>
                </div>
                <div className={'col'}>
                    <Item.Content>
                        <Item.Header as='p'>в пути</Item.Header>
                        <Item.Description>
                            {this.props.duration}
                        </Item.Description>
                    </Item.Content>
                </div>
                <div className={'col'}>
                    <Item.Content>
                        <Item.Header as='p'>пересадки</Item.Header>
                        <Item.Description>
                            {this.props.stops[1] || 'без пересадок'}
                        </Item.Description>
                    </Item.Content>
                </div>
            </div>
        );
    }
}