<style lang="scss">
.team {
    .teamContent {
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
                    border-bottom: 1px solid #00356B;
                    line-height: 40px;
                    margin: 70px 0px 17px;
                }
                .teacherName {
                    color: #00356B;
                    font-size: 22px;
                    line-height: 40px;
                    margin: 70px 0px 17px;
                }
                .photo {
                    text-align: center;
                }
                .teacherInfo {
                    text-indent: 2em;
                }
                p {
                    line-height: 32px;
                    font-size: 18px;
                    margin: 0px;
                }
                ol {
                    padding-left: 22px;
                    margin: 0px;
                }
                li {
                    line-height: 32px;
                    font-size: 18px;
                }
                .tableHead {
                    background-color: #6d85a3;
                    width: 100%;
                    height: 47px;
                    line-height: 47px;
                    text-align: center;
                    color: #fff;
                    font-size: 22px;
                }
                .list {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    .block {
                        text-align: center;
                        width: 32%;
                        margin-bottom: 48px;
                        .img {
                            width: 100%;
                            height: 236px;
                            background-color: #6d85a3;
                        }
                        .info {
                            line-height: 28px;
                            font-size: 14px;
                        }
                        .name {
                            line-height: 40px;
                            font-size: 24px;
                            color: #00356B;
                        }
                        .link {
                            line-height: 50px;
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
    <div class="team">
        <Navigation />
        <div class="teamContent">
            <div class="littleNav">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item><i class="el-icon-s-home" style="margin-right: 10px"></i>您当前的位置：</el-breadcrumb-item>
                    <el-breadcrumb-item>首页</el-breadcrumb-item>
                    <el-breadcrumb-item>团队介绍</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="content">
                 <div class="left">
                    <el-button type="text">团队介绍</el-button>
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vetical"
                        background-color="#F7F7F7" text-color="#444" active-text-color="#00356B"
                        @select="handleSelect"
                        >
                        <el-menu-item class="left_title" index="teacher">导师简介</el-menu-item>
                        <el-menu-item class="left_title" index="people">课题组成员简介</el-menu-item>
                    </el-menu>
                 </div>
                 <div class="right">
                    <div class="right_title">{{curTitle}}</div>
                    <div :class="[activeIndex === 'teacher' ? 'show': 'noShow']">
                        <div class="photo">
                            <img src="../assets/teacher.png" alt="">
                        </div>
                        <div class="teacherName">郭永刚</div>
                        <p class="teacherInfo">
                            男，教授，博士生导师，1997年获工学博士学位，1999年完成博士后研究工作。现为西藏农牧学院党委委员
                            、副院长。河海大学、西藏大学兼职教授、博导。从事水利水电领域结构理论计算分析、室内模型，现场原型动力
                            试验、重大工程强震安全监测与安全评价分析等工作。参加了三峡、溪洛渡、小湾、二滩等十余个国内重大水电工
                            程的地震工程与工程振动的研究工作。作为项目负责人、技术负责人承担完成重大工程科研项目40余项。首次在国
                            内对大坝地震安全问题提出建立大坝震后快速反应与决策支持系统的技术理念。承担国家和省部级科技项目10余项
                            ，其中承担并完成国家自然科学基金项目2项。发表论文80余篇，合作出版专著1部。自主研发软件多项（其中5项
                            已取得软件著作权），申请专利5项，其中国家发明专利1项。参加并完成了3部国家行业规范标准的编写工作。获
                            省部级科学技术奖二等奖2项，三等奖2项。
                        </p>
                        <div class="blockName">主要研究方向</div>
                        <ol>
                            <li>重大水电工程大坝强震安全监测技术研究及结构安全分析</li>
                            <li>重大工程地质灾害监测预警方法与分析研究</li>
                            <li>结构振动数值分析的理论与方法研究</li>
                            <li>结构振动试验分析的理论与方法研究</li>
                        </ol>
                        <p>*招录硕士、博士研究生相关专业（力学、水工结构、土木工程、数学、计算机软件、电子工程、通讯工程、地球物理）</p>
                        <div class="blockName">获奖情况</div>
                        <div class="tableHead">奖励情况（限市厅级以上和国&lt;境&gt;外奖项）</div>
                        <el-table :data="tableData" border style="width: 100%">
                            <el-table-column prop="awards" label="奖项内容" width="160"></el-table-column>
                            <el-table-column prop="date" label="授予时间" width="160"></el-table-column>
                            <el-table-column prop="department" label="授予单位" width="160"></el-table-column>
                            <el-table-column prop="level" label="获奖级别" width="160"></el-table-column>
                            <el-table-column prop="grade" label="获奖等级" width="160"></el-table-column>
                            <el-table-column prop="remark" label="备注"></el-table-column>
                        </el-table>
                        <div class="blockName">专利情况</div>
                        <ol>
                            <li v-for="(patent, index) in patentList" :key="index">{{patent.name}}
                                <br/>{{patent.time}}
                            </li>
                        </ol>
                    </div>
                    <div :class="[activeIndex === 'people' ? 'show': 'noShow']">
                        <div class="list">
                            <div class="block" v-for="(people, index) in teamList" :key="index">
                                <p class="img"></p>
                                <p class="name">{{people.name}}</p>
                                <p class="info">{{people.info}}</p>
                                <p class="link"><img :src="people.phone" alt="">&nbsp;&nbsp;&nbsp;&nbsp;<img :src="people.email" alt=""></p>
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
            activeIndex: "teacher",
            curTitle: '导师简介',
            tableData: [
                { awards: '西藏自治区科学技术奖', date: '2021', department: '西藏自治区人民政府', level: '省部级', grade: '三等', remark: ''},
                { awards: '西藏自治区科学技术奖', date: '2019', department: '西藏自治区人民政府', level: '省部级', grade: '二等', remark: ''},
                { awards: '西藏自治区科学技术奖', date: '2017', department: '西藏自治区人民政府', level: '省部级', grade: '二等', remark: ''},
                { awards: '中国电力科学技术奖', date: '2008', department: '中国机电工程学会中国电力科学技术', level: '省部级', grade: '三等', remark: ''},
                { awards: '中国水利水电科学研究院科学技术奖', date: '2014', department: '中国水利水电科学研究院', level: '地厅级', grade: '特等', remark: ''},
                { awards: '中国水利水电科学研究院科学技术奖', date: '2006', department: '中国水利水电科学研究院', level: '地厅级', grade: '一等', remark: ''},
                { awards: '中国水利水电科学研究院科学技术奖', date: '2004', department: '中国水利水电科学研究院', level: '地厅级', grade: '应用一等', remark: ''},
                { awards: '水电总院科技进步奖', date: '2002', department: '国家电力公司水电水利规划设计总院', level: '地厅级', grade: '一等', remark: ''},
                { awards: '中国电力科学 技术奖', date: '2008', department: '中国机电工程学会 中国电力科学技术', level: '省部级', grade: '三等', remark: '混凝土高拱坝震害预警与决策系统研究'},
                { awards: '西藏自治区科学技术奖', date: '2017', department: '西藏自治区人民政府', level: '省部级', grade: '二等', remark: '西藏地区重要水利工程震害，预警机理安全评价与应急，机制关键技术研究'},
                { awards: '西藏自治区科学技术奖', date: '2019', department: '西藏自治区人民政府', level: '省部级', grade: '二等', remark: '高海拔高地应力复杂，地质条件下双护盾，TBM施工关键技术及应用'},
                { awards: '西藏自治区科学技术奖', date: '2021', department: '西藏自治区人民政府', level: '省部级', grade: '三等', remark: '西藏地区重要水利工程，结构抗震能力分析与，快速评价方法研究'},
            ],
            patentList: [
                { name: '国家发明专利，一种高原水库区白草苗覆草移栽方法，专利号：ZL 2018 1 1397774.7，证书号第4479078号', time: '授权公告日：2021年06月11日'},
                { name: '实用新型专利，一种适用于高原的土壤监测用取样器，专利号：ZL 2018 2 1930699.1，证书号第9499750号', time: '授权公告日：2019年10月18日'},
                { name: '实用新型专利，一种便携式高原植被生理生态监测装置，专利号：ZL 2019 2 1845972.5，证书号第10953160号', time: '授权公告日：2020年7月10日'},
                { name: '实用新型专利，一种适用于高原的水质监测装置，专利号：ZL 2019 2 1846390.9，证书号第10974930号', time: '授权公告日：2020年7月14日'},
                { name: '实用新型专利，一种适用于高原的自动水质取样机，专利号：ZL 2019 2 1846391.3，证书号第11100573号', time: '授权公告日：2020年7月28日'},
            ],
            teamList: [
                { name: 'xxx', img: '../assets/photo.png', info: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字', phone: require('../assets/phone.png'), email: require('../assets/email.png')},
                { name: 'xxx', img: '../assets/photo.png', info: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字', phone: require('../assets/phone.png'), email: require('../assets/email.png')},
                { name: 'xxx', img: '../assets/photo.png', info: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字', phone: require('../assets/phone.png'), email: require('../assets/email.png')},
                { name: 'xxx', img: '../assets/photo.png', info: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字', phone: require('../assets/phone.png'), email: require('../assets/email.png')},
                { name: 'xxx', img: '../assets/photo.png', info: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字', phone: require('../assets/phone.png'), email: require('../assets/email.png')},
                { name: 'xxx', img: '../assets/photo.png', info: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字', phone: require('../assets/phone.png'), email: require('../assets/email.png')},
            ]
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            switch(key) {
                case 'people' :
                    this.curTitle = '课题组成员简介'
                    this.activeIndex = 'people'
                break;
                case 'teacher' :
                    this.curTitle = '导师简介'
                    this.activeIndex = 'teacher'
                break;
            }
        },
        onSubmit() {
          console.log('submit!');
        }
    }
}
</script>