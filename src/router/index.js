import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

//告诉vue使用vue-router路由组件
Vue.use(VueRouter);

// 创建路由器实例，并且传入`routes`变量作为路由
export default new VueRouter({
    //定义路由表
    routes: [
        {path: '/helloworld', component: HelloWorld},
    ],
    mode: 'history'
});