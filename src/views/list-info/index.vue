<template>
  <div class="listinfobox">
    <!-- <div v-permission="['editor']">通知editor马上去工作</div>
      <div v-permission="['admin']">通知admin马上去工作</div>
      <div v-permission="['editor','admin']">通知大家都去工作</div> -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-if="checkPermission(['admin'])" label="Admin">Admin赶快工作去吧</el-tab-pane>
      <el-tab-pane v-if="checkPermission(['editor'])" label="Editor">Editor赶快工作去吧</el-tab-pane>
      <el-tab-pane v-if="checkPermission(['admin','editor'])" label="Admin-和-Editor">都工作去吧</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import checkPermission from '@/utils/permission'
export default {
  data() {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    checkPermission
  }
}
</script>

<style>
.listinfobox{
    padding: 20px;
}
</style>