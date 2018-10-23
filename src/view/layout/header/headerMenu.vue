<template>
  <div id="headerMenu" class="headerMenu">
    <div class="tabbable-line">
                <ul class="nav nav-tabs ">
                    <li class="active">
                        <i class="fa fa-desktop"></i> <a href="#tab_15_1" data-toggle="tab" aria-expanded="false">会员管理 </a>
                    </li>
                    <li class="">
                        <i class="fa fa-desktop"></i><a href="#tab_15_2" data-toggle="tab" aria-expanded="true"> 会员管理 </a>
                    </li>
                    <li class="">
                        <i class="fa fa-desktop"></i><a href="#tab_15_3" data-toggle="tab" aria-expanded="false"> 会员管理 </a>
                    </li>
                    <li class="">
                        <i class="fa fa-desktop"></i><a href="#tab_15_1" data-toggle="tab" aria-expanded="false"> 会员管理 </a>
                    </li>
                    <li >
                        <i class="fa fa-desktop"></i><a href="#tab_15_2" data-toggle="tab" aria-expanded="true"> 会员管理 </a>
                    </li>
                    <li class="">
                        <i class="fa fa-desktop"></i><a href="#tab_15_3" data-toggle="tab" aria-expanded="false"> 会员管理 </a>
                    </li>
                    <li class="">
                        <i class="fa fa-desktop"></i><a href="#tab_15_1" data-toggle="tab" aria-expanded="false"> 会员管理 </a>
                    </li>
                                                                                                                                                                                                                                                                
             </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerMenu'
}
</script>

<style>
  .headerMenu .tabbable-line li{
      height: 55px;
      line-height: 40px;
      margin-right: 20px;
  }
  .headerMenu .tabbable-line a{
      display: inline;
       padding-left: 5px !important;
  } 
  .headerMenu .tabbable-line{
      background-color: transparent;
  }    
</style>
