const headerMenuConfig = [
    {
        name: '模块A',
        path: '/module/a',
        external: false,
        newWindow: true,
        icon: 'account'
    },
    {
        name: '模块B',
        path: '',
        external: false,
        newWindow: true,
        icon: 'account',
        children: [
            { name: '子菜单', path: '/module/b' }
        ]
    },
    {
        name: '模块C',
        path: 'https://github.com/alibaba/ice',
        external: true,
        newWindow: true,
        icon: 'account'
    }
];
const asideMenuConfig = [
    {
        name: '导航一',
        path: '/',
        icon: 'smile',
        children: [
            { name: '子导航1', path: '/' },
            { name: '子导航2', path: '/nav1/b' },
            { name: '子导航3', path: '/nav1/c' }
        ]
    },
    {
        name: '导航二',
        path: '/nav2',
        icon: 'smile',
        children: [
            { name: '子导航1', path: '/nav2/a' },
            { name: '子导航2', path: '/nav2/b' },
            { name: '子导航3', path: '/nav2/c' }
        ]
    },
    {
        name: '导航三',
        path: '/nav3',
        icon: 'smile',
        children: [
            { name: '子导航1', path: '/nav3/a' },
            { name: '子导航2', path: '/nav3/b' },
            { name: '子导航3', path: '/nav3/c' }
        ]
    }
];
export { headerMenuConfig, asideMenuConfig };
