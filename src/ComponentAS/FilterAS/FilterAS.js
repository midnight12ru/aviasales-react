import React, {Component} from 'react';

import './FilterAS.scss'

export default class FilterAS extends Component{
	render() {
		return (
			<div className={'FilterAS'}>
				<h3 className={'FilterAS__label'}>Количество пересадок</h3>	
				<ul className={'FilterAS__checkbox'} onClick={(event)=>{
					console.log(event)
				}}>
					<li className={'FilterAS__checkbox-item'} data-val='all'><div className={'FilterAS__checkbox-content'}>Все</div></li>
					<li className={'FilterAS__checkbox-item'} data-val='nonstop'><div className={'FilterAS__checkbox-content'}>Без пересадок</div></li>
					<li className={'FilterAS__checkbox-item'} data-val='1'><div className={'FilterAS__checkbox-content'}>1 пересадка</div></li>
					<li className={'FilterAS__checkbox-item'} data-val='2'><div className={'FilterAS__checkbox-content'}>2 пересадки</div></li>
					<li className={'FilterAS__checkbox-item'} data-val='3'><div className={'FilterAS__checkbox-content'}>3 пересадки</div></li>
				</ul>
			</div>
		);
	}
}