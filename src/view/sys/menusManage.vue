<!--  -->
<style >

</style>

<style scoped>

</style>

<template>
  <div class='menusManage'>
    <div class="portlet light">
        <div class="portlet-title">
            <div class="caption">
                <i class="icon-paper-plane font-yellow-casablanca"></i>
                <span class="caption-subject bold font-yellow-casablanca uppercase"> Form Input </span>
                <span class="caption-helper">more samples...</span>
            </div>
            <div class="inputs">
                <div class="portlet-input input-inline input-medium">
                    <div class="input-group">
                        <input type="text" class="form-control input-circle-left" placeholder="search...">
                        <span class="input-group-btn">
                            <button class="btn btn-circle-right btn-default" type="submit">Go!</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="portlet-body">
             <tree-table :data="data" :columns="columns" border/>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import treeTable from '@/components/treeTable'
  export default {
    name:'MenusManage',
    components: {
        treeTable
    },
    data () {
      return {
        columns: [
            {
                text: '名称',
                value: 'title',
                width: 200
            },
            {
                text: '路由name',
                value: 'name'
            },
            {
                text: '路由路径',
                value: 'path'
            },
            {
                text: '图标',
                value: 'icon'
            },
            {
                text: '是否默认显示到标签',
                value: 'showTab'
            },
            {
                text: '是否默认显示页',
                value: 'default'
            },
            {
                text: '页签是否可关闭',
                value: 'notClose'
            },
            {
                text: '是否首页',
                value: 'isHome'
            }
        ],
        data: []
      };
    },

    props: {
      isOk:{
         type: Boolean,
         default: false
      }
    },

    computed: {},

    mounted(){
         axios
          .get("/auth/menus", {
            params: {
              id: 1
            }
          })
          .then(result => {
            this.data=result.data
          })
          .catch(error => {
          })       
    },

    methods: {}
  }

</script>