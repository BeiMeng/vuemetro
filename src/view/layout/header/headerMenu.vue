<template>
  <div id="headerMenu" class="headerMenu">
    <div class="tabbable-line">
                <ul class="nav nav-tabs ">
                    <!-- <li class="active">
                        <i class="fa fa-desktop"></i> <a href="#tab_15_1" data-toggle="tab" aria-expanded="false">会员管理 </a>
                    </li>
                    <li class="">
                        <i class="fa fa-desktop"></i><a href="#tab_15_2" data-toggle="tab" aria-expanded="true"> 会员管理 </a>
                    </li> -->
                    <li v-for="menu in headerMenus" :key="menu.path" v-if="!menu.isHome" :class="menu.default?'active':''" @click="headerMenuClick(menu)">
                        <i :class="menu.icon"></i><a data-toggle="tab" aria-expanded="false" class="headerMenuLink"> {{menu.title}} </a>
                    </li>                                                                                                                                                                                                                                                                
             </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'headerMenu',
    computed: {
        headerMenus() {
            return this.$store.state.sideBar.headerMenus
        }
    },
    methods:{
        headerMenuClick(menu){

            this.$nextTick(()=>{
                this.$set(menu,"default",true);
            })

            this.$store.dispatch('setSideBarMenu', menu.children)

            let defaultPage=this.getDefaultPage(menu);
            //未点击此模块下的页面的话,找不到页面 todo 默认打开第一个页面
            if(defaultPage!=undefined){
                this.$store.dispatch('addView', defaultPage)
                this.$store.commit('SET_SELECTEDMENUSTATE',defaultPage)                
                this.$router.push(defaultPage.path) 
            }            
            
        },
        getDefaultPage(menu){

            return loopFindDefaultPage(menu);

            function loopFindDefaultPage(mn){
                for (let index = 0; index < mn.children.length; index++) {
                    const element = mn.children[index];
                    if(element.default){
                        if(element.hasOwnProperty('children')){
                            return loopFindDefaultPage(element)
                        }else{
                            return element
                        }
                    }
                }                
            }
        }
    },
    mounted(){
        let homePage=this.headerMenus.find(p=>p.isHome);
        if(homePage!=undefined){
            this.$store.dispatch('addView', homePage)
        }       
        let defaultMenu=this.headerMenus.find(p=>p.default);
        if(defaultMenu!=undefined){
            this.$store.dispatch('setSideBarMenu', defaultMenu.children)

            let defaultPage=this.getDefaultPage(defaultMenu);
            console.log(defaultPage);          
            this.$store.dispatch('addView', defaultPage)
            this.$store.commit('SET_SELECTEDMENUSTATE',defaultPage)                
            this.$router.push(defaultPage.path)            
        }        
    }  
}
</script>

<style>
  .headerMenu .tabbable-line li{
      height: 55px;
      line-height: 40px;
      margin-right: 20px;
  }
  .headerMenuLink{
      cursor: pointer !important;
  }
  .headerMenu .tabbable-line a{
      display: inline;
       padding-left: 5px !important;
  } 
  .headerMenu .tabbable-line{
      background-color: transparent;
  }    
</style>
