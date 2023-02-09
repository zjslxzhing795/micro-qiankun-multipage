import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Breadcrumb } from '@alifd/next';

class CustomBreadcrumb extends Component {
    static displayName = 'CustomBreadcrumb';

    static propTypes = {
        items: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        summary: PropTypes.object
    };

    static defaultProps = {};

    render() {
        const { title, items, summary } = this.props;
        return (
            <div className='breadcrumb__container'>
                <Breadcrumb className='breadcrumb'>
                    {items.map((item, index) => {
                        const link = item.link ? { link: item.link } : {};
                        return (
                            <Breadcrumb.Item key={index} {...link}>
                                {item.text}
                            </Breadcrumb.Item>
                        );
                    })}
                </Breadcrumb>
                <h3 className='title'>{title}</h3>
                {summary && <p className='summary'>{summary}</p>}
            </div>
        );
    }
}

export default CustomBreadcrumb;
