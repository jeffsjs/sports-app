import React, { Component } from 'react';

class Input extends Component {
	render() {
		const { handleChange, name, label, value, optional, info, ...props } = this.props;
		return (
			<label className='field custom-input'>
				<div className='flex align-center space-between'>
					<span className='label'>{label}</span>
					{optional && <small>optional</small>}
				</div>
				<input
					{...props}
					value={value}
					onChange={(e) => handleChange(e)}
					name={name}
					id={name}
				/>
				{info && <span className='info'>{info}</span>}
			</label>
		);
	}
}

Input.default = {
	handleChange: e => console.log(e)
};

export default Input;
