<template>
  <div>
    <list-table-layout>
      <template slot="header">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="姓名">
            <el-input v-model="inputname" placeholder="姓名" :rules="rules" @blur="onBlurName" />
            <span class="errMsg">{{ nameerr }}</span>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="inputcla" placeholder="电话" :rules="rules" @blur="onBlurpho" />
            <span class="errMsg">{{ phoerr }}</span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template slot="content">
        <list-table :column="fromData.column" :data="list" :pagination="true" />
      </template>
    </list-table-layout>
  </div>
</template>

<script>
import ListTable from '@/components/lb-table/lb-table.vue'
import ListTableLayout from '@/components/ListTableLayout/index.vue'
import getMixin from './mixin'
export default {
  components: { ListTable, ListTableLayout },
  mixins: [getMixin],
  data() {
    return {
      fromData: {
        column: [
          {
            prop: 'nick',
            label: '昵称'
          },
          {
            prop: 'name',
            label: '姓名'
          },
          {
            prop: 'phone',
            label: '电话'
          },
          {
            prop: 'subject',
            label: '科目'
          },
          {
            prop: 'time',
            label: '更新时间'
          },
          {
            prop: 'action',
            label: '操作',
            render(_, sc) {
              return (<el-link icon='el-icon-edit'>编辑</el-link>)
            }
          }
        ]
      }
    }
  }
}
</script>

<style>
.errMsg{
    color: red;
}
</style>