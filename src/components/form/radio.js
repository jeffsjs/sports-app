import React, { Component } from 'react';

class Radio extends Component {
	render() {
		const { handleChange, name, selectValue, radios } = this.props;
		return (
			<div className='radio-group'>
				{radios.map(radio => {
					const { value, label } = radio;
					return (
						<div className='custom-control custom-radio' key={value}>
							<input
								type='radio'
								className='custom-control-input'
								id={value}
								name={name}
								checked={value === selectValue}
								onChange={(e) => handleChange(e)}
								value={value}
							/>
							<label className='custom-control-label' htmlFor={value}>
								{label}
							</label>
						</div>
					);
				})}
			</div>
		);
	}
}

Radio.default = {
	handleChange: ({e, value}) => {
		console.log({value, e});
		e.preventDefault();
	}
};

export default Radio;
