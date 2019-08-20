import React, { Fragment } from 'react';
import { ReactComponent as Logo } from '../../imgs/volleyball-ball-solid.svg';

import Breadcrumb from './breadcrumb';

const Header = () => (
	<Fragment>
		<div className='header'>
			<div className='row align-center container-header'>
				<div className='col'>
					<div className='logo'>
						<i className='icon'> <Logo /> </i> Venturus Sports
					</div>
				</div>
				<div className='col'>
					<div className='flex flex-end align-center'>
						<i className='icon-perfil'>JB</i> <span>Jason Bourne</span>
					</div>
				</div>
			</div>
		</div>
		<Breadcrumb />
	</Fragment>
);

export default Header;
