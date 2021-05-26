<template>
    <component
        :is="'identity-component'"
    >
        <div v-if="type === 'menu_group' || collapse">
            <el-submenu class="sub-menu-item" :index="code">
                <template slot="title">
                    <i v-if="icon" class="o-icon icon" :class="icon"></i>
                    <span :class="{'name-margin': icon}">{{ name }}</span>
                </template>
                <menu-item v-for="child in children" :key="child.code" v-bind="child" />
            </el-submenu>
        </div>
        <el-menu-item v-else class="sub-menu-page-item" :index="url" :menu="$props">
            <span slot="title">{{ name }}</span>
        </el-menu-item>
    </component>
</template>

<script>
export default {
    name: 'MenuItem',
    components: {
        IdentityComponent: {
            render() {
                return this.$slots.default;
            }
        }
    },
    props: {
        name: {
            type: String,
            required: true
        },
        code: String,
        type: {
            validator: function(value) {
                return ['menu_group', 'menu'].indexOf(value) !== -1;
            },
            required: true
        },
        icon: String,
        url: String,
        remark: String,
        children: [Array, null],
        // level = 1 时, 不允许展示 el-menu-item-group, 否则收缩功能异常
        firstLevel: {
            type: Boolean,
            default: false
        },
        collapse: {
            type: Boolean,
            default: false
        }
    }
};
</script>
<style lang="scss" scoped>
@import "~@/sass/base";
.el-menu-item {
    height: 40px;
    line-height: 40px;
}
::v-deep.el-submenu .el-submenu__title {
    height: 40px;
    line-height: 40px;
}
.el-submenu .el-menu-item {
    height: 40px;
    line-height: 40px;
}
.el-submenu__title i {
    color: white;
}
.name-margin {
    margin-left: 8px;
}

.is-opened {
    .el-menu-item {
            padding-left: 44px!important;
    }
}

.is-opened {
    .sub-menu-item {
        ::v-deep.el-submenu__title {
            padding-left: 44px!important;
        }
    }
}

.is-opened {
    .is-opened {
        .el-menu-item {
            padding-left: 70px!important;
        }
    }
}


// .sub-menu-page-item {
//     padding-left: 72px!important;
// }

</style>
