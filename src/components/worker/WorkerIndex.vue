<template>
    <div>
        <div>
            <WorkerHeadBar v-bind:worker="worker"/>
        </div>
        <div>
            <NavMenu v-bind:menu-item-list="menuItemList"/>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
    import NavMenu from '@/components/common/NavMenu'
    import WorkerHeadBar from "@/components/worker/common/WorkerHeadBar";
    export default {
        name: "WorkerIndex",
        components: {
            WorkerHeadBar,
            NavMenu
        },
        data() {
            return {
                menuItemList: [
                    {
                        optionName: '任务',
                        url: '/worker'
                    },
                    {
                        optionName: '历史记录',
                        url: '/worker/history'
                    },
                    {
                        optionName: '个人信息',
                        url: '/worker/profile'
                    }
                ],
                worker: {
                   ID: 'A2GCPZ6HVH27EN',
                   name: '工人1',
                   cash: 500,
                   prestige: 100,
                }
            }
        }
    }
</script>

<style scoped>

</style>