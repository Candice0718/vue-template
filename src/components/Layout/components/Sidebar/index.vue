<template>
    <div
        class="component-Sidebar"
        :class="{ 'component-Sidebar--collapse': collapse }"
    >
        <div>
            <div class="logo-wrap" @click="shiftPanel">
                <template v-if="!collapse">
                    <h1 :title="appName">{{ appName }}</h1>
                </template>
            </div>
        </div>
        <el-select
            v-model="current"
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词搜索菜单"
            :remote-method="remoteMethod"
            :loading="loading"
            @change="change"
        >
            <el-option
                v-for="item in options"
                :key="item.label"
                :label="item.label"
                :value="item"
            >
            </el-option>
        </el-select>
        <el-scrollbar class="scrollbar" wrap-class="scrollbar-wrap">
            <el-menu
                :default-active="activeIndex"
                :collapse="collapse"
                :background-color="variables.menuBg"
                :text-color="variables.menuText"
                :active-text-color="variables.menuActiveText"
                :collapse-transition="false"
                :unique-opened="true"
                mode="vertical"
                @select="clickMenu"
            >
                <menu-item
                    v-for="menu in menus"
                    :key="menu.code"
                    :collapse="collapse"
                    firstLevel
                    v-bind="menu"
                />
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import MenuItem from './MenuItem';
const SearchLimit = 8;

export default {
    name: 'com-Sidebar',
    components: {
        MenuItem,
    },
    props: {
        appName: {
            type: String,
            default: '东方购物系统',
        },
        menus: {
            type: Array,
            default() {
                return [];
            },
        },
        applications: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    data() {
        return {
            // 是否显示应用面板
            visible: false,
            loading: false,
            current: null,
            options: [],
            // 侧栏收缩
            collapse: false,
            variables: {
                menuBg: '#212434',
                menuText: '#fff',
                menuActiveText: '#0B69FF',
            },
        };
    },
    computed: {
        activeIndex() {
            return window.location.pathname + '#' + this.$route.path;
        },
    },
    created() {

    },
    methods: {
        shiftCollapse() {
            this.collapse = !this.collapse;
        },
        shiftPanel() {
            this.visible = !this.visible;
        },
        closePanel() {
            this.visible = false;
        },
        change(val) {
            this.jump(val.url, val.name);
        },
        remoteMethod(query) {
            if (!query) {
                return;
            }
            this.options = [];
            this.loading = true;
            this.search(this.menus, query);
            this.loading = false;
        },
        search(arr, query) {
            // 最多只显示8条搜索结构
            if (!arr || this.options.length > SearchLimit) {
                return;
            }
            arr.forEach(item => {
                if (item.type === 'menu_group') {
                    this.search(item.children, query);
                }
                if (this.options.length > SearchLimit) {
                    return;
                }
                if (item.type === 'menu' && item.name.indexOf(query) > -1) {
                    console.log(item);
                    this.options.push({
                        label: item.name,
                        url: item.url,
                    });
                }
            });
        },
        clickMenu(index, indexPath, item) {
            const { menu } = item.$attrs;
            this.jump(menu.url, menu.name);
        },
        jump(url, name) {
            let { location } = this.$router.resolve(url);
            if (url.indexOf('iframe=') > -1) {
                this.$router.push(
                    `/iframe?url=${encodeURIComponent(url)}&title=${name}`
                );
                return;
            }
            // path 相同, 则为应用内路由
            if (location.path === window.location.pathname) {
                this.$router.push(location.hash.replace('#', ''));
                return;
            }
            // 变更路由跳转方式:
            // window.location.href = url;
            this.$router.push({path: url.replace('#','')});
        },
    },
};
</script>

<style lang="scss" scoped>
@import '~@/sass/base';

$--sidebar-width: 240px;
$--sidebar-collapse-width: 64px;

.component-Sidebar {
  height: 100%;
  background-color: #212434;
  transition: width 0.15s;
  width: $--sidebar-width;
  min-width: $--sidebar-width;
  z-index: 1000;

  &.component-Sidebar--collapse {
    width: $--sidebar-collapse-width;
    min-width: $--sidebar-collapse-width;
  }

  ::v-deep .el-menu {
    border-right: none;
  }
}

.logo-wrap {
  display: flex;
  align-items: center;
  height: 60px;
  position: relative;
  z-index: 1;
  color: #fff;
  //   border-bottom: 1px solid #33374a;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.5);

  .logo {
    width: 30px;
    height: 30px;
    margin-left: 15px;
  }

  h1 {
    flex: 1;
    font-size: 20px;
    line-height: 1;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-left: 6px;
  }

  i {
    font-size: 12px;
    margin: 0 16px 0 4px;

    &.active {
      transform: rotate(-90deg);
    }
  }
}
.el-select {
  width: 98%;
  margin: 0 1%;
}
.scrollbar {
  height: calc(100% - 90px);
}

.application-panel {
  position: absolute;
  top: 0;
  left: $--sidebar-width;
  z-index: $--index-top;
}
</style>
