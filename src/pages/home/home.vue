<template>
    <div>
        路由 page-home
        <el-button @click="getMockData">获取mock数据</el-button>
        <h1>{{ mock }}</h1>
    </div>
</template>
<script>
    import { getMockData } from '@services'
    export default {
        name: 'home',
        data() {
            return {
                mock: ""
            }
        },
        methods: {
            async getMockData() {
                const res = await getMockData();
                this.mock = res.title;
            }
        },
    };
</script>