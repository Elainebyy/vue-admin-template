import { getListTable } from '@/api/list-table'
export default {
  data() {
    return {
      list: [],
      errMsg: '',
      value: ''
    }
  },
  methods: {
    getData() {
      getListTable().then((res) => {
        const { code } = res
        if (code === 20000) {
          this.list = res.data.items
        }
      }).catch((err) => {
        console.log('获取失败' + err)
      })
    },
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