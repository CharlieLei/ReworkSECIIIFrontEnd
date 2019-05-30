<template>
    <div id="navContainer">
        <div id="imgPart">
            <div class="logo">
                <a href="/" style="text-decoration: none;">
                    <img class="img" v-bind:src="logoUrl" alt="众包标注"/>
                </a>
            </div>
            <div class="collapse-button-container">
                <button type="button" class="collapse-button" v-on:click="pressCollapseButton">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

        </div>
        <div id="menuPart">
            <el-menu 
                v-if="seen"
                :mode="mode"
                :default-active="menuIndex"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
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
                seen: !this.isCollapsed(),
                mode: this.isCollapsed() ? "vertical":"horizontal",
                menuIndex: '0',
                logoUrl: require("@/assets/logo.jpg")
            }
        },
        methods: {
            toPage(url) {
                this.$router.push(({path: url}));
            },
            isCollapsed() {
                return parseInt(document.documentElement.clientWidth/800)>0 ? 0:1;
            },
            pressCollapseButton() {
                this.seen = !this.seen;
            }
        },
        mounted() {
            const _this = this;
            window.onresize = function checkCollapsed() {
                if(parseInt(document.documentElement.clientWidth/800)>0){
                    _this.seen = 1;
                }else{
                    _this.seen = 0;
                }
            };
        }
    }
</script>

<style scoped>
    #navContainer{
        margin: 0;
        padding-left: 1em;
        padding-right: 1em;
        background: #545c64;
        color: #fff;
        z-index: 100;
    }

    #menuPart ul{
        border-bottom: none !important;
        border-right: none !important;
    }

    #imgPart{
        display: table;
        width: 100%;
    }

    .logo{
        width: 120px;
        height: 60px;
        vertical-align:middle;
        display:table-cell;
    }

    .img{
        vertical-align:middle;
    }

    .collapse-button-container{
        text-align: right;
        display: table-cell;
    }

    .collapse-button{
        position: relative;
        float: right;
        padding-top: 0.3em;
        padding-bottom: 0.4em;
        margin-top: 1.25em;
        margin-right: 1em;
        margin-bottom: 0.5em;
        background-color: transparent;
        background-image: none;
        border: 0.125em solid #333;
        border-radius: 0.25em;
        cursor:pointer;
    }
    
    .icon-bar{
        background-color: #fff;
        display: block;
        width: 1.4em;
        height: 0.15em;
        border-radius: 0.1em;
        margin-top: 0.2em;
    }


    /* 当屏幕宽度较长时  不需要压缩导航栏 */
    @media screen and (min-width: 800px){
        .collapse-button{
            display: none;
        }

        #imgPart{
            align-items: center;
            float: left;
            width: auto;
        }

        .logo{
            display:table-cell;
        }
    
        #menuPart{
            margin-left: 150px;
        }
    }
</style>