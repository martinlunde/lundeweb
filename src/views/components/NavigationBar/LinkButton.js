/**
 * Created by martinlunde on 24.09.2017.
 */
import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = (props) => {
    return(
        <Link className={props.className + ' LinkButton'} to={ props.url} onClick={ props.onClick }>{ props.title }</Link>
    );
};

export default LinkButton;