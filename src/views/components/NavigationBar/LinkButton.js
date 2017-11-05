/**
 * Created by martinlunde on 24.09.2017.
 */
import React from 'react';
import { Link } from 'react-router-dom';

export const LinkButton = (props) => {
    return(
        <Link className="LinkButton" to={ props.url} >{ props.title }</Link>
    );
};

export default LinkButton;