<template>
    <el-main class="main-container">
        <transition name="fade-transform" mode="out-in">
            <keep-alive :exclude="noCache" :max="maxCache">
                <router-view />
            </keep-alive>
        </transition>
    </el-main>
</template>

<script>
export default {
    name: 'AppMain',
    data(){
        return {
            noCache: [],
            maxCache: 30
        };
    },
    watch: {
        $route(val) {
            let { meta, matched } = val;
            if (!meta||!meta.noCache||matched.length===0) {
                return;
            }
            // 获取当前页面组件的真实名称，异步页面，只有在页面加载完成后，才能获取真实名称
            const name=matched[1].components.default.name;
            if(name&&!this.noCache.includes(name)){
                this.noCache.push(name);
            }
        },
    },
    mounted() {
        // 关闭顶部tab，清除keep-alive缓存
        this.$eventBus.$on('removeTabView',this.delView);
    },
    methods: {
        // 通过更新exclude属性，动态触发keep-alive清除缓存
        delView(name){
            if(this.noCache.includes(name)){
                return;
            }
            this.noCache.push(name);
            this.$nextTick(()=>{
                this.noCache=this.noCache.map((item)=>{
                    if(item !== name){
                        return item;
                    }
                });
            });
        }
    },
};
</script>

<style lang="scss">
.main-container::-webkit-scrollbar {
    display: none; /* Chrome Safari */
}
.main-container {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
}
.fade-transform-leave-active,
.fade-transform-enter-active {
    transition: all 0.5s;
}

.fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
}

.fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
