<style lang="scss" scoped>
.achievement {
    .achiveve {
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
                    line-height: 42px;
                    border-bottom: 1px solid #00356B;
                    margin-bottom: 31px;
                }
                .simple {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    .block {
                        display: inline-block;
                        width: 32%;
                        height: 310px;
                        background-color: #00356B;
                        margin-bottom: 22px;
                        color: #fff;
                        font-size: 33px;
                        text-align: center;
                        a {
                            color: #fff;
                            text-decoration: none;
                        }
                    }
                    p {
                        width: 100%;
                        line-height: 34px;
                        margin: 0;
                    }
                    .el-pagination {
                        width: 100%;
                        text-align: center;
                        margin-top: 30px;
                        
                    }
                    .el-pagination.is-background .el-pager li:not(.disabled).active {
                        background-color: #00356B !important;
                    }
                }
                .noShow {
                    display: none;
                }
            }
        }
    }
}
</style>
<template>
    <div class="achievement">
        <Navigation />
        <Banner />
        <div class="achiveve">
            <div class="littleNav">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item><i class="el-icon-s-home" style="margin-right: 10px"></i>您当前的位置：</el-breadcrumb-item>
                    <el-breadcrumb-item>业绩成果</el-breadcrumb-item>
                    <el-breadcrumb-item>{{curTitle}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="content">
                 <div class="left">
                    <el-button type="text">业绩成果</el-button>
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vetical"
                        background-color="#F7F7F7" text-color="#444" active-text-color="#00356B"
                        @select="handleSelect"
                        >
                        <el-menu-item class="left_title" index="paper">发表论文</el-menu-item>
                        <el-menu-item class="left_title" index="science">科研成果</el-menu-item>
                        <el-menu-item class="left_title" index="software">软件成果</el-menu-item>
                        <el-menu-item class="left_title" index="apparatus">仪器设备</el-menu-item>
                    </el-menu>
                 </div>
                 <div class="right">
                    <div class="right_title">{{curTitle}}</div>
                    <div :class="[activeIndex === 'paper' ? 'simple': 'noShow']">
                        <div class="literature">
                            <p v-for="(p, index) in curList" :key="index">{{p}}</p>
                        </div>
                        <el-pagination layout="prev, pager, next" :total="75" :page-size="18" 
                            @prev-click="prevPage"
                            @next-click="nextPage"
                            @current-change="handleCurrentChange"
                            :current-page="curPage"
                        ></el-pagination>
                    </div>
                    <div :class="[activeIndex === 'science' ? 'simple': 'noShow']">
                        <div class="literature">
                            <p v-for="(p, index) in curList" :key="index">{{p}}</p>
                        </div>
                        <el-pagination layout="prev, pager, next" :total="42" :page-size="18" 
                            @prev-click="prevPage"
                            @next-click="nextPage"
                            @current-change="handleCurrentChange"
                            :current-page="curPage"
                        ></el-pagination>
                    </div>
                    <div :class="[activeIndex === 'software' ? 'simple': 'noShow']">
                        <div class="block">
                            <router-link to='/softwareDetail'>
                                地震<br />信息管理系统
                            </router-link>
                        </div>
                        <div class="block">
                            滑坡<br />信息管理系统
                        </div>
                        <div class="block">
                            泥石流
                        </div>
                        <div class="block"></div>
                    </div>
                    <div :class="[activeIndex === 'apparatus' ? 'simple': 'noShow']">
                        <div class="block">
                            地震<br />信息管理系统
                        </div>
                        <div class="block">
                            滑坡<br />信息管理系统
                        </div>
                        <div class="block">
                            泥石流
                        </div>
                        <div class="block"></div>
                    </div>
                 </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
export default {
    components: { Navigation, Banner, Footer, },
    data() {
        return {
            activeIndex: "paper",
            curTitle: '发表论文',
            curPage: 1,
            curList: [
                '(1)Qu naisi, Chu liangcheng, Guo yonggang, Perturbation of the Attached Water Mass Effect Offshore Platform Dynamic Response, China Ocean Engineering, Vol. 7, No. 4, 1993。',
                '(2)Guo yonggang, Qu naisi, Perturbation Analysis of the Non-proportional Damping Effect Structure under the Arbitrary Load, EPMESC, Macao, 1995。',
                '(3)曲乃泗，初良成，郭永刚，动水非比例阻尼对平台结构影响的摄动分析，海洋通报，1994.12。',
                '(4)郭永刚，曲乃泗，非比例阻尼对结构动力响应影响的摄动分析方法，地震工程与工程振动，1995年4期。',
                '(5)郭永刚，董毓新，不同垫层材料对水轮机蜗壳结构的影响研究，大电机技术，1996年4期。',
                '(6)水工结构中载荷识别的时域法。',
                '(7)掺入膨胀剂桩受力机理的试验研究。',
                '(8)动接触问题在高拱坝抗震中的应用。',
                '(9)郭永刚，侯顺载，陈厚群等，高拱坝伸缩横缝的开合对拱座岩体稳定的影响研究，水利学报，2000年，第11期。',
                '(10)郭永刚，张祁汉，三峡水电站厂房结构自振特性研究，水力发电，2002.1。',
                '(11)郭永刚，周红卫等，大型渡槽结构减振隔振几个关键问题初探，现代地震工程进展，2002.10。',
                '(12)郭永刚，胡晓等，300米级高拱坝振动台模型试验研究，现代地震工程进展，2002.10。',
                '(13)郭永刚，涂劲，陈厚群，高拱坝伸缩横缝间布设阻尼器对坝体地震影响的研究，世界地震工程，2003.9。',
                '(14)涂劲，郭永刚，陈厚群，高拱坝抗震钢筋配置方案研究，水利水电技术，2003.7。',
                '(15)傅朝阳，郭永刚，李家峡水电站拱坝强震监测台阵的布设，水电自动化与大坝监测，2004.2。',
                '(16)郭永刚，涂劲，陈厚群，抗震钢筋对小湾高拱坝抗震性能影响研究，水利学报，2004.3。',
                '(17)郭永刚，赵晓飞等，考虑流—固耦合影响的挡水结构自振特性，世界地震工程，2004.9。',
                '(18)马飞，郭永刚，水小平，基于小波理论的振动信号的多尺度分析，噪声与振动控制，2004年12月，第6期。',
            ],
            paperList: [
                '(1)Qu naisi, Chu liangcheng, Guo yonggang, Perturbation of the Attached Water Mass Effect Offshore Platform Dynamic Response, China Ocean Engineering, Vol. 7, No. 4, 1993。',
                '(2)Guo yonggang, Qu naisi, Perturbation Analysis of the Non-proportional Damping Effect Structure under the Arbitrary Load, EPMESC, Macao, 1995。',
                '(3)曲乃泗，初良成，郭永刚，动水非比例阻尼对平台结构影响的摄动分析，海洋通报，1994.12。',
                '(4)郭永刚，曲乃泗，非比例阻尼对结构动力响应影响的摄动分析方法，地震工程与工程振动，1995年4期。',
                '(5)郭永刚，董毓新，不同垫层材料对水轮机蜗壳结构的影响研究，大电机技术，1996年4期。',
                '(6)水工结构中载荷识别的时域法。',
                '(7)掺入膨胀剂桩受力机理的试验研究。',
                '(8)动接触问题在高拱坝抗震中的应用。',
                '(9)郭永刚，侯顺载，陈厚群等，高拱坝伸缩横缝的开合对拱座岩体稳定的影响研究，水利学报，2000年，第11期。',
                '(10)郭永刚，张祁汉，三峡水电站厂房结构自振特性研究，水力发电，2002.1。',
                '(11)郭永刚，周红卫等，大型渡槽结构减振隔振几个关键问题初探，现代地震工程进展，2002.10。',
                '(12)郭永刚，胡晓等，300米级高拱坝振动台模型试验研究，现代地震工程进展，2002.10。',
                '(13)郭永刚，涂劲，陈厚群，高拱坝伸缩横缝间布设阻尼器对坝体地震影响的研究，世界地震工程，2003.9。',
                '(14)涂劲，郭永刚，陈厚群，高拱坝抗震钢筋配置方案研究，水利水电技术，2003.7。',
                '(15)傅朝阳，郭永刚，李家峡水电站拱坝强震监测台阵的布设，水电自动化与大坝监测，2004.2。',
                '(16)郭永刚，涂劲，陈厚群，抗震钢筋对小湾高拱坝抗震性能影响研究，水利学报，2004.3。',
                '(17)郭永刚，赵晓飞等，考虑流—固耦合影响的挡水结构自振特性，世界地震工程，2004.9。',
                '(18)马飞，郭永刚，水小平，基于小波理论的振动信号的多尺度分析，噪声与振动控制，2004年12月，第6期。',
                '(19)郭永刚，涂劲，高凤龙，非线性子结构方法中实现对结构抗震措施阻尼器的数值模拟，计算力学学报，2005, 22(4):447-452',
                '(20)郭永刚，水利水电工程强震监测和强震监测仪器，地球物理学进展，2005年6月，第2期。',
                '(21)郭永刚，苏克忠，常廷改，大坝强震监测与震害预警问题的探讨，大坝与安全，2006，(2):7-10。',
                '(22)郭永刚，王卫东，大坝强震监测安全预警与决策支持系统研究，科技导报，2006(8)。',
                '(23)郭永刚等，高拱坝伸缩横缝间布设抗震钢筋的动力反应分析，应用力学学报，2006年3月',
                '(24)郭永刚，许亮华，水小平，基于脉冲响应数据的ARMA法建模以及模态参数识别，地震工程与工程振动，2006年5期。',
                '(25)郭永刚，赵晓飞，张霖，周红卫，工程结构减振中粘滞阻尼器性能及计算方法的研究，第七届全国地震工程学术会议论文，2006年11月',
                '(26)郭永刚，许亮华，水小平，基于ARMA模型模态参数识别的改进方法研究，第七届全国地震工程学术会议论文，2006年11月',
                '(27)郭永刚，涂劲，陈厚群，高强度抗震钢筋在小湾高拱坝中应用的研究，中国水利水电科学研究院学报，2007年1期。',
                '(28)郭恩,郭永刚,. 场地类别划分与抗震设计反应谱的研究[J]. 山西建筑,2007,(32). ',
                '(29)许亮华，郭永刚，张进，数字强震监测系统中触发、记录方法研究，水电自动化与大坝监测，2007年3期。',
                '(30)Guo Yonggang, Su Kezhong, Review of Strong Motion Safety Monitoring for Hydraulic Structuresbased on the Case of the Earthquake in Wen Chuan, High-level International Forum on Water Resources and Hydropower, China, 2008',
                '(31)李小荣，郭永刚，基于遗传算法优化神经网络权值的大坝结构损伤识别，震灾防御技术，2008年2期。',
                '(32)郭永刚，常廷改，苏克忠，汶川8级特大地震与紫坪铺水库蓄水关系的讨论，震灾防御技术，2008年3期。',
                '(33)郭永刚，苏克忠, 从汶川大地震论水利工程强震安全监测[J]. 水电自动化与大坝监测,2009,(3):56-59,67.',
                '(34)许亮华,郭永刚,张进,. 基于PSTN的大坝远程强震监测系统通信协议设计与实现[J]. 水电自动化与大坝监测,2009,(6). ',
                '(35)刘和平,郭永刚,. 岩质边坡在不同地震波入射方向下的动力响应分析[J]. 水电能源科学,2010,(1). ',
                '(36)郭永刚,潘城荣,. 自适应遗传神经网络模型(IAGA-BP)及其在坝体结构损伤识别中的应用[J]. 大坝与安全,2010,(2). ',
                '(37)许亮华,郭永刚,杜修力,. 改进的EMD方法及大坝强震反应信号应用分析[J]. 中国水利水电科学研究院学报,2011,(3). ',
                '(38)安龙飞,卿龙邦,郭永刚,. 统一二次曲线拱坝有限元建模系统设计与实现[J]. 计算机辅助工程,2011,(3). ',
                '(39)许亮华，郭永刚，苏克忠，许光，水库大坝的震害调查评估方法研究 ：《震灾防御技术》2012年第01期 第七卷：70-76',
                '(40)许光，苏克忠，郭永刚，常廷改，许亮华，国内水工建筑物强震安全监测技术进展，《水电自动化与大坝监测》，2012年第02期',
                '(41)许亮华，郭永刚，杜修力，水工建筑物强震动加速度记录的分析处理，地震工程与工程震动，2012年10月。',
                '(42)Zheng liu, Yonggang Guo, Longbang Qing. Dynamic Analysis of Arch Dam Based on Observed Earthquake. Applied Mechanics and Materials. 2013, 1542-1545.',
                '(43)郭永刚，向玮，水小平，肖长伟，大坝强震安全监测预警决策系统的数据库研究，自然灾害学报，2013, 22(2):185-190',
                '(44)关羽，郭永刚，水小平，基于小波包变换的二滩大坝地震响应能量分析，振动、测试与诊断，2014年12月。',
                '(45)汪仕情，郭永刚，ABAQUS软件在西藏某水电站土石坝工程的应用，四川建，2017,43(12):105-106+118',
                '(46)杨永涛，郭永刚，基于GIS的西藏农业信息管理系统的设计，高原农业，2017,1(02):189-193',
                '(47)杨永涛，郭永刚，地理信息系统(GIS)在西藏水资源管理中的应用——以尼洋河流域为例，高原农业，2018,2(01):72-76 ',
                '(48)汪仕情，郭永刚，ABAQUS在土石坝有限元计算分析中的应用，工程技术研究，2018(13):88-89.',
                '(49)杨永涛，郭永刚，基于GIS的尼洋河流域水资源管理信息系统研究，安徽农业科学，2018,46(30):216-219+233.',
                '(50)胡锦，郭永刚*，吕文，旺加，无限元法在深覆盖层土石坝动力分析中的应用，震灾防御技术，2019, 14(3):564-573',
                '(51)汪仕情，郭永刚，ABAQUS在水利水电工程抗震稳定性分析中的应用，西藏科技，2019(01):67-70.',
                '(52)武辰爽,郭永刚.基于RS和GIS的土地利用动态变化分析——以巴宜区为例[J].高原农业,2019,3(04):373-379.',
                '(53)李廷,郭永刚.基于遥感技术的林芝县林地动态监测数据的分析[J].高原农业,2019,3(04):367-372.9',
                '(54)李准,郭永刚.基于物联网的农业环境采集系统的设计[J].高原农业,2019,3(05):566-570.',
                '(55)胡锦,郭永刚,吕文,旺加.无限元法在深覆盖层土石坝动力分析中的应用[J].震灾防御技术,2019,14(03):564-573.',
                '(56)吕文,郭永刚,胡锦.基于HHT方法对监测信息的处理及分析[J].西藏科技,2019(08):68-72.',
                '(57)吕文,郭永刚.多种边界条件下三维土石坝动力非线性分析研究[J].西藏科技,2019(11):61-66.',
                '(58)苏立彬，郭永刚等，基于RS和GIS的西藏林芝地区土地利用类型动态变化研究，中国农业大学学报，2019,24(10):170-178',
                '(59)苏立彬，郭永刚*，吴悦，杨永涛，基于GIS的西藏地区活动构造分布规特征及地震灾害危险性分析[J]，科学技术与工程，2020，20(03):1256-1262',
                '(60)苏立彬，郭永刚等，基于DEM的尼洋河流域地貌性态分析[J]，中国水土保持科学，2020，18(03):12-21',
                '(61)苏立彬，郭永刚等，2011-2016年林芝多布电站区域土地利用结构时空变化研究[J]，高原农业，2020，4(01):75-81',
                '(62)Wu CS, Guo YG, Su LB. Analysis of Temporal and Spatial Dynamics of Forests From 2003 to 2018[J]. 2020 7th International Conference on Information Science and Control Engineering, 311-315. DOI 10.1109/ICISCE50968.2020.00073',
                '(63)Wu CS, Guo YG, Su LB. Risk Assessment of Geological Disasters in Nyingchi, Tibet[J]. Open Geoscience,2021,13(1):219-232',
                '(64)李廷,郭永刚.ENVI遥感影像制作解译及分析——以林芝县为例[J].西藏科技,2020(01):34-36+40.',
                '(65)李廷,郭永刚.1990～2014年林芝县耕地时空演变及驱动力分析[J].高原农业,2020,4(01):82-88.',
                '(66)T Li,YG,Guo*,Temporal and Spatial Variation Characteristics of NDVI in Qamdo and the Relationship with Climate, 2020 7th International Conference on Information Science and Control Engineering,2020:1387-1394',
                '(67)李准,郭永刚,耿龙海.基于物联网的“两光源互补”隧道照明智能控制系统设计[J].公路,2020,65(07):326-330.',
                '(68)Z Li,YG Guo.Semantic segmentation of landslide images in Nyingchi region based on PSPNet network[J].International Conference on Information Science and Control Engineering,2020,1269-1273.',
                '(69)Z Li , YG Guo* , Libin Su, Chenshuag Wu.Semantic segmentation of landslide image based on improved DeeplabV3+ network[J].Open Geosciences.2021.04(SCI)',
                '(70)吴悦,郭永刚,胡锦.西藏深覆盖层土石坝动力非线性分析[J].高原农业,2020,4(01):69-74+107.',
                '(71)吴悦,郭永刚,胡锦.基于人工边界方法的西藏旁多土石坝非线性动力分析[J].中国农村水利水电,2021(06):169-173.',
                '(72)武辰爽,郭永刚,苏立彬.基于地理信息系统的色季拉山土地利用时空动态变化[J].科学技术与工程,2021,21(07):2602-2608.',
                '(73)郝守宁,李成林,郭永刚.西藏尼洋河流域饮用水源地重金属健康风险评价[J].环境科学与技术,2020,43(05):154-163.',
                '(74)胡锦,郭永刚,吴悦.高寒区深覆盖层土石坝非线性动力分析[J].水电能源科学,2020,38(06):96-99.',
                '(75)郭永刚,于皓然,梁大鹏,李晓峰,苗彦军,杜帛洋,孙宝学.西藏地区农田土壤培肥现状、问题与展望[J].西南民族大学学报(自然科学版),2021,47(04):348-355.',
            ],
            scienceList: [
                '(1)完成了“莲花水电站钢衬钢筋混凝土蜗壳结构三维非线性有限元计算分析”项目。',
                '(2)完成了“三峡工程水电站厂房结构动力分析及优化”项目。',
                '(3)完成了“三峡工程水电站压力钢管伸缩节问题的论证”项目。',
                '(4)完成了“白山重力拱坝安全可靠性分析”项目。',
                '(5)完成了“非比例阻尼问题及水电站结构动静力分析”。',
                '(6)完成了原国电公司重点科技项目“小湾拱坝工程抗震关键技术深化研究”。',
                '(7)完成了国家自然科学基金“大型渡槽结构减震隔振关键技术研究”。',
                '(8)完成了原国家电力公司科技项目“混凝土高拱坝震害预警与决策系统研究”。',
                '(9)完成了国家自然科学基金重点项目“西南地区复杂岩质高边坡变形与稳定性分析方法研究”中的子题“强震条件下边坡的动力变形与稳定性评价研究”的相关',
                '(10)完成了“长江三峡水利枢纽大坝和电站厂房二期二标段安全监测”分项“大坝强震监测”工作。',
                '(11)完成了“金沙江下游梯级水电站水库地震监测系统一期工程”项目监理工作。',
                '(12)完成了“二滩二副厂房泄洪振动原型观测分析”工作。',
                '(13)完成了“小浪底进水塔及左岸山体振动原型观测与分析”工作。',
                '(14)完成了“昆明市掌鸠河引水供水工程云龙水库诱发地震危险性预测研究”工作。',
                '(15)完成了“西龙池抽水蓄能电站地下厂房中导洞开挖爆破围岩振动监测分析”工作。',
                '(16)承担完成了“杨家台水库续建工程堆石坝振动测试与分析”工作。',
                '(17)承担完成了九五攻关子子题项目“横缝对高拱坝抗震性能影响的数值分析研究”（编号96-221-03-02-02(3)）。',
                '(18)承担完成了国家防汛抗旱总指挥部办公室项目“密云水库、潘家口水库地震应急自动处置系统研究”工作。',
                '(19)承担完成了水利部科技创新项目“南水北调工程渡槽结构隔震减振技术研究”工作。',
                '(20)承担完成了水利部科技创新项目“三峡大坝强震监测深化研究及库区强震信息数字化”工作。',
                '(21)完成了“溪洛渡拱坝抗震动力分析与安全性研究”项目。',
                '(22)完成了“小湾拱坝整体及有横缝模型的动力试验研究”项目。',
                '(23)承担完成了澜沧江流域“大朝山水电站大坝动力分析”工作。',
                '(24)承担完成了“张河湾抽水蓄能电站地下厂房中导洞开挖爆破围岩振动监测分析”工作。',
                '(25)承担完成了南水北调工程“惠南庄泵站机墩及基础结构动力分析”工作',
                '(26)承担完成了雅砻江流域“二滩大坝强震监测与大坝安全综合分析研究”工作。',
                '(27)承担完成了“水布垭水利枢纽大坝强震安全监测与分析”工作。',
                '(28)承担完成了“抽水蓄能电站振动安全控制标准研究”研究工作。',
                '(29)承担完成了国家地震局地震行业科研专项项目“重要行业地震灾害损失评估新技术研究”的子题“水利行业地震灾害损失评估新技术研究”工作。',
                '(30)承担完成了西藏自治区重点科技计划项目“西藏地区重要水利工程震害预警与应急机制关键技术研究”工作',
                '(31)承担完成了国家重点实验室项目“高寒地区冻土材料对坝体结构抗震性能影响研究”工作。',
                '(32)承担完成了西藏自治区水利厅“西藏水利概况与水资源开发利用研究”工作。',
                '(33)承担完成了中国华能集团项目“高寒区水利工程建设生态修复技术试点研究”工作。',
                '(34)承担完成了西藏自治区重点科技计划项目“西藏地区重要水利工程结构抗震能力分析与快速评价方法研究”工作。',
                '(35)承担完成了西藏自治区重点科技计划项目“西藏农业虚拟现实技术与大数据系统平台研发”工作。',
                '(36)川藏铁路昌都至林芝段地应力场特征及重点隧道应力场模拟研究。',
                '(37)参加了《水工建筑物强震动安全监测技术规范》SL486-2011的编写工作，规范已发布。',
                '(38)参加了《混凝土坝安全监测技术规范》SL601项目的编写工作，负责强震监测章节的编写，规范已发布。',
                '(39)参加了《大坝安全监测系统鉴定技术规范》SL766-2018项目编写工作，负责强震监测章节编写，规范已发布。',
                '(40)承担了西藏自治区重点研发计划项目“基于大数据下西藏重大水电工程强震监测关键技术”工作，',
                '(41)承担了国家自然科学基金区域联合基金项目“超深厚覆盖层上高土石坝静动力响应分析方法与控制技术 ”之专题“深厚覆盖层中深部井下强震动观测技术”研究工作。',
                '(42)承担了西藏自治区科技重大专项课题“高深峡谷地质灾害防治及对工程安全影响分析关键技术”子题“藏东南重大水电工程地质地震灾害智能识别与预警技术研发”。',
            ]
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            switch(key) {
                case 'paper' :
                    this.curTitle = '发表论文'
                    this.activeIndex = 'paper'
                    this.curPage = 1
                    this.curList = this.paperList.slice(0, 17)
                break;
                case 'science' :
                    this.curTitle = '科研成果'
                    this.activeIndex = 'science'
                    this.curPage = 1
                    this.curList = this.scienceList.slice(0, 17)
                break;
                case 'software' :
                    this.curTitle = '软件成果'
                    this.activeIndex = 'software'
                    this.curPage = 1
                break;
                case 'apparatus' :
                    this.curTitle = '仪器设备'
                    this.activeIndex = 'apparatus'
                    this.curPage = 1
                break;
            }
        },
        prevPage() {
            if(this.activeIndex === 'paper') this.curList = this.paperList.slice((this.curPage-1)*18, ((this.curPage-1)*18)+18)
            else if (this.activeIndex === 'science') this.curList = this.scienceList.slice((this.curPage-1)*18, ((this.curPage-1)*18)+18)
            this.curPage -= 1
        },
        nextPage() {
            if(this.activeIndex === 'paper') this.curList = this.paperList.slice((this.curPage-1)*18, ((this.curPage-1)*18)+18)
            else if (this.activeIndex === 'science') this.curList = this.scienceList.slice((this.curPage-1)*18, ((this.curPage-1)*18)+18)
            this.curPage += 1
        },
        handleCurrentChange(val) {
            this.curPage = val
            if(this.activeIndex === 'paper') this.curList = this.paperList.slice((this.curPage-1)*18, ((this.curPage-1)*18)+18)
            else if (this.activeIndex === 'science') this.curList = this.scienceList.slice((this.curPage-1)*18, ((this.curPage-1)*18)+18)
        }
  }
}
</script>