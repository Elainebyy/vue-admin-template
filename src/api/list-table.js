import request from '@/utils/request'

export function getListTable() {
  return request({
    url: '/vue-admin-template/test/list-table',
    method: 'get'
  })
}