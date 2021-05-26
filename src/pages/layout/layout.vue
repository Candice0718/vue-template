<template>
    <div>
        <Layout
            ref="layout"
            :appName="appName"
            :menus="menus"
        >
        </Layout>
    </div>
</template>
<script>
    export default {
        name: 'layout',
        data() {
            return {
                menus: [],
                appName: '后台系统'
            }
        },
        created() {
            this.menus = require("./sideMenu.js").default;
        }
    };
</script>