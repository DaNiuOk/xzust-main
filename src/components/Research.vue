<style lang="scss" scoped>
.research {
    .head {
        position: relative;
        img {
            width: 100%;
        }
        .name {
            line-height: 70px;
            position: absolute;
            z-index: 9;
            top: 0px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 48px;
            color: #fff;
            width: 100%;
            text-align: center;
        }
    }
    .content {
        padding: 34px 334px 68px 334px;
        .situation {
            border-bottom: 1px dashed #ccc;
            padding-bottom: 50px;
            display: flex;
            justify-content: space-between;
            span {
                display: inline-block;
            }
            .text {
                width: 788px;
                font-size: 16px;
                line-height: 28px;
                color: #363636;
            }
            .title {
                color: #00356B;
                font-size: 22px;
                position: relative;
                &::before {
                    content: "";
                    display: inline-block;
                    width: 7px;
                    height: 7px;
                    background-color: #00356B;
                    position: absolute;
                    top: 13px;
                    left: -20px;
                }
            }
        }
        .development {
            width: 100%;
            font-size: 40px;
            color: #00356B;
            text-align: center;
        }
        .show {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .block {
                width: 32%;
                height: 400px;
                background-color: #00356B;
                margin-bottom: 26px;
            }
        }
    }
}
</style>
<template>
    <div>
        <Navigation />
        <div class="research">
            <div class="head">
                <img src="../assets/research.png" alt="">
                <p class="name">S&nbsp;O&nbsp;F&nbsp;T&nbsp;W&nbsp;A&nbsp;R&nbsp;E&nbsp;&nbsp; R&nbsp;& D&nbsp;&nbsp; A&nbsp;N&nbsp;D H&nbsp;A&nbsp;R&nbsp;D&nbsp;W&nbsp;A&nbsp;R&nbsp;E&nbsp;&nbsp; R&nbsp;& D</p>
            </div>
            <div class="content">
                <div class="situation">
                    <span class="text">地震、滑坡、泥石流、大坝信息管理系统在这些信息管理系统中，包括了各种GIS服务（有信息查询、图层展示、在线分析等····）人工智能服务（包括卷积、循环、强化、对抗等人工智能算法对滑坡、地震、泥石流等灾害的分析和预测以及对大坝的抗震分析）、信息查询（包括且不限于水工建筑物的基本信息、工程图纸、抗震分析结果；地址灾害信息，比如地震的发生地点、震级、震中·····）除了软件还有硬件相关设计，当前有课题组自制的强震检测系统（可提供强震实时检测与显示、记录、报警触发等功能）、用于强震检测的仪表放大器模块、高精度32位AD转换模块、FPGA高速采集卡等。后续会加入各种工程的VR、AR、XR展示，数字孪生等。</span>
                    <span class="title">研究概况</span>
                </div>
                <p class="development">软件开发</p>
                <div class="show">
                    <div class="block"></div>
                    <div class="block"></div>
                    <div class="block"></div>
                    <div class="block"></div>
                    <div class="block"></div>
                    <div class="block"></div>
                </div>
                <p class="development">硬件开发</p>
                <div class="show">
                    <div class="block"></div>
                    <div class="block"></div>
                    <div class="block"></div>
                    <div class="block"></div>
                    <div class="block"></div>
                    <div class="block"></div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navigation from './component/Navigation'
import Footer from './component/Footer'
export default {
    components: { Navigation, Footer, },
    data() {
        return {
        }
    },
    methods: {}
}
</script>