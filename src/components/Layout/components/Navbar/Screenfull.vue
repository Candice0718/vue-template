<template>
    <div class="flex-ju-al-center" @click="click">
        <svg
            v-if="isFullscreen"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            version="1.1"
        >
            <g
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <g
                    transform="translate(-1407.000000, -22.000000)"
                    stroke="#8C8C8C"
                    stroke-width="1.6"
                >
                    <g id="minimize" transform="translate(1408.000000, 23.000000)">
                        <!-- eslint-disable -->
                        <path
                            d="M3.88888889,0 L3.88888889,2.33333333 C3.88888889,3.19244294 3.19244294,3.88888889 2.33333333,3.88888889 L0,3.88888889 M14,3.88888889 L11.6666667,3.88888889 C10.8075571,3.88888889 10.1111111,3.19244294 10.1111111,2.33333333 L10.1111111,0 M10.1111111,14 L10.1111111,11.6666667 C10.1111111,10.8075571 10.8075571,10.1111111 11.6666667,10.1111111 L14,10.1111111 M0,10.1111111 L2.33333333,10.1111111 C3.19244294,10.1111111 3.88888889,10.8075571 3.88888889,11.6666667 L3.88888889,14"
                        />
                        <!-- eslint-enable -->
                    </g>
                </g>
            </g>
        </svg>
        <i v-else class="el-icon-full-screen" />
    </div>
</template>

<script>
import screenfull from 'screenfull';

export default {
    name: 'Screenfull',
    data() {
        return {
            isFullscreen: false
        };
    },
    mounted() {
        if (screenfull.isEnabled) {
            screenfull.on('change', this.change);
            screenfull.on('error', event => {
                console.error('Failed to enable fullscreen', event);
            });
        }
    },
    destroyed() {
        if (screenfull.isEnabled) {
            screenfull.off('change', this.change);
        }
    },
    methods: {
        click() {
            if (!screenfull.isEnabled) {
                this.$message({
                    message: 'you browser can not work',
                    type: 'warning'
                });
                return false;
            }
            // 兼容IE浏览器
            if(Boolean(window.ActiveXObject)||"ActiveXObject" in window){
                screenfull.toggle(document.getElementsByTagName("body")[0]);
            }else{
                screenfull.toggle();
            }
        },
        change() {
            this.isFullscreen = screenfull.isFullscreen;
        }
    }
};
</script>
