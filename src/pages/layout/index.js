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
                code: 'logger',
                name: '登录日志',
                desc: '',
                type: 'menu',
                icon: '',
                parentKey: 'home_group',
                method: '',
                url: '#/logger',
                order: null,
                metaData: ''
            }
        ]
    },
    {
        code: 'product_group',
        name: '商品',
        desc: '商品列表',
        type: 'menu_group',
        icon: '<i class="el-icon-sell"></i>',
        parentKey: 'product_group',
        method: null,
        url: '',
        order: null,
        metaData: '',
        children: [
            {
                code: 'product',
                name: '商品列表',
                desc: '商品列表',
                type: 'menu',
                icon: '',
                parentKey: 'product_group',
                method: '',
                url: '#/product',
                order: null,
                metaData: ''
            },
            {
                code: 'panicBuying',
                name: '抢购登记',
                desc: '',
                type: 'menu',
                icon: '',
                parentKey: 'product_group',
                method: '',
                url: '#/panicBuying',
                order: null,
                metaData: ''
            },
            {
                code: 'bidding',
                name: '竞价登记',
                desc: '',
                type: 'menu',
                icon: '',
                parentKey: 'product_group',
                method: '',
                url: '#/bidding',
                order: null,
                metaData: ''
            }
        ]
    },
    {
        code: 'statistics_group',
        name: '统计',
        desc: '统计',
        type: 'menu_group',
        icon: '<i class="el-icon-data-analysis"></i>',
        parentKey: 'statistics_group',
        method: null,
        url: '',
        order: null,
        metaData: '',
        children: [
            {
                code: 'statistics',
                name: '交易统计',
                desc: '交易统计',
                type: 'menu',
                icon: '',
                parentKey: 'statistics_group',
                method: '',
                url: '#/statistics',
                order: null,
                metaData: ''
            }
        ]
    },
    {
        code: 'permission_group',
        name: '权限',
        desc: '权限',
        type: 'menu_group',
        icon: '<i class="el-icon-user-solid"></i>',
        parentKey: 'permission_group',
        method: null,
        url: '',
        order: null,
        metaData: '',
        children: [
            {
                code: 'permission',
                name: '成员管理',
                desc: '成员管理',
                type: 'menu',
                icon: '',
                parentKey: 'permission_group',
                method: '',
                url: '#/permission',
                order: null,
                metaData: ''
            }
        ]
    }
];
