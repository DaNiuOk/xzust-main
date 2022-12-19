<style lang="scss">
.serve {
    .serveContent {
        padding: 34px 334px 68px 334px;
        .content {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
            .left {
                width: 240px;
                .el-menu {
                    border-right: none;
                }
                .el-menu-item {
                    border-bottom: 1px solid #444;
                }
                .el-menu-item.is-active{
                        background: rgb(247, 247, 247) !important;
                }
                .el-button--text {
                    width: 100%;
                    color: #fff;
                    background-color: #00356B;
                    border-radius: 0;
                    text-align: left;
                    padding: 0px 0px 0px 18px;
                    line-height: 56px;
                }
            }
            .right {
                display: inline-block;
                width: 970px;
                .right_title {
                    width: 100%;
                    font-size: 22px;
                    color: #00356B;
                    border-bottom: 1px solid #00356B;
                    margin-bottom: 25px;
                }
                .form {

                   
                    .el-form-item {
                        position: relative;
                    }
                    .el-form-item__label {
                        text-align: left;
                        padding: 0px 0px 0px 40px;
                    }
                    .el-form-item::before {
                        display: inline-block;
                        width: 8px;
                        height: 8px;
                        background-color: #00356B;
                        border-radius: 4px;
                        position: absolute;
                        top: 20px;
                        left: 2%;
                        z-index: 9;
                        transform: translate(0, -50%);
                    }
                    .el-input {
                        width: 70%;
                    }
                    .el-textarea {
                        width: 70%;
                    }
                }
                .upList {
                    p {
                        display: flex;
                        justify-content: space-between;
                        position: relative;
                        line-height: 40px;
                    }
                    .name {
                        position: relative;
                        padding-left: 20px;
                    }
                    p::before {
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        border-radius: 5px;
                        background-color: #00356B;
                        position: absolute;
                        content: "";
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
            }
        }
    }
    .show {
        display: block;
    }
    .noShow {
        display: none;
    }
   
}
.last-item{
  &::before{
      background-color: #fff !important;
  }
  /deep/ .el-button--primary{
    background: #00356B;
  }
  .save{
      width:135px;
      margin-left:190px;
      height:45px;
  }
} 
</style>
<template>
    <div class="serve">
        <Navigation />
        <div :class="[banner ? 'show' : 'noShow']"><Banner /></div>
        <div class="serveContent">
            <div class="littleNav">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item><i class="el-icon-s-home" style="margin-right: 10px"></i>您当前的位置：</el-breadcrumb-item>
                    <el-breadcrumb-item>服务咨询</el-breadcrumb-item>
                    <el-breadcrumb-item>{{curTitle}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="content">
                 <div class="left">
                    <el-button type="text">服务咨询</el-button>
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vetical"
                        background-color="#F7F7F7" text-color="#444" active-text-color="#00356B"
                        @select="handleSelect"
                        >
                        <el-menu-item class="left_title" index="consult">业务咨询</el-menu-item>
                        <el-menu-item class="left_title" index="textDownload">文件下载</el-menu-item>
                        <el-menu-item class="left_title" index="softDownload">软件下载</el-menu-item>
                    </el-menu>
                 </div>
                 <div class="right">
                    <div class="right_title">{{curTitle}}</div>
                    <div :class="[activeIndex === 'consult' ? 'show': 'noShow']">
                        <div class="form">
                            <el-form ref="ruleForm" label-width="160px"  class="demo-ruleForm">
                                <el-form-item label="标题">
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="您的邮箱" prop="mail">
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="联系电话" prop="phone">
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="工作或学习单位">
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="联系地址">
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="网址">
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="给我们留言" prop="desc">
                                    <el-input type="textarea"></el-input>
                                </el-form-item>
                                 <el-form-item class="last-item" >
                                  <el-button class="save" type="primary" size="medium"  @click="onSubmit">提交</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                    <div :class="[activeIndex === 'download' ? 'show': 'noShow']">
                        <div class="upList">
                            <p v-for="(item, index) in upList" :key="index">
                                <span class="name">{{item.name}}</span>
                                <span class="time">{{item.time}}</span>
                            </p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navigation from './component/Navigation'
import Footer from './component/Footer'
import Banner from './component/Banner'

export default {
    components: { Navigation, Footer, Banner, },
    data() {
        return {
            activeIndex: "consult",
            curTitle: '业务咨询',
            banner: true,
            upList: [
                { name: '文字说明文字说明文字说明文字说明文字说明文', time: '(2020.1.29)'},
                { name: '文字说明文字说明文字说明文字说明文字说明文', time: '(2020.1.29)'},
                { name: '文字说明文字说明文字说明文字说明文字说明文', time: '(2020.1.29)'},
                { name: '文字说明文字说明文字说明文字说明文字说明文', time: '(2020.1.29)'},
                { name: '文字说明文字说明文字说明文字说明文字说明文', time: '(2020.1.29)'},
                { name: '文字说明文字说明文字说明文字说明文字说明文', time: '(2020.1.29)'},
                { name: '文字说明文字说明文字说明文字说明文字说明文', time: '(2020.1.29)'},
                { name: '文字说明文字说明文字说明文字说明文字说明文', time: '(2020.1.29)'},
                { name: '文字说明文字说明文字说明文字说明文字说明文', time: '(2020.1.29)'},
                { name: '文字说明文字说明文字说明文字说明文字说明文', time: '(2020.1.29)'},
                { name: '文字说明文字说明文字说明文字说明文字说明文', time: '(2020.1.29)'},
                { name: '文字说明文字说明文字说明文字说明文字说明文', time: '(2020.1.29)'},
            ]
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            switch(key) {
                case 'softDownload' :
                    this.curTitle = '下载中心'
                    this.activeIndex = 'softDownload'
                    this.banner = false
                break;
                case 'textDownload' :
                    this.curTitle = '下载中心'
                    this.activeIndex = 'textDownload'
                    this.banner = false
                break;
                case 'consult' :
                    this.curTitle = '业务咨询'
                    this.activeIndex = 'consult'
                    this.banner = true
                break;
            }
        },
        onSubmit() {
          console.log('submit!');
        }
    }
}
</script>