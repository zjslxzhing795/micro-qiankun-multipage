import React, { Component } from 'react';
import PropTypes from 'prop-types';//eslint-disable-line
import { Link, withRouter } from 'react-router-dom';
import { Nav, Icon, Menu, Dropdown } from '@alifd/next';
import { headerMenuConfig } from '@/menuConfig';
import logoUrl from 'public/images/logo.png';
import userUrl from 'public/images/labi.jpg';
import './index.scss';

const { SubNav, Item } = Nav;
@withRouter

class BasicHeader extends Component {
    render() {
        // 用户个人设置项
        const menu = (
            <Menu>
                <Menu.Item>个人中心</Menu.Item>
                <Menu.Item>系统设置</Menu.Item>
                <Menu.Item>重置密码</Menu.Item>
                <Menu.Item><Link to='/login'>退出登陆</Link></Menu.Item>
            </Menu>
        );
        const { location = {} } = this.props;
        const { pathname } = location;
        return (
            <div className='header'>
                <div className='header__logo'>
                    <img src={logoUrl} alt='Admin Starter' />
                    <a href='#' title='Admin Starter'>Admin</a>
                </div>

                <Dropdown trigger={
                    <div className='header__user'>
                        <div className='header__user__avatar'>
                            <img src={userUrl} alt='zzw' />
                        </div>
                        <div className='header__user__name'>
                            zzw
                        </div>
                    </div>
                }>
                    {menu}
                </Dropdown>

                <div className='header__navbar'>
                    <Nav
                        onClick={this.handleNavClick}
                        selectedKeys={[pathname]}
                        defaultSelectedKeys={[pathname]}
                        direction='hoz'
                        type='primary'
                        activeDirection={null}
                    >
                        {headerMenuConfig &&
                            headerMenuConfig.length > 0 &&
                            headerMenuConfig.map((nav, index) => {
                                // 如果有子菜单
                                if (nav.children && nav.children.length > 0) {
                                    return (
                                        <SubNav
                                            triggerType='click'
                                            key={index}
                                            label={
                                                <span>
                                                    {nav.icon ? (
                                                        <Icon size='small' type={nav.icon} />
                                                    ) : null}
                                                    <span className='header__navbar__name'>{nav.name}</span>
                                                </span>
                                            }>
                                            {nav.children.map((item) => {
                                                const linkProps = {};
                                                // 如果子菜单是外部链接
                                                if (item.external) {
                                                    if (item.newWindow) {
                                                        linkProps.target = '_blank';
                                                    }
                                                    linkProps.href = item.path;
                                                    return (
                                                        <Item key={item.path}>
                                                            <a {...linkProps}>
                                                                <span>{item.name}</span>
                                                            </a>
                                                        </Item>
                                                    );
                                                }
                                                // 如果子菜单不是外部链接
                                                linkProps.to = item.path;
                                                return (
                                                    <Item key={item.path}>
                                                        <Link {...linkProps}>
                                                            <span>{item.name}</span>
                                                        </Link>
                                                    </Item>
                                                );
                                            })}
                                        </SubNav>);
                                }
                                // 如果没有子菜单，且是外部链接
                                const linkProps = {};
                                if (nav.external) {
                                    if (nav.newWindow) {
                                        linkProps.target = '_blank';
                                    }
                                    linkProps.href = nav.path;
                                    return (
                                        <Item key={nav.path}>
                                            <a {...linkProps}>
                                                <span>
                                                    {nav.icon ? (
                                                        <Icon size='small' type={nav.icon} />
                                                    ) : null}
                                                    <span className='header__navbar__name'>{nav.name}</span>
                                                </span>
                                            </a>
                                        </Item>
                                    );
                                }
                                // 如果没有子菜单，且不是外部链接
                                linkProps.to = nav.path;
                                return (
                                    <Item key={nav.path}>
                                        <Link {...linkProps}>
                                            <span>
                                                {nav.icon ? (
                                                    <Icon size='small' type={nav.icon} />
                                                ) : null}
                                                <span className='header__navbar__name'>{nav.name}</span>
                                            </span>
                                        </Link>
                                    </Item>
                                );
                            })
                        }
                    </Nav>
                </div>
            </div>
        );
    }
}

BasicHeader.propTypes = {
    location: PropTypes.object
};

export default BasicHeader;
