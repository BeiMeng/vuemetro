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
            text: '事件',
            value: 'event',
            width: 200
            },
            {
            text: 'ID',
            value: 'id'
            },
            {
            text: '时间线',
            value: 'timeLine'
            },
            {
            text: '备注',
            value: 'comment'
            }
        ],
        data: [
            {
            id: 0,
            event: '事件1',
            timeLine: 50,
            comment: '无'
            },
            {
            id: 1,
            event: '事件1',
            timeLine: 100,
            comment: '无',
            children: [
                {
                id: 2,
                event: '事件2',
                timeLine: 10,
                comment: '无'
                },
                {
                id: 3,
                event: '事件3',
                timeLine: 90,
                comment: '无',
                children: [
                    {
                    id: 4,
                    event: '事件4',
                    timeLine: 5,
                    comment: '无'
                    },
                    {
                    id: 5,
                    event: '事件5',
                    timeLine: 10,
                    comment: '无'
                    },
                    {
                    id: 6,
                    event: '事件6',
                    timeLine: 75,
                    comment: '无',
                    children: [
                        {
                        id: 7,
                        event: '事件7',
                        timeLine: 50,
                        comment: '无',
                        children: [
                            {
                            id: 71,
                            event: '事件71',
                            timeLine: 25,
                            comment: 'xx'
                            },
                            {
                            id: 72,
                            event: '事件72',
                            timeLine: 5,
                            comment: 'xx'
                            },
                            {
                            id: 73,
                            event: '事件73',
                            timeLine: 20,
                            comment: 'xx'
                            }
                        ]
                        },
                        {
                        id: 8,
                        event: '事件8',
                        timeLine: 25,
                        comment: '无'
                        }
                    ]
                    }
                ]
                }
            ]
            }
        ]
      };
    },

    props: {
      isOk:{
         type: Boolean,
         default: false
      }
    },

    computed: {},

    mounted(){},

    methods: {}
  }

</script>