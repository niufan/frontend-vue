<template>
    <el-container id="login">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登陆</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>

    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                console.log('submit: {username:' + this.form.username + ', password:' + this.form.password +  '}');
            }
        }
    }
</script>

<style>
    #login {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }
</style>