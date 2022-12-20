<style lang="scss" scoped>
.work {
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
            width: 972px;
            .right_title {
                width: 100%;
                font-size: 22px;
                color: #00356B;
                line-height: 42px;
                border-bottom: 1px solid #00356B;
                margin-bottom: 31px;
            }
            .simple {
                .block {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    height: 168px;
                    border-bottom: 1px solid #999;
                    .img {
                        width: 268px;
                        height: 154px;
                        background-color: #00356B;
                    }
                    .introduce {
                        width: 674px;
                        p {
                            margin: 0;
                        }
                        .title {
                            color: #00356B;
                            font-size: 20px;
                        }
                        .text {
                            width: 674px;
                            color: #555555;
                            font-size: 17px;
                            height: 70px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 3;
                            margin: 10px 0px;
                        }
                        .el-button {
                            width: 94px;
                            height: 30px;
                            line-height: 30px;
                            border-radius: 15px;
                            padding: 0;
                            border: 1px solid #00356B;
                            color: #00356B;
                        }
                    }
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
        <Banner />
        <div class="work">
            <div class="littleNav">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item><i class="el-icon-s-home" style="margin-right: 10px"></i>您当前的位置：</el-breadcrumb-item>
                    <el-breadcrumb-item>在研工作</el-breadcrumb-item>
                    <el-breadcrumb-item>承担项目</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="content">
                <div class="left">
                   <el-button type="text">在研工作</el-button>
                   <el-menu class="el-menu-demo" mode="vetical" default-active="assume"
                       background-color="#F7F7F7" text-color="#444" active-text-color="#00356B"
                       >
                       <el-menu-item class="left_title" index="assume">承担项目</el-menu-item>
                   </el-menu>
                </div>
                <div class="right">
                    <div class="right_title">承担项目</div>
                    <div class="simple">
                        <div class="block" v-for="(item, index) in workList" :key="index">
                            <div class="img"></div>
                            <div class="introduce">
                                <p class="title">{{item.title}}</p>
                                <p class="text">{{item.content}}</p>
                                <el-button>more</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
export default {
    components: { Navigation, Footer, Banner, },
    data() {
        return {
            workList: [
                { title: '这是标题', content: '文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字', btn: 'more' },
                { title: '这是标题', content: '文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字', btn: 'more' },
                { title: '这是标题', content: '文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字', btn: 'more' },
                { title: '这是标题', content: '文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字', btn: 'more' },
                { title: '这是标题', content: '文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字', btn: 'more' },
                { title: '这是标题', content: '文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字', btn: 'more' },
            ]
        }
    },
}
</script>