<template>
    <div :class="{'show':show}" class="header-search">
        <i ref="searchBtn" class="el-icon-search" @click="click" />
        <el-select
            ref="headerSearchSelect"
            v-model="search"
            :remote-method="querySearch"
            filterable
            default-first-option
            remote
            class="header-search-select"
            @change="change"
        >
            <el-option
                v-for="item in options"
                :key="item.path"
                :value="item"
                :label="item.title.join(' > ')"
            />
        </el-select>
    </div>
</template>


<script>
export default {
    name: 'HeaderSearch',
    data() {
        return {
            search: '',
            options: [],
            show: false
        };
    },
    computed: {
        routes() {
            return [];
        }
    },
    watch: {
        show(val) {
            if (val) {
                document.body.addEventListener('click', this.close);
            } else {
                document.body.removeEventListener('click', this.close);
            }
        }
    },
    methods: {
        click() {
            this.show = !this.show;

            if (this.show) {
                this.$refs.headerSearchSelect &&
                    this.$refs.headerSearchSelect.focus();
            }
        },
        close(e) {
            if (e.target === this.$refs.searchBtn) {
                return;
            }
            this.$refs.headerSearchSelect &&
                this.$refs.headerSearchSelect.blur();
            this.options = [];
            this.show = false;
        },
        change(val) {
            this.$router.push(val.path);
            this.search = '';
            this.options = [];
            this.$nextTick(() => {
                this.show = false;
            });
        },
        querySearch() {}
    }
};
</script>

<style lang="scss" scoped>
.header-search {
    font-size: 0 !important;

    .el-icon-search {
        cursor: pointer;
        font-size: 18px;
        color: #8c8c8c;
        vertical-align: middle;
    }

    .header-search-select {
        font-size: 18px;
        transition: width 0.2s;
        width: 0;
        overflow: hidden;
        background: transparent;
        border-radius: 0;
        display: inline-block;
        vertical-align: middle;

        ::v-deep .el-input__inner {
            border-radius: 0;
            border: 0;
            padding-left: 0;
            padding-right: 0;
            box-shadow: none !important;
            border-bottom: 1px solid #d9d9d9;
            vertical-align: middle;
        }
    }
    &.show {
        .header-search-select {
            width: 210px;
            margin-left: 10px;
        }
    }
}
</style>
