<template>
  <div id="app">
    <el-container>
    <el-header>
    <div id="head">
      <router-link to="/lists">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    </el-header>
    <el-container>
      <!--<el-aside>
        <component :is="navigate"></component>
      </el-aside>-->
      <el-main>
      <router-view/>
      </el-main>
    </el-container>
    <el-footer>
    <div id="toolbar" >
      <el-row >
        <el-col :span="8"><div><router-link to="/movie">影院</router-link></div></el-col>
        <el-col :span="8"><div><router-link to="/mine">我的</router-link></div></el-col>
        <el-col :span="8"><div><router-link to="/cinema">热播</router-link></div></el-col>
      </el-row>
    </div>
    </el-footer>
    </el-container>
  </div>
</template>

<script>
  import heads from './views/heads'
  import navigate from './views/navigate'
  export default {
    components: {heads,navigate},
    data() {
      return {
        heads: 'heads',
        navigate: 'navigate'
      }
    }
  }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#toolbar {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
