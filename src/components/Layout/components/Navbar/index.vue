<template>
    <div class="navbar flex-al-center">
        <div class="flex-al-center">
            <!-- <hamburger
                class="hamburger-container"
                @toggle-click="clickCollapse"
            /> -->
            <el-divider direction="vertical" />
            <breadcrumb />
        </div>
        <div class="right-menu flex-ju-end flex-al-center">
            <el-dropdown
                class="avatar-container"
                :hide-on-click="isClickHide"
                trigger="click"
                @command="emitCommand"
                @visible-change="visibleChange"
            >
                <div class="avatar-wrapper flex-ju-al-center">
                    <img
                        :src="(user && user.avatarUrl) || avatarUrl"
                        class="avatar"
                    />
                    <i class="el-icon-caret-bottom" />
                </div>
                <el-dropdown-menu slot="dropdown" class="user-popover">
                    <div class="popover-header">
                        <div class="banner">账户信息</div>
                        <div class="detail">
                            <div class="dept">
                                <span class="label">所在部门：</span><span class="value">{{ user && user.dept }}</span>
                            </div>
                            <div class="loginDate">
                                <span class="label">本次登陆：</span><span class="value">{{ user && user.loginDate }}</span>
                            </div>
                            <div class="loginAddress">
                                <span class="label">登录地区：</span><span class="value">{{ user && user.loginAddress }}</span>
                            </div>
                            <div class="loginIp">
                                <span class="label">IP：</span><span class="value">{{ user && user.loginIp }}</span>
                            </div>
                            <div class="loginLastDate">
                                <span class="label">上次登录：</span><span class="value">{{ user && user.loginLastDate }}</span>
                            </div>
                        </div>
                    </div>
                    <!-- 下拉选项支持内容插槽 -->
                    <div class="slot-dropdown-item">
                        <slot></slot>
                    </div>
                    <el-dropdown-item
                        icon="el-icon-switch-button"
                        command="logout"
                    >
                        退出登录
                    </el-dropdown-item
                    >
                </el-dropdown-menu>
            </el-dropdown>
            <screenfull class="right-menu-item" />
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Hamburger from "./Hamburger";
import Breadcrumb from "./Breadcrumb";
import Screenfull from "./Screenfull";

export default {
    name: "Navbar",
    components: {
        Hamburger,
        Breadcrumb,
        Screenfull,
    },
    props: {
        user: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    data() {
        return {
            avatarUrl: require("@assets/avator.png"),
            isClickHide: true,
            dropDown: false,
        };
    },
    methods: {
        // clickCollapse() {
        //     this.$eventBus.$emit("ocj_sidebar_collapse_event");
        // },
        emitCommand(command) {
            switch (command) {
                case "logout":
                    this.$emit("logout");
                    break;
                default:
                    console.log("unexpected command:", command);
            }
        },
        // 当下拉菜单隐藏时收起切换账号的菜单
        visibleChange(val) {
            this.dropDown = val;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~@/sass/base";

$--navbar-height: 62px;

.navbar {
    height: $--navbar-height;
    padding: 0 17px 0 26px;
    position: relative;
    background-color: $--fill-base;
    box-shadow: --get-shadow("down", 2);
    z-index: $--index-normal;
}

.hamburger-container {
    float: left;
}

.el-divider {
    margin: 0 20px;
}

.right-menu {
    flex: 1;
    height: $--navbar-height;
}

.right-menu-item {
    cursor: pointer;
    font-size: 18px;
    color: #8c8c8c;
    vertical-align: middle;
    margin: 0 20px;

    &:last-of-type {
        margin-left: 10px;
        margin-right: 0;
    }
}

.avatar-wrapper {
    margin: 0 8px;

    .avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    i {
        font-size: 12px;
        margin-left: 5px;
        color: rgba(0, 0, 0, 0.65);
    }
}

.user-popover {
    padding: 0px 0px 17px;

    .popover-header {
        width: 260px;
        padding: 16px 24px 12px;
        border-bottom: 1px solid #e8e8e8;
        
        .banner {
            color: "#333333";
            font-size: 13px;
            line-height: 30px;
            border-bottom: 1px solid #e8e8e8;
        }

        .detail {
            color: "#333333";
            font-size: 13px;
            margin-top: 15px;
            div {
                line-height: 30px;
            }
            .label {
                display: inline-block;
                width: 70px;
            }
        }

        .id {
            color: #242525;
            margin-left: 10px;
        }
    }
    ::v-deep .slot-dropdown-item {
        .el-dropdown-menu__item {
            padding: 0 24px;
        }
    }

    .el-dropdown-menu__item {
        padding: 0 24px;
        &:last-of-type ::v-deep i {
            color: #ff5656;
        }
    }
}
</style>
