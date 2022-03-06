<template>
  <div class="from-box">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <from-validata #default="{ validata }" :value="value" :rules="rules">
          <el-input v-model="value" @blur="onblur(validata)" />
        </from-validata>
      </el-form-item>
      <el-form-item label="活动区域">
        <from-validata #default="{ validata }" :value="value2" :rules="rules">
          <el-select v-model="value2" placeholder="请选择活动区域" @change="onblur2(validata)" @blur="onblur2(validata)">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </from-validata>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="活动形式">
        <from-validata #default="{ validata }" :value="value3" :rules="rules">
          <el-input v-model="value3" type="textarea" @blur="onblur3(validata)" />
        </from-validata>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(validata)">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import FromValidata from './from-validata.vue'
export default {
  components: {
    FromValidata
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      value: '',
      value2: '',
      value3: '',
      value4: [],
      value5: '',
      rules: [
        {
          test: function(value) {
            return value
          },
          message: '请输入一个条件'
        }
      ]
    }
  },
  methods: {
    onblur(fn) {
      fn(this.value)
    },
    onblur2(fn) {
      fn(this.value2)
    },
    onblur3(fn) {
      fn(this.value3)
    },
    onblur4(fn) {
      fn(this.value4)
    },
    onblur5(fn) {
      fn(this.value5)
    },
    onSubmit(fn) {
      alert('sumbmit')
    }
  }
}
</script>

<style>
  .from-box{
    width: 40%;
    padding: 20px;
  }
</style>