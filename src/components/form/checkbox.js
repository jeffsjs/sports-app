import React, { Component } from 'react';

class Checkbox extends Component {
	render() {
		const { handleChange, name, selectValue, checkboxs } = this.props;
		return (
			<div className='checkbox-group'>
				{checkboxs.map(checkbox => {
					const { value, label } = checkbox;
					return (
						<div className='custom-control custom-checkbox' key={value}>
							<input
								type='checkbox'
								className='custom-control-input'
								id={value}
								name={name}
								checked={selectValue.includes(value)}
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

Checkbox.default = {
	handleChange: e => {
		console.log(e);
	}
};

export default Checkbox;