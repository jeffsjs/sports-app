import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteUser } from '../actions/actions';

import Loading from '../components/loading';

import { ReactComponent as Icon } from '../imgs/trash-alt-regular.svg';
import { convertDMS } from '../utils';

class Table extends Component {
	openMaps = (lat, lng) => {
		const url = `https://www.google.com.br/maps/search/${convertDMS(lat, lng)}`;
		const win = window.open(url, '_blank');
		win.focus();
	};

	renderValue = (key, value) => {
		switch (key) {
			case 'email':
				return <a href={`mailto:${value}`}>{value}</a>;
			case 'city':
				return (
					<button
						className='btn btn-link'
						onClick={() => this.openMaps(value.geo.lat, value.geo.lng)}
					>
						{value.city}
					</button>
				);
			default:
				return value;
		}
	};

	render() {
		const { headerMap, stateRedux, title, deleteUser } = this.props;
		const { users } = stateRedux;
		if (!users.length) return <Loading />;

		const Header = Object.entries(headerMap).map(([key, value]) => (
			<th key={key}>{value}</th>
		));
		const headersKeys = Object.keys(headerMap);
		const List = users.map(elem => (
			<tr className='table-row' key={elem.id}>
				{Object.entries(elem).map(([key, value]) => {
					const isCity = key === 'address';
					key = isCity ? 'city' : key;
					return (
						(headersKeys.includes(key) || isCity) && (
							<td key={key}>{this.renderValue(key, value)}</td>
						)
					);
				})}
				<td>
					<button
						className='btn btn-link btn-delete'
						title='Delete'
						onClick={() => deleteUser(elem.id) }
					>
						<Icon />
					</button>
				</td>
			</tr>
		));

		return (
			<div className='row'>
				<div className='col-3'>
					<h1>
						<span>{title}</span>
					</h1>
				</div>
				<div className='col overflow-x-auto'>
					<table className='table'>
						<thead>
							<tr>
								{Header}
								<th />
							</tr>
						</thead>
						<tbody>{List}</tbody>
					</table>
				</div>
			</div>
		);
	}
}
Table.defaultProps = {
	headerMap: {},
	value: []
};

const mapStateToProps = state => {
	return { stateRedux: state.mainReducer };
};

const mapDispatchToProps = dispatch =>
	bindActionCreators({ deleteUser }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Table);
