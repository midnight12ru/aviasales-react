import React, {Component} from "react";

export default class FilterASItem extends Component {

    constructor(props) {
        super(props);
        this.itemRef = React.createRef();
        this.toggleState = this.toggleState.bind(this);
    }

    toggleState() {
        this.itemRef.current.classList.contains('selected') ? this.itemRef.current.classList.remove('selected') : this.itemRef.current.classList.add('selected')
    }

    render() {
        return (
            <li data-val={this.props[0]}
                className={'FilterAS__checkbox-item'}
                ref={this.itemRef}
                onClick={this.toggleState}
            >
                <div className={'FilterAS__checkbox-content'}>{this.props[1]}</div>
            </li>
        );
    }
}