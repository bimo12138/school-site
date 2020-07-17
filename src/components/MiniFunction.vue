<template>
    <el-row class="function-row">
        <el-col :span="22" :offset=1>
            <h2>小程序</h2>
        </el-col>
        <el-col :offset=1></el-col>
        <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2: 0" >
            <el-card shadow="hover">
                <img src="../assets/demo_function.jpeg" alt="小程序描述" class="image" @click="func" data-title="123">
                <div class="bottom clearfix">
                    测试小程序-失物招领
                </div>
            </el-card>
        </el-col>
        <router-link :to="{path: '/mini', query: {progreamId: 233}}">
            小程序链接
        </router-link>
    </el-row>
</template>


<style lang="stylus">
    .function-row
        width 80%
        margin 0 auto
        .el-col
            margin-top 1rem 
            .bottom
                text-align center

</style>

<script>
    /**
     * MiniProgream 结构
     * {
     *  "progreamIcon",
     *  "progreamTitle",
     *  "progreamUrl"
     * }
     */
export default {
    name: "MiniFunction",
    data() {
        return {

        }
    },
    methods: {
        func() {
            console.log(this);
            
        }
    }
}
</script>