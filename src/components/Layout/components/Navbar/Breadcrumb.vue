<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition name="breadcrumb">
            <el-breadcrumb-item :key="title">{{ title }}</el-breadcrumb-item>
        </transition>
    </el-breadcrumb>
</template>

<script>
export default {
    name: 'Breadcrumb',
    computed: {
        title() {
            const {
                $route: { meta }
            } = this;

            return (meta && meta.title) || '新页面';
        }
    }
};
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
    font-size: 16px;
    line-height: 24px;
    opacity: 0.85;

    ::v-deep .el-breadcrumb__item:last-child .el-breadcrumb__inner {
        color: rgba(0, 0, 0, 1);
    }
}
</style>

<style>
/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
    transition: all 0.5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
}

.breadcrumb-leave-active {
    position: absolute;
}
</style>
