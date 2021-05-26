<template>
    <el-container class="layout-wrapper">
        <siderbar
            class="sidebar-wrapper"
            :menus="menus"
            :app-name="appName"
            :applications="applications"
        />
        <el-container direction="vertical" class="right-section min-w-960">
            <navbar
                :isClickHide="isClickHide"
                :user="user"
                @logout="$emit('logout')"
            >
                <slot></slot>
            </navbar>
            <slot name="main">
                <app-main />
                <el-footer height="20px"></el-footer>
            </slot>
        </el-container>
    </el-container>
</template>

<script>
import Navbar from './components/Navbar';
import Siderbar from './components/Sidebar';
import AppMain from './components/AppMain';

export default {
    name: 'Layout',
    components: {
        Navbar,
        Siderbar,
        AppMain,
    },
    props: {
        appName: {
            type: String,
            default: '',
        },
        menus: {
            type: Array,
            default() {
                return [];
            },
        },
        applications: {
            type: Array,
        },
        user: {
            type: Object,
        },
        type: {
            type: String,
        },
        isClickHide: {
            type: Boolean,
            default: true,
        },
    },
    provide() {
        return {
            user: this.user
        };
    },
};
</script>

<style lang="scss" scoped>
@import '~@/sass/base';

.layout-wrapper {
  height: 100vh;
}

.right-section {
  background: $--color-gray-200;
}
</style>