<style lang="scss">
.soft {
    .softContent {
        border-top: 3px solid #00356B;
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
                    font-size: 38px;
                    color: #00356B;
                    border-bottom: 1px solid #00356B;
                    margin-bottom: 25px;
                }
                .blockName {
                    color: #00356B;
                    font-size: 22px;
                    line-height: 40px;
                    margin: 48px 0px 17px;
                }
                .explain {
                    width: 100%;
                    height: 488px;
                    background-color: #7DB5EF;
                    border-radius: 18px;
                }
                .fun {
                    background-color: #F7F7F7;
                    margin-top: 36px;
                    padding-bottom: 88px;
                    .title {
                        font-size: 26px;
                        text-align: center;
                        padding-top: 35px;
                        p {
                            margin: 0px;
                        }
                        .small {
                            font-size: 15px;
                        }
                    }
                    .list {
                        display: flex;
                        justify-content: space-around;
                        flex-wrap: wrap;
                        .block {
                            box-sizing: border-box;
                            text-align: center;
                            display: inline-block;
                            width: 30%;
                            background-color: #fff;
                            height: 235px;
                            margin-top: 26px;
                            padding: 10px 20px;
                            .img {
                                display: inline-block;
                                width: 46px;
                                height: 46px;
                                background-color: #7DB5EF;
                            }
                            .name {
                                font-size: 26px;
                            }
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
    <div class="soft">
        <Navigation />
        <div class="softContent">
            <div class="littleNav">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item><i class="el-icon-s-home" style="margin-right: 10px"></i>您当前的位置：</el-breadcrumb-item>
                    <el-breadcrumb-item>业绩成果</el-breadcrumb-item>
                    <el-breadcrumb-item>软件成果</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="content">
                 <div class="left">
                    <el-button type="text">软件成果</el-button>
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vetical"
                        background-color="#F7F7F7" text-color="#444" active-text-color="#00356B"
                        @select="handleSelect"
                        >
                        <el-menu-item class="left_title" index="one">软件一</el-menu-item>
                        <el-menu-item class="left_title" index="two">软件二</el-menu-item>
                    </el-menu>
                 </div>
                 <div class="right">
                    <div class="right_title">软件/系统/项目</div>
                    <div class="show">
                        <div class="blockName">{{curTitle}}</div>
                        <p class="text">
                            文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明
                            文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字文字
                            文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明
                            文字说明文字说明文字说明文字说明文字说明文字说明.
                        </p>
                        <div class="explain"></div>
                        <div class="fun">
                            <div class="title">
                                <p class="big">软件功能</p>
                                <p class="small">***Function</p>
                            </div>
                            <div class="list">
                                <div class="block" v-for="(eff, index) in effectList" :key="index">
                                    <p class="img"></p>
                                    <p class="name">{{eff.name}}</p>
                                    <p class="info">{{eff.info}}</p>
                                </div>
                            </div>
                            <div class="title">
                                <p class="big">软件特点</p>
                                <p class="small">***Function</p>
                            </div>
                            <div class="list">
                                <div class="block" v-for="(eff, index) in effectList" :key="index">
                                    <p class="img"></p>
                                    <p class="name">{{eff.name}}</p>
                                    <p class="info">{{eff.info}}</p>
                                </div>
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

export default {
    components: { Navigation, Footer, },
    data() {
        return {
            activeIndex: "one",
            curTitle: '软件一',
            effectList: [
                { name: '功能一', info: '文字介绍/文字介绍/文字介绍/文字介绍/'},
                { name: '功能一', info: '文字介绍/文字介绍/文字介绍/文字介绍/'},
                { name: '功能一', info: '文字介绍/文字介绍/文字介绍/文字介绍/'},
                { name: '功能一', info: '文字介绍/文字介绍/文字介绍/文字介绍/'},
                { name: '功能一', info: '文字介绍/文字介绍/文字介绍/文字介绍/'},
                { name: '功能一', info: '文字介绍/文字介绍/文字介绍/文字介绍/'},
            ],
            traitList: [
                { name: '特点一', info: '文字介绍/文字介绍/文字介绍/文字介绍/'},
                { name: '特点一', info: '文字介绍/文字介绍/文字介绍/文字介绍/'},
                { name: '特点一', info: '文字介绍/文字介绍/文字介绍/文字介绍/'},
                { name: '特点一', info: '文字介绍/文字介绍/文字介绍/文字介绍/'},
                { name: '特点一', info: '文字介绍/文字介绍/文字介绍/文字介绍/'},
                { name: '特点一', info: '文字介绍/文字介绍/文字介绍/文字介绍/'},
            ],
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            switch(key) {
                case 'one' :
                    this.curTitle = '软件一'
                    this.activeIndex = 'one'
                break;
                case 'two' :
                    this.curTitle = '软件二'
                    this.activeIndex = 'two'
                break;
                
            }
        },
    }
}
</script>