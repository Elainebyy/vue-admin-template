<template>
  <div>
    <slot :validata="validata" />
    <span class="fromerrmsg">{{ errMsg }}</span>
  </div>
</template>

<script>
export default {
  props: ['value', 'rules'],
  data() {
    return {
      errMsg: ''
    }
  },
  methods: {
    validata(value) {
      this.value = value
      const valueStatus = this.rules.reduce((pre, cur) => {
        const check = cur && cur.test && cur.test(this.value)
        this.errMsg = check ? '' : cur.message
        return pre && cur
      }, true)
      return valueStatus
    }
  }
}
</script>

<style>
.fromerrmsg{
    color: red;
}
</style>