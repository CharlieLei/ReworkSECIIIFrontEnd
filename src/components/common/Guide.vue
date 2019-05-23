<template>
    <el-menu mode="horizontal" :default-active="menuIndex">
        <el-menu-item index="0" id="logo">标签一</el-menu-item>
        <el-menu-item index="1"><a href="/"></a>标签二</el-menu-item>
        <el-menu-item index="2"><a href="/">标签三</a></el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "guide",
        data() {
            return {
                menuIndex: 0,
            }
        }
    }
</script>

<style scoped>

</style>