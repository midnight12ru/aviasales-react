import React, {Component} from "react";
import convertDate from "../../funcAS/convertDate";

export default class ItemAS extends Component {
    componentDidMount() {
        convertDate(this.props.segments[0])
    }

    render() {
        return (
            <div>
                <div>
                    <span>{this.props.price}</span>
                    <span>
                        <img src={`http://pics.avs.io/99/36/${this.props.carrier}.png`} alt=""/>
                    </span>
                </div>
                <div>
                    asd
                </div>
                <div>
                    zxc
                </div>
            </div>
        );
    }

}