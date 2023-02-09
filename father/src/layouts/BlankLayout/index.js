import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@alifd/next';
import Footer from './components/Footer';
import Intro from './components/Intro';
import './index.scss';

const { Row, Col } = Grid;

class BlankLayout extends Component {
    static propTypes = {
        children: PropTypes.node
    };

    render() {
        const { children } = this.props;
        return (
            <div className='blank'>
                <Row wrap className='blank__row'>
                    <Col l='12'>
                        <Intro />
                    </Col>
                    <Col l='12'>
                        <div className='blank__form'>
                            {children}
                        </div>
                    </Col>
                </Row>
                <Footer />
            </div>
        );
    }
}

export default BlankLayout;
