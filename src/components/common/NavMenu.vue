<template>
    <div>
        <div id="imgPart">
            <img v-bind:src="logoUrl" alt="众包标注"/>
        </div>
        <div id="menuPart">
            <el-menu mode="horizontal" :default-active="menuIndex">
                <el-menu-item
                        v-for="(menuItem,index) in menuItemList"
                        v-bind:key="index + ''"
                        v-on:click="toPage(menuItem.url)">
                    {{menuItem.optionName}}
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
    // 从父组件传入menuItemList，一个menuItem的数组
    //  menuItem: {
    //     optionName = '选项一',
    //     url = '/worker'
    //  }
    export default {
        name: "NavMenu",
        props: ['menuItemList'],
        data() {
            return {
                menuIndex: 0,
                logoUrl: require("@/assets/logo.jpg")
            }
        },
        methods: {
            toPage(url) {
                this.$router.push(({path: url}));
            }
        }
    }
</script>

<style scoped>
    #imgPart {
        float:left;
    }

    #menuPart {
        margin-left: 100px;
        padding-left: 30px;
    }
</style>