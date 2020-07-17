<template>
    <el-tabs v-model="defaultActive" class="container">
        <el-tab-pane label="登陆" name="login">
            <el-form ref="loginForm" :model="loginForm" label-width="5rem">
                <el-form-item label="用户名">
                    <el-input v-model="loginForm.username" size="small"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="loginForm.password" size="small"></el-input>
                </el-form-item>
                <el-alert type="error" v-if="error_show" v-bind:title="error_message" :closable="false" effect="dark"></el-alert>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button native-type="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register">
            <el-form ref="registerForm" :model="registerForm" label-width="5rem">
                <el-form-item label="用户名">
                    <el-input v-model="registerForm.username" size="small" ></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="registerForm.password" size="small"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input type="password" v-model="registerForm.check_password" size="small"></el-input>
                </el-form-item>
                <el-alert type="error" v-if="error_show_register" v-bind:title="error_message_register" :closable="false" effect="dark"></el-alert>
                <el-form-item>
                    <el-button type="primary" @click="register">注册</el-button>
                    <el-button native-type="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </el-tab-pane>
    </el-tabs>
</template>


<style lang="stylus">
    .container
        padding-left 1rem
        padding-right 4rem
    .el-input__inner 
        width 20rem
    .el-alert
        margin-bottom 1rem
        .el-alert__content
            margin 0 auto
</style>
<script>
// import qs from "qs";
export default {
    name: "Auth",
    created() {
        [this.loginForm.username, this.loginForm.password] = this.$store.getters.getLocal;
    },
    data() {
        return {
            defaultActive: "login",
            error_show: false,
            error_message: "",
            error_show_register: false,
            error_message_register: "",
            loginForm: {
                username: "",
                password: ""
            },
            registerForm: {
                username: "",
                password: "",
                check_password: ""
            }
        }
    },
    methods: {
        found_error(message) {
            this.error_show = true;
            this.error_message = message;
        },
        found_error_register(message) {
            this.error_show_register = true;
            this.error_message_register = message;
        },
        login() {
            let username = this.loginForm.username;
            let password = this.loginForm.password;
            if (! (username && password)) {
                this.found_error("用户名或者密码为空！");
                return ;
            }
            this.$http({
                method: "post",
                url: "/login",
                data: {
                    username,
                    password
                }
            })
            .then((response) => {
                if (response.status === 200) {
                    if (response.data.code === "OK") {
                        this.$store.commit("loginSuccess", username, password, response.data.response.token);
                        this.error_show = false;
                    } else {
                        this.found_error(response.data.response);
                        this.password = "";
                    }
                    
                }
            })
            .catch(error => {
                this.$message.error({
                    message: error
                })
            })
        },
        register() {
            let username = this.registerForm.username;
            let password = this.registerForm.password;
            let check_password = this.registerForm.check_password;
            if (!(username && password && check_password)) {
                this.found_error_register("信息填写不能为空！");
                return ;
            }
            if (password !== check_password) {
                this.found_error_register("两次密码输入不一致，请重试！");
                return ;
            }
            this.$http({
                method: "post",
                url: "/register",
                data: {
                    username,
                    password
                }
            })
            .then(response => {
                console.log(response);
                if (response.data.code === "CREATED") {
                    this.$store.commit("loginSuccess", username, password, response.data.response.token);
                } else {
                    this.found_error_register(response.data.response);
                }
            })
            .catch(error => {
                console.log(error);
                
            })
        }
    }
}
</script>