<style lang="scss" scoped>
    .contactUs {
        .us {
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
                    .link {
                        .item {
                            width: 100%;
                            font-size: 22px;
                            line-height: 80px;
                            color: #00356B;
                            position: relative;
                            padding-left: 30px;
                            margin: 0px;
                            &::before {
                                content: "";
                                display: inline-block;
                                width: 10px;
                                height: 10px;
                                border-radius: 5px;
                                background-color: #00356B;
                                position: absolute;
                                top: 50%;
                                left: 0px;
                                transform: translateY(-50%);
                            }
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

</style>
<template>
    <div class="contactUs">
        <Navigation />
        <Banner />
        <div class="us">
            <div class="littleNav">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item><i class="el-icon-s-home" style="margin-right: 10px"></i>您当前的位置：</el-breadcrumb-item>
                    <el-breadcrumb-item>联系我们</el-breadcrumb-item>
                    <el-breadcrumb-item>联系方式</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="content">
                <div class="left">
                   <el-button type="text">联系我们</el-button>
                   <el-menu class="el-menu-demo" mode="vetical" default-active="phone"
                       background-color="#F7F7F7" text-color="#444" active-text-color="#00356B"
                       >
                       <el-menu-item class="left_title" index="phone">联系方式</el-menu-item>
                   </el-menu>
                </div>
                <div class="right">
                    <div class="right_title">联系方式</div>
                    <div class="link">
                        <p class="item">地址：西藏自治区林芝市巴宜区育才西路100号</p>
                        <p class="item">电话：0000-00000000</p>
                        <p class="item">邮箱：123456@163.com</p>
                        <p class="item">微信：0000000000000</p>
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
        }
    },
}
</script>
