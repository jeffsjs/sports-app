import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveUser } from '../actions/actions';

import Input from './form/input';
import Radio from './form/radio';
import Checkbox from './form/checkbox';

import { addOrRemove } from '../utils';

const INITIAL_STATE = {
	username: '',
	name: '',
	email: '',
	city: '',
	ride: 'Always',
	days: [],
	error: [],
	daysValues: [
		{ label: 'Sun', value: 'Sun' },
		{ label: 'Mon', value: 'Mon' },
		{ label: 'Tue', value: 'Tue' },
		{ label: 'Wed', value: 'Wed' },
		{ label: 'Thu', value: 'Thu' },
		{ label: 'Fri', value: 'Fri' },
		{ label: 'Sat', value: 'Sat' }
	],
	require: ['username', 'name', 'email', 'ride', 'days'],
	rideValues: [
		{ label: 'Always', value: 'Always' },
		{ label: 'Sometimes', value: 'Sometimes' },
		{ label: 'Never', value: 'Never' }
	]
};

const Field = props => {
	const { className, name, error, message } = props;
	const isError = error.includes(name);
	return (
		<div
			{...props}
			className={`${className ? className : ''} ${isError ? 'error' : ''}`}
		>
			{props.children}
			<div className='error-message'>{message}</div>
		</div>
	);
};

class Form extends Component {
	state = { ...INITIAL_STATE };

	clean = () => {
		this.setState({ ...INITIAL_STATE });
	};

	save = e => {
		e.preventDefault();
		const { saveUser } = this.props;
		const { username, name, email, city, ride, days } = this.state;
		console.log({ username, name, email, city, ride, days });
		const newUser = { new: true, username, name, email, city, ride, days };
		const isValid = this.validForm();

		if (isValid.length === 0) {
			saveUser(newUser) 
			return this.clean();
		} 
		return this.setState({ error: isValid })
	};

	validForm = () => {
		let errors = [];
		const { username, name, email, city, ride, days, require } = this.state;
		const fields = { username, name, email, city, ride, days };
		require.forEach(e => {
			if (fields[e].length === 0) errors.push(e);
		});
		return errors;
	};

	updateField = event => {
		const target = event.target;
		const { name, value } = target;
		const { days } = this.state;
		let newValue = name === 'days' ? addOrRemove(days, value) : value;
		this.setState({
			[name]: newValue
		});
	};

	render() {
		const {
			username,
			name,
			email,
			city,
			ride,
			days,
			require,
			error,
			daysValues,
			rideValues
		} = this.state;

		return (
			<div className='row'>
				<div className='col'>
					<form className='form' onSubmit={e => this.save(e)}>
						<div className='row'>
							<div className='col'>
								<Field name='username' error={error} message='Obrigatório'>
									<Input
										type='text'
										name='username'
										label='Username'
										value={username}
										info='Instructions to show on input focus.'
										handleChange={e => this.updateField(e)}
										optional={!require.includes('username')}
									/>
								</Field>
								<Field name='name' error={error} message='Obrigatório'>
									<Input
										type='text'
										name='name'
										label='Name'
										value={name}
										handleChange={e => this.updateField(e)}
										optional={!require.includes('name')}
									/>
								</Field>
								<Field name='email' error={error} message='Obrigatório'>
									<Input
										type='email'
										name='email'
										label='E-mail'
										value={email}
										handleChange={e => this.updateField(e)}
										optional={!require.includes('email')}
									/>
								</Field>
							</div>
							<div className='col'>
								<div className='row'>
									<div className='col'>
										<Input
											type='text'
											name='city'
											label='City'
											value={city}
											handleChange={e => this.updateField(e)}
											optional={!require.includes('city')}
										/>
									</div>
								</div>
								<div className='row'>
									<div className='col-3'>
										<div className='field'>
											<Field name='days' error={error} message='Selecione ao menos 1'>
												<div className='flex align-center space-between'>
													<span className='label'>Days of the week</span>
												</div>
												<Checkbox
													name='days'
													checkboxs={daysValues}
													selectValue={days}
													handleChange={e => this.updateField(e)}
												/>
											</Field>
										</div>
									</div>
									<div className='col-3'>
										<div className='field'>
											<div className='flex align-center space-between'>
												<span className='label'>Ride in group?</span>
											</div>

											<Radio
												name='ride'
												radios={rideValues}
												selectValue={ride}
												handleChange={e => this.updateField(e)}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className='col-3 container-btns'>
								<button className='btn' type='submit'>
									Save
								</button>
								<button
									className='btn btn-default'
									onClick={() => this.clean()}
								>
									Discatd
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { stateRedux: state.mainReducer };
};

const mapDispatchToProps = dispatch =>
	bindActionCreators({ saveUser }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);
