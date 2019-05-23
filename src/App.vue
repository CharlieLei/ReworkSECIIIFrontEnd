<template>
  <div id="app">

<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
      <el-button @click="visible = true">Button</el-button>
      <el-dialog :visible.sync="visible" title="Hello world">
          <p>Try Element</p>
      </el-dialog>
      <NavMenu v-bind:menu-item-list="menuItemList"/>
  </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu'

export default {
  name: 'app',
  components: {
      NavMenu
  },
  data: function() {
    return {
        visible: false,
        menuItemList: [
            {
                optionName: '选项一',
                url: '/worker'
            },
            {
                optionName: '选项二',
                url: '/requester'
            },
            {
                optionName: '选项三',
                url: '/'
            }
        ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
