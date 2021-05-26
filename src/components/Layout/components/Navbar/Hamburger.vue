<template>
    <div class="component-hambuger" @click="toggle">
        <svg
            class="hambuger cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="17px"
            height="15px"
            viewBox="0 0 17 15"
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
                <g transform="translate(-88.000000, -22.000000)" stroke="#8C8C8C" stroke-width="2">
                    <g id="list" transform="translate(89.000000, 23.000000)">
                        <path d="M0,0.5 L15,0.5" />
                        <path d="M0,6.5 L15,6.5" />
                        <path d="M0,12.5 L15,12.5" />
                    </g>
                </g>
            </g>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Hambuger',
    methods: {
        toggle() {
            this.$emit('toggle-click');
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~@sass/styles/index.scss";

.component-hambuger {
    .hambuger {
        width: 13px;
        height: 14px;
    }
}
</style>
