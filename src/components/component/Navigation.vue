<style lang='scss' scoped>
.nav {
  .navList {
    width: 100%;
    min-width: 672px;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
      display: inline-block;
      width: 78px;
      height: 78px;
      background-color: #00356B;
      border-radius: 42px;
      margin-right: 120px;
     
    }
     /deep/.el-dropdown-menu__item, .el-menu-item{
         padding-left: 32px;
         padding-right: 32px;
        border: 0 !important;
      }
      /deep/ .el-submenu__title{
          font-size: 20px !important;
          padding-left: 32px;
          padding-right: 32px;
        }
      /deep/ .el-menu--horizontal>.el-menu-item.is-active{
         border: 0 !important;
      }
    .el-menu-item {
      padding: 0px 34px;
    }
    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }
    .el-menu-item.is-active{
      background: #00356B !important;
      font-size: 18px;
      line-height: 84px;
      height: 84px;
    }
    .el-menu--horizontal>.el-menu-item {
      font-size: 18px;
      line-height: 84px;
      height: 84px;
    }
  }
  .serch{
    display: inline-block;
    margin-left:30px ;
    border: none;
  }
}
</style>
<template>
  <div class="nav">
    <div class="navList">
      <span class="logo"></span>
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#fff"
        text-color="#00356B"
        active-text-color="#fff"
        router
      >
        <el-menu-item class="first-title" index="/" route="/">首页</el-menu-item>
        <el-menu-item class="first-title" index="/achievement" route="/achievement">业绩成果</el-menu-item>
        <el-menu-item class="first-title" index="/work" route="/work">在研工作</el-menu-item>
        <el-menu-item class="first-title" index="/research" route="/research">研发工作</el-menu-item>
        <el-menu-item class="first-title" index="/serve" route="/serve">服务咨询</el-menu-item>
        <el-menu-item class="first-title" index="/contactUs" route="/contactUs">联系我们</el-menu-item>
      </el-menu>
       <div class="serch">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input2"
        >
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      input2: ""
    };
  },
  methods: {}
};
</script>
