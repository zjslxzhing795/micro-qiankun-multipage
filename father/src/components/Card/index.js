import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Card extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className='card__container'>
                {children}
            </div >
        );
    }
}

Card.propTypes = {
    children: PropTypes.node
};
export default Card;
