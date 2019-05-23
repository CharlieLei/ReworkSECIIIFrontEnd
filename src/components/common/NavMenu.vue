<template>
    <el-menu mode="horizontal" :default-active="menuIndex">
        <el-menu-item
                v-for="(menuItem,index) in menuItemList"
                v-bind:key="index">
            {{menuItem.optionName}}
        </el-menu-item>
    </el-menu>
</template>

<script>
    //  menuItem = {
    //     optionName = '选项一',
    //     url = '/worker'
    //  }
    export default {
        name: "NavMenu",
        props: ['menuItemList'],
        data() {
            return {
                menuIndex: 0
            }
        }
    }
</script>

<style scoped>

</style>