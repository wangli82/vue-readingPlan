<template>
    <div>
      <div class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
              <a class="navbar-brand">
                <i class="glyphicon glyphicon-time"></i>
                读书计划表
              </a>
          </div>
          <ul class="navbar-nav nav">
              <li><router-link to="/home">首页</router-link></li>
              <li><router-link to="/time">计划列表</router-link></li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>
   body{background:url(../assets/bg.jpg)}
</style>
