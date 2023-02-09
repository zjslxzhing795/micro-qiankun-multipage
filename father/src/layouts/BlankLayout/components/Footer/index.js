import React from 'react';
import './index.scss';

const LoginFooter = () => {
    return (
        <div className='blank__footer' >
            <div className='blank__footer__links'>
                <a href='javascript:;'>
                    帮助
                </a>
                <a href='javascript:;'>
                    隐私
                </a>
                <a href='javascript:;' style={{ marginRight: '0' }}>
                    条款
                </a>
            </div>
            <div className='blank__footer__copyright'>zzw corporation © 2018 版权所有</div>
        </div >
    );
};

export default LoginFooter;
