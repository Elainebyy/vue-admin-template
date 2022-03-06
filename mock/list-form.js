module.exports = [
    {
      url: '/vue-admin-template/test/list-from',
      type: 'get',
      response: config => {
        return {
          code: 20000,
          data: {
            total: testdata.length,
            items: testdata
          }
        }
      }
    }
  ] 