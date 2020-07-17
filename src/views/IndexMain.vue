<template>
    <div>
        <div class="index">
            <div class="image-container">
                <img src="../assets/lpssy.jpeg" alt="六盘水师范学院">
            </div>

            <div class="auth-container">
                <Auth />
            </div>
        </div>
        <MiniFunction />
    </div>
    
</template>

<script>
    import Auth from "../components/Auth";
    import MiniFunction from "../components/MiniFunction";

    export default {
        components: {
            Auth,
            MiniFunction,
        }
    }
</script>

<style lang="stylus" scoped>
    .index
        position relative
        height 405px
        .image-container
            position absolute
            width 100%
            height 400px
            overflow hidden
            img 
                position absolute
                top -350px
                width 100%
        .auth-container
            position absolute
            top 2rem
            right 20rem
            background rgba(255, 255, 255, 0.8)

</style>