<template>
    <el-row class="footer">
        <el-col :span="6" :offset=2>
            <img src="../assets/qrcode.png" alt="二维码">
            <h4>扫描二维码，进入官网！</h4>
        </el-col>
        <el-col :span="6" :offset=1>
            <h4>友情链接</h4>
            
        </el-col>
    </el-row>
</template>

 <style lang="stylus">
    .footer
        margin-top 2rem
        border-top 3px solid black
        background #242a31
        .el-col
            margin-top 3rem
            width 200px
            text-align center
            img 
                width 100px
            h4
                color white
 </style>

 <script>
 export default {
     name: "Footer",
     data() {
        return {

        }
     }
 }
 </script>