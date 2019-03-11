<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Simple Demo</h2>
    <el-tabs  tab-position="left" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="userInfo">
        <user-info class="tabItem"></user-info>
      </el-tab-pane>
      <el-tab-pane label="文章管理" name="userArticle">
        <user-article class="tabItem"></user-article>
      </el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
  import UserInfo from "@/components/UserInfo.vue"
  import UserArticle from "@/components/UserArticle.vue"

  export default {
    name: 'Home',
    components: {UserInfo, UserArticle},
    data() {
      return {
        msg: 'Welcome to User Management System',
        activeName: 'userInfo'
      }
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
        // this.router.push('/' + tab.name)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .hello {
    margin: 0 auto;
  }

  .tabItem {
    margin: 10px;
  }

  .el-tabs--left .el-tabs__header.is-left{
    margin:10px 20px 10px 10px !important;
  }


</style>
