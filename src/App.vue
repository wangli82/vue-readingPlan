<template>
  <div>
    <Navbar/>
    <div class="flower"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="col-md-3">
            <Slidebar/>
          </div>
          <div class="col-md-9">
            <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut" mode="out-in">
              <router-view class="position"></router-view>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Slidebar from '@/components/Slidebar';
export default {
    components:{
      Navbar,
      Slidebar
    }
}
</script>

<style>
  .position{
    position: absolute; width: 100%}
  .flower{
    position: absolute;bottom:-100px;left:0px;z-index:-1;width:800px;height:400px;background:url(assets/flower1.png);background-size:100%;}
</style>
