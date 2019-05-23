<template>
    <el-row type="flex" justify="center" class="info-row">
        <el-col :span="10"><p>工人ID：{{worker.ID}}</p></el-col>
        <el-col :span="10"><p>账户余额：{{worker.cash}}</p></el-col>
        <el-col :span="10"><p>声望：{{worker.prestige}}</p></el-col>
        <el-col :span="5"><p>你好，{{worker.name}}</p></el-col>
        <el-col :span="1"><p>|</p></el-col>
        <el-col :span="2"><p><a href="/">登出</a></p></el-col>
    </el-row>
</template>

<script>
    // worker: {
    //    ID: 'A2GCPZ6HVH27EN',
    //    name: '工人1'，
    //    cash: 500,
    //    prestige: 100,
    // }
    export default {
        name: "WorkerHeadBar",
        props: ['worker'],

    }
</script>

<style scoped>

</style>