/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';//eslint-disable-line
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Checkbox, Message, Icon } from '@alifd/next';
import './index.scss';

@withRouter
class Login extends Component {
    static displayName = 'Login';

    static propTypes = {
        history: PropTypes.object
    };

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            value: {
                username: '',
                password: '',
                checkbox: false
            }
        };
    }

    formChange = (value) => {
        this.setState({
            value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // this.refs.form.validateAll((errors, values) => {
        //     if (errors) {
        //         console.log('errors', errors);
        //         return;
        //     }
        //     console.log(values);
        //     Message.success('登录成功');
        // });
        this.props.history.push('/');
        Message.success('登录成功');
    };

    render() {
        return (
            <div className='login'>
                <h4 className='login__title'>登 录</h4>

                <div>
                    <div className='login__formItem'>
                        <Icon size='small' type='account' className='login__icon' />
                        <Input
                            size='large'
                            maxLength={20}
                            placeholder='用户名'
                            className='login__inputCol'
                        />

                    </div>

                    <div className='login__formItem'>
                        <Icon size='small' type='account' className='login__icon' />
                        <Input
                            size='large'
                            htmlType='password'
                            placeholder='密码'
                            className='login__inputCol'
                        />

                    </div>

                    <div className='login__formItem'>
                        <Checkbox className='login__checkbox'>记住账号</Checkbox>
                    </div>

                    <div className='login__footer'>
                        <Button
                            type='primary'
                            size='large'
                            onClick={this.handleSubmit}
                            className='login__submitBtn'
                        >
                            登 录
                        </Button>
                        <Link to='/user/register' className='login__tips'>
                            立即注册
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
