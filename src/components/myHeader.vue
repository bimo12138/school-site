<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      router
      unique-opened
    >
      <el-menu-item index="/index">首页</el-menu-item>
      <el-menu-item index="/index/about">关于我们</el-menu-item>
    </el-menu>
  </div>
</template>


<script>
export default {
  name: "myHeader",
  methods: {

  }
};
</script>