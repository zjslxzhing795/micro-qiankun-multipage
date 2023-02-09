import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Link, withRouter } from 'react-router-dom';
import { Nav, Icon } from '@alifd/next';
import { asideMenuConfig } from '../../../../menuConfig';
import './index.scss';

const { SubNav, Item } = Nav;
@withRouter

class BasicMenu extends Component {
    constructor(props) {
        super(props);
        const openKeys = this.getDefaultOpenKeys();
        this.state = {
            openKeys
        };
        this.openKeysCache = openKeys;
    }

    /**
     * 获取当前展开的菜单项
     */
    getDefaultOpenKeys = () => {
        const { location = {} } = this.props;
        const { pathname } = location;

        let openKeys = [];
        if (Array.isArray(asideMenuConfig)) {
            asideMenuConfig.forEach((item, index) => {
                if (pathname.startsWith(item.path)) {
                    openKeys = [`${index}`];
                }
            });
        }

        return openKeys;
    }

    /**
     * 当前展开的菜单项
     */
    onOpenChange = (openKeys) => {
        this.setState({
            openKeys
        });
        this.openKeysCache = openKeys;
    }

    render() {
        const { location = {} } = this.props;
        const { pathname } = location;
        return (
            <Nav
                defaultSelectedKeys={[pathname]}
                selectedKeys={[pathname]}
                onOpen={this.onOpenChange}
                openKeys={this.state.openKeys}
                openMode='single'
                className='menu'
            >
                {Array.isArray(asideMenuConfig) &&
                    asideMenuConfig.length > 0 &&
                    asideMenuConfig.map((nav, index) => {
                        if (nav.children && nav.children.length > 0) {
                            return (
                                <SubNav
                                    key={index}
                                    label={
                                        <span>
                                            {nav.icon ? (
                                                <Icon size='small' type={nav.icon} />
                                            ) : null}
                                            <span className='menu__name'>{nav.name}</span>
                                        </span>
                                    }
                                >
                                    {nav.children.map((item) => {
                                        const linkProps = {};
                                        if (item.external) {
                                            if (item.newWindow) {
                                                linkProps.target = '_blank';
                                            }
                                            linkProps.href = item.path;
                                            return (
                                                <Item key={item.path}>
                                                    <a {...linkProps}>{item.name}</a>
                                                </Item>
                                            );
                                        }
                                        linkProps.to = item.path;
                                        return (
                                            <Item key={item.path}>
                                                <Link {...linkProps}>{item.name}</Link>
                                            </Item>
                                        );
                                    })}
                                </SubNav>
                            );
                        }
                        const linkProps = {};
                        if (nav.external) {
                            if (nav.newWindow) {
                                linkProps.target = '_blank';
                            }
                            linkProps.href = nav.path;
                            return (
                                <Item key={nav.path}>
                                    <a {...linkProps}>
                                        {nav.icon ? (
                                            <Icon size='small' type={nav.icon} />
                                        ) : null}
                                        <span>{nav.name}</span>
                                    </a>
                                </Item>
                            );
                        }
                        linkProps.to = nav.path;
                        return (
                            <Item key={nav.path}>
                                <Link {...linkProps}>
                                    <span>
                                        {nav.icon ? (
                                            <Icon size='small' type={nav.icon} />
                                        ) : null}
                                        <span className='ice-menu-collapse-hide'>{nav.name}</span>
                                    </span>
                                </Link>
                            </Item>
                        );
                    })
                }
            </Nav>
            // <Menu defaultOpenKeys='0' className='menu' openMode='single'>
            //     <SubMenu key='0' label='模拟目录 1'>
            //         <Item key='0-0'>虚拟菜单 1</Item>
            //         <Item key='0-1'>虚拟菜单 2</Item>
            //         <Item key='0-2'>虚拟菜单 3</Item>
            //     </SubMenu>
            //     <SubMenu key='1' label='模拟目录 2'>
            //         <Item key='1-0'>虚拟菜单 1</Item>
            //         <Item key='1-1'>虚拟菜单 2</Item>
            //         <Item key='1-2'>虚拟菜单 3</Item>
            //     </SubMenu>
            //     <SubMenu key='2' label='模拟目录 3'>
            //         <Item key='2-0'>虚拟菜单 1</Item>
            //         <Item key='2-1'>虚拟菜单 2</Item>
            //         <Item key='2-2'>虚拟菜单 3</Item>
            //     </SubMenu>
            //     <SubMenu key='3' label='模拟目录 4'>
            //         <Item key='3-0'>虚拟菜单 1</Item>
            //         <Item key='3-1'>虚拟菜单 2</Item>
            //         <Item key='3-2'>虚拟菜单 3</Item>
            //     </SubMenu>
            // </Menu>
        );
    }
}

BasicMenu.propTypes = {
    location: PropTypes.object
};

export default BasicMenu;
