import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Button } from '@alifd/next';

@connect(
    state => ({
        loadings: state.loading.effects.Counter,
        count: state.Counter.count
    }),
    dispatch => ({
        increase: dispatch.Counter.increase,
        decrease: dispatch.Counter.decrease
    })
)
class Counter extends Component {
    static propTypes = {
        count: PropTypes.number,
        increase: PropTypes.func,
        decrease: PropTypes.func
    };

    render() {
        const { count, increase, decrease } = this.props;
        return (
            <div>
                <p>一个简单的计数器, 用于演示同步Action的处理</p>
                <h4>The count is: {count}</h4>
                <p>
                    <Button style={{ marginRight: 5 }} onClick={() => decrease(1)}>减一</Button>
                    <Button type='primary' onClick={() => increase(1)}>加一</Button>
                </p>
            </div>
        );
    }
}

export default Counter;
