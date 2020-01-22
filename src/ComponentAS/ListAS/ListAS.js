import React, {Component} from "react";
import {ItemAS} from "../index";

export default class ListAS extends Component {
    state = {
        data: []
    };

    constructor(props) {
        super(props);

        this.RenderList = this.RenderList.bind(this)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.data !== this.props.data) {
            this.setState({data: this.props.data})
        }
    }

    RenderList() {
        let {data} = this.state;
        let newList;

        newList = data.map((el, index) => {
            return <ItemAS key={index} {...el}/>
        });

        return newList
    }

    render() {
        return (
            <div>
                <this.RenderList/>
            </div>
        );
    }
}