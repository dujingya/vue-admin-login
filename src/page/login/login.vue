<!-- 中医问卷题目 -->
<template>
<div :class="[loadError ? 'loadError' : '', 'loginPage']">
    <div v-if="this.loadError">
        <keep-alive>
            <reload-page :reload="this.againLoad"></reload-page>
        </keep-alive>
    </div>
    <div v-else class="loginContent">

        <el-row :gutter="0" style="height:100%;">
            <el-col :xs="6" :sm="10" :md="14" :lg="16" style="height:100%;">
                <div class="loginLeft"></div>
            </el-col>
            <el-col :xs="18" :sm="14" :md="10" :lg="8" style="height:100%;">
                <div class="loginRight">
                    <div class="rightBox">
                        <img src="../../images/logo_login.png" alt="" class="loginLogo">
                        <div class="errInfoBox" v-if="errMsgText"><i class="iconfont icon-tishi errInfoIcon"></i>{{errMsgText}}</div>
                        <ul class="loginUL">
                            <li>
                                <div class="inputTitle">
                                    用户名
                                </div>
                                <el-input placeholder="请输入用户名" v-model="formData.userName" clearable class="loginInput"></el-input>
                            </li>
                            <li>
                                <div class="inputTitle">
                                    密码
                                </div>
                                <el-input placeholder="请输入密码" clearable type="password" v-model="formData.password" class="loginInput"></el-input>
                            </li>
                            <li class="checkPassWord">
                                <div class="">
                                    <div class="inputTitle">
                                        验证码
                                    </div>
                                    <el-input placeholder="请输入内容" clearable v-model="formData.verificationCode" class="loginInput"></el-input>
                                </div>
                                <div class="verification">
                                    <div class="inputTitle" @click="getVerificationCode">
                                        点击刷新
                                    </div>
                                    <!-- <span v-if="!verificationCodeSrc" class="getverificationCode" @click="getVerificationCode">{{getVcodeText}}</span> -->
                                    <!-- {{verificationCodeSrc}} -->
                                    <img :src="verificationCodeSrc" alt="">
                                </div>
                            </li>
                            <li>
                                <div class="inputTitle">
                                    <el-checkbox label="1" v-model="remeberMe">记住我</el-checkbox>
                                </div>
                                <button type="button" class="loginBtn" @click="goLogin">登录</button>
                            </li>
                        </ul>

                    </div>
                </div>
            </el-col>

        </el-row>
    </div>
</div>
</template>

<script>
// import md5 from 'js-md5'
import store from 'store'
import * as API from '../../services/api'
import http from '../../services/axios'
export default {
    data() {
        return {
            loadError: false,
            formData: {
                userName: '',
                password: '',
                verificationCode: ''

            },
            remeberMe: '',
            verificationCodeSrc: '',
            getVcodeText: '',
            errMsgText: '',
            Utoken: ''
        }
    },
    methods: {
        init() {
            let userPWDInfo = store.get('userPWD')
            let remeberMe = store.get('remeberMe')
            if (userPWDInfo) {
                this.formData.userName = userPWDInfo.name;
                this.formData.password = userPWDInfo.password;
                this.remeberMe = remeberMe;
            }
            this.getVerificationCode()
        },
        checkForm() {
            // 表单校验
            if (this.formData.userName.trim() === '') {
                this.errMsgText = '用户名不能为空'
                return false
            }
            if (this.formData.password === '') {
                this.errMsgText = '密码不能为空'
                return false
            }
            if (this.formData.verificationCode.trim() === '') {
                this.errMsgText = '验证码不能为空'
                return false
            }
            return true
        },
        goLogin() {
            if (this.checkForm()) {
                console.log('this.formData=', this.formData)
                if (this.remeberMe) {
                    // 写入localstorage
                    store.set('userPWD', { name: this.formData.userName, password: this.formData.password })
                    store.set('remeberMe', true)
                } else {
                    store.remove('userPWD')
                    store.set('remeberMe', false)
                }
                // let passwordMd5 = md5(this.formData.password)
                let loginParams = {
                    name: this.formData.userName,
                    password: this.formData.password,
                    vcode: this.formData.verificationCode
                }
                console.log(this.Utoken, loginParams, '00000000')
                http.login(API.login, loginParams, (data, headers) => {
                    console.log('logindata', headers)
                    if (data.c === 200) {
                        let resData = data.d
                        // 把个人信息写入localstore
                        store.set('personalData', resData)
                        store.set('X-Auth-Token', headers['x-auth-token'])
                        console.log('X-Auth-Token', headers['x-auth-token'])
                        this.$router.push('/home')
                        console.log('remeberMe', this.remeberMe);
                    } else {
                        // 登录失败把以前的个人信息清了。
                        store.remove('personalData')
                        this.errMsgText = data.m;
                    }
                }, this.Utoken)
            }
        },
        getVerificationCode() {
            let date = new Date();
            let timestamp = date.getTime();
            http.get(API.vcode, { v: timestamp }, (data, headData) => {
                if (headData['captcha-code']) {
                    this.Utoken = headData['captcha-code']
                    console.log('captcha-code', this.Utoken)
                }
                console.log(this.Utoken)
                if (data.c === 200) {
                    this.verificationCodeSrc = data.d;
                }
                console.log('this.verificationCodeSrc:', this.verificationCodeSrc)
            })
        }
    },
    computed: {},
    mounted() {
        this.init();
    }

}
</script>

<style lang="scss">
/* 大屏幕（大桌面显示器，大于等于 1200px） 默认*/
.loginPage {
    height: 100%;
    min-height: 500px;

    .loginContent {
        height: 100%;
        .loginLeft {
            // background: red;
            height: 100%;
            background: url("../../images/bg_img_login.jpg") center;
            background-size: cover;
        }
        .loginRight {
            height: 100%;
            position: relative;
            background: #fff;
            .errInfoBox {
                font-size: 12px;
                color: #f7571e;
                line-height: 30px;
                display: flex;
                flex-direction: row;
                height: 30px;
                background-color: #fff1ec;
                border-radius: 2px;
                padding: 0 10px;
                .errInfoIcon {
                    margin-right: 6px;
                }
            }
            .rightBox {
                height: 480px;
                width: 370px;
                margin-left: 50px;
                padding-right: 30px;
                position: absolute;
                top: 80px;
                .getverificationCode {
                    height: 48px;
                    line-height: 48px;
                    width: 130px;
                    text-align: center;
                    color: #666;
                    border: 1px solid #dbdbdb;
                    display: inline-block;
                }
                .loginLogo {
                    margin-bottom: 15px;
                }
                .loginInput {
                    input {
                        border: none;
                        border-radius: 2px;
                        background-color: #f2fafa;
                        height: 50px;
                        line-height: 50px;
                    }
                }
                .loginBtn {
                    height: 50px;
                    width: 100%;
                    margin-top: 5px;
                    background-image: linear-gradient(90deg, #4cd9cb 0%, #88c6ff 100%);
                    box-shadow: 0 9px 10px 0 rgba(76, 255, 237, 0.16), 0 9px 18px 0 rgba(0, 77, 69, 0.09);
                    border-radius: 2px;
                    border: none;
                    color: #fff;
                    font-size: 20px;
                    outline: none;
                }
                .loginUL {
                    display: flex;
                    flex-direction: column;
                    margin-left: 5px;
                    li {
                        margin-bottom: 14px;
                        .inputTitle {
                            font-size: 14px;
                            line-height: 40px;
                            color: #ababab;
                        }

                    }
                    .checkPassWord {
                        display: flex;
                        flex-direction: row;
                        .verification {
                            width: 130px;
                            margin-left: 20px;
                            img {
                                width: 130px;
                            }
                        }
                    }
                }
            }
        }
    }
}

/* 中等屏幕（桌面显示器，大于等于 1024px） */
@media screen and (min-width:1024px) {
    .loginPage {}
}
</style>
