import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from '../actions/actions';

import Header from '../components/base/header';
import Register from '../components/register';

import { ReactComponent as Icon1 } from '../imgs/puzzle-piece-solid.svg';
import { ReactComponent as Icon2 } from '../imgs/trophy-solid.svg';
import { ReactComponent as Icon3 } from '../imgs/map-signs-solid.svg';

import Table from '../components/table';
const TABLE_HEADER_MAP = {
	username: 'Username',
	name: 'Name',
	email: 'E-mail',
	city: 'City',
	ride: 'Ride in group',
	days: 'Day of the week',
	posts: 'Posts',
	albums: 'Albums',
	photos: 'Photos'
};

class Home extends Component {
	componentDidMount() {
		const { getUsers } = this.props;
		getUsers();
	}
	render() {

		return (
			<div className='home'>
				<Header />

				<div className='row sport'>
					<div className='col'>
						<div className='row container-sport'>
							<div className='col'>
								<div className='flex align-center'>
									<i className='icon'>
										<Icon1 />
									</i>
									<p>
										<span>Sport type</span>Cycling
									</p>
								</div>
							</div>

							<div className='col'>
								<div className='flex align-center'>
									<i className='icon'>
										<Icon2 />
									</i>
									<p>
										<span>Mode</span>Advanced
									</p>
								</div>
							</div>

							<div className='col'>
								<div className='flex align-center'>
									<i className='icon'>
										<Icon3 />
									</i>
									<p>
										<span>Route</span>30 miles
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Table headerMap={TABLE_HEADER_MAP} title='User' />
				
				<Register />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({ getUsers }, dispatch);

export default connect(
	null,
	mapDispatchToProps
)(Home);

// import React, { Component } from 'react';

// import { loadingSeries } from '../actions/actions';
// import Loading from './loading';

// import { format, differenceInDays, addDays } from 'date-fns';
// import DatePicker from 'react-date-picker';
// import Select from './select';

// const HOURS = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ];
// class FormCalcular extends Component {
// 	state = {
// 		date: new Date(),
// 		hours: 0,
// 		disableDate: false,
// 		disableHours: false,
// 		calc: false
// 	};

// 	onChange = date => {
// 		this.setState({ date, calc: true, disableHours: true });
// 	};

// 	setValue = hours => {
// 		this.setState({ hours, calc: true, disableDate: true });
// 	};

// 	clean = () => {
// 		this.setState({	date: new Date(), hours: 0, disableDate: false, disableHours: false, calc: false})
// 	}

// 	calcularMaratona = () => {
// 		const { stateRedux } = this.props;
// 		const { marathonDuration, dateNextEpisode } = stateRedux;
// 		const { calc, hours, date, disableDate, disableHours } = this.state;

// 		if (calc) {
// 			const qtdHours = Math.ceil(marathonDuration/60);
// 			let hoursPerDay = 0;
// 			let distance = 0;
// 			let ret = { message: '' };

// 			if (disableDate) {
// 				hoursPerDay = Math.ceil(qtdHours/hours);
// 				const dayStart = format(addDays(dateNextEpisode, -hoursPerDay), 'DD-MM-YYYY');
// 				if (hoursPerDay < 24) {
// 					ret.message = `Pode começar no dia ${dayStart} Assistindo: ${hours}h(s) por dia! :)`;
// 				} else {
// 					ret.message = 'IMPOSSIVEL ATÉ A DATA DO PROXIMO LANÇAMENTO';
// 				}
// 			}

// 			if (disableHours) {
// 				distance = differenceInDays(dateNextEpisode, date);
// 				hoursPerDay = qtdHours/distance;
// 				if (distance < 0 || hoursPerDay > 24) ret.message = 'IMPOSSIVEL ATÉ A DATA DO PROXIMO LANÇAMENTO';
// 				if (hoursPerDay > 1 && hoursPerDay <= 24) ret.message = `Você terá que assistir ${hoursPerDay}h(s) por dia.`;
// 				if (hoursPerDay < 1) ret.message = `Você pode assistir 1 episodio por dia. Você tem ${distance} dias até a extreia do próximo episódio.`;
// 			}

// 			return ret.message;
// 		}
// 	}

// 	render() {
// 		const { stateRedux } = this.props;
// 		const { loading, error, errorMessage, dateNextEpisode } = stateRedux;

// 		if (error) return <div className='error'>{errorMessage}</div>;
// 		if (loading) return <Loading />;

// 		const { date, calc, hours, disableDate, disableHours } = this.state;

// 		return (
// 			<div className='form-calcular'>
// 				<div className='row column'>
// 					<div className='item'>
// 						<h3>CALCULAR</h3>
// 					</div>

// 					<div className='item'>
// 						<DatePicker minDate={new Date()} maxDate={new Date(dateNextEpisode)}  onChange={this.onChange} value={date} disabled={disableDate} />
// 					</div>
// 					<div className='item'>
// 						<Select options={HOURS} setValue={this.setValue} disabled={disableHours} value={hours} />
// 					</div>
// 					<div className='item'>
// 						<button className='btn outline lg block' onClick={() => this.clean() }>LIMPAR</button>
// 					</div>

// 					{calc && <div className='item'>{this.calcularMaratona()}</div>}
// 				</div>
// 			</div>
// 		);
// 	}
// }
