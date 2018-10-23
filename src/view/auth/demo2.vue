<template>
  <div id="demo2">
    {{msg}}
      hahaahaahhh<el-button type="primary" @click="open">主要按钮</el-button>
      <el-button type="primary" @click="gooo">带参路由</el-button>
  </div>
</template>

<script>
export default {
  name: 'demo2',
  data(){
    return{
      msg:'啊啊啊啊啊啊啊啊'
    }
  },
  mounted(){
    console.log(888)
  },
  methods: {
    open() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    },
    gooo(){
      this.msg="哈啊哈哈哈哈888"
    }
  }
}
</script>

<style>

</style>