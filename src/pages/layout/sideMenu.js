export default [
    {
        code: 'home_group',
        name: '首页',
        desc: '首页',
        type: 'menu_group',
        icon: 'el-icon-s-home',
        parentKey: 'menu_group_home_center',
        method: null,
        url: '',
        order: null,
        metaData: '',
        children: [
            {
                code: 'home',
                name: '系统首页',
                desc: '',
                type: 'menu',
                icon: '',
                parentKey: 'home_group',
                method: '',
                url: '#/',
                order: null,
                metaData: ''
            },
            {
                code: 'report',
                name: '报表',
                desc: '',
                type: 'menu',
                icon: '',
                parentKey: 'report',
                method: '',
                url: '#/report',
                order: null,
                metaData: ''
            }
        ]
    },
];
