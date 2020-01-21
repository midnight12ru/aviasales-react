import React, {Component} from "react";

export default class ItemAS extends Component{
    carrier;
componentDidMount() {
    console.log(this.props)
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