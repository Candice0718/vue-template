<template>
    <div>
        路由 page-home
        <el-button @click="getMockData">获取mock数据</el-button>
    </div>
</template>
<script>
    import { getMockData } from '@services'
    export default {
        name: 'home',
        methods: {
            getMockData() {
                getMockData();
            }
        },
    };
</script>