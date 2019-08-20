import React from 'react';

import { ReactComponent as Icon1 } from '../imgs/life-ring-regular.svg';
import { ReactComponent as Icon2 } from '../imgs/heartbeat-solid.svg';
import { ReactComponent as Icon3 } from '../imgs/smile-regular.svg';

import Form from './form'

const Register = () => (
	<div className='row'>
		<div className='col-3'>
			<h1>
				<span>Registratio</span>
			</h1>
		</div>
		<div className='col-3'>
			<div className='row'>
				<div className='col card'>
					<h3>Need help?</h3>
					<div className='flex align-center'>
						<i className='icon'>
							<Icon1 />
						</i>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</p>
					</div>
				</div>
				<div className='col card'>
					<h3>Why register?</h3>
					<div className='flex align-center'>
						<i className='icon'>
							<Icon2 />
						</i>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</div>
				<div className='col card'>
					<h3>What people are saying...</h3>
					<div className='flex align-center'>
						<i className='icon'>
							<Icon3 />
						</i>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div className='col'>
			<Form />
		</div>
	</div>
);

export default Register;
