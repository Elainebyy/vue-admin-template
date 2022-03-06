import request from '@/utils/request'

export function getListFrom() {
  return request({
    url: '/vue-admin-template/test/list-from',
    method: 'get'
  })
}