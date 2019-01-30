<template>
  <div id="app">
    <!-- <h6>全局配置：{{$store.state.globalSettings}}</h6> -->

    <router-view/>
  </div>
</template>

<script>
export default {
  mounted(){
    //当前组件挂载完成后需要异步请求全局配置数据
    var url=this.$store.state.globalSettings.apiUrl+'/admin/settings'

    this.$axios.get(url).then((res)=>{
      this.$store.commit('setGlobalSettings',res.data)  //将全局配置存储到Vuex仓库
    }).catch((err)=>{
      console.log(err)
    })
  }
};
</script>


<style lang="scss">
  #app{
    color: #303133;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

</style>
