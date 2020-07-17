<template>
    <div>
        <el-page-header @back="goBack" v-bind:content=title>

        </el-page-header>
    </div>
</template>

<style lang="stylus">

</style>

<script>
export default {
    data() {
        return {
            title: "this is title"
        }
    },
    methods: {
        goBack() {
            this.$router.push("/index");
        }
    }
}
</script>