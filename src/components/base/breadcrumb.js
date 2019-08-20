import React from 'react';
import { ReactComponent as Icon } from '../../imgs/home-solid.svg';

const Link = props => <a {...props}>{props.children}</a>;

const BreadCrumb = () => (
  <div className='row breadcrumb'>
    <div className='col'>
      <ul>
        <li><Icon className='icon' /></li>
        <li><Link href='#' title='Page Name'>Page Name</Link> > </li>
        <li><Link href='#' title='Breadcrumb'>Breadcrumb</Link> ></li>
        <li><Link href='#' title='Current page'>Current page</Link></li>
      </ul>
    </div>
  </div>
);

export default BreadCrumb;
