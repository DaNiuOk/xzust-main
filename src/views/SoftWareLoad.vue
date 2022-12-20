<style lang="scss" scoped>
.softLoad {
    padding: 34px 334px 68px 334px;
    .head {
        color: #000;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .pre {
            display: flex;
            align-items: center;
            width: 12%;
            .img {
                display: inline-block;
                width: 38px;
                height: 38px;
                margin-right: 11px;
            }
        }
        
        .dl {
            font-size: 22px;
            font-weight: bold;
        }
        .search {
            width: 55%;
        }
        .type {
            width: 26%;
            font-size: 13px;
            display: flex;
            justify-content: space-between;
        }
    }
    .littleNav {
        border-top: 3px solid #00356B;
        padding-top: 21px;
    }
    .content {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .block {
            p {
                margin: 0px;
            }
            box-sizing: border-box;
            display: inline-block;
            width: 23%;
            height: 216px;
            padding: 10px;
            box-shadow: 5px 5px 14px 5px #ccc;
            margin: 30px 0px 20px 0px;
            .name {
                color: #000;
                font-size: 22px;
            }
            .type{
                padding-left: 15px;
                position: relative;
                margin-top: 10px;
                &::before {
                    content: "";
                    position: absolute;
                    display: inline-block;
                    width: 4px;
                    height: 4px;
                    background-color: #00356B;
                    border-radius: 2px;
                    z-index: 9;
                    top: 50%;
                    left: 0px;
                    transform: translateY(-50%);
                }
            }
        }
    }
    .noShow {
        display: none;
    }
}
</style>
<template>
    <div>
        <Navigation />
        <div class="softLoad">
            <div class="head">
                <div class="pre">
                    <img class="img" src="../assets/down.png" alt="">
                    <span class="dl">Download</span>
                </div>
                <div class="search"><el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input></div>
                <p class="type">
                    <span>Windows</span>
                    <span>Mac</span>
                    <span>iOS</span>
                    <span>Android</span>
                    <span>Files</span>
                </p>
            </div>
            <div class="littleNav">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item><i class="el-icon-s-home" style="margin-right: 10px"></i>您当前的位置：</el-breadcrumb-item>
                    <el-breadcrumb-item>服务咨询</el-breadcrumb-item>
                    <el-breadcrumb-item>软件下载</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="content">
                <div class="block" v-for="(soft, index) in softList" :key="index">
                    <p class="name">{{soft.name}}</p>
                    <p class="info">{{soft.info}}</p>
                    <p class="type">{{soft.type}}</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
export default {
    components: { Navigation, Footer, },
    data() {
        return {
            softList: [
                { name: 'Advanced SystemCare', info: '文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍', type: 'Windows' },
                { name: 'Advanced SystemCare', info: '文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍', type: 'Windows' },
                { name: 'Advanced SystemCare', info: '文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍', type: 'Windows' },
                { name: 'Advanced SystemCare', info: '文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍', type: 'Windows' },
                { name: 'Advanced SystemCare', info: '文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍', type: 'Windows' },
                { name: 'Advanced SystemCare', info: '文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍', type: 'Windows' },
            ]
        }
    },
}
</script>