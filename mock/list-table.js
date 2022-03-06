const testdata = [
  {
      nick:"a1",
      phone:12345667,
      name:"李四",
      subject:"数学",
      job:"经理",
      time:"2021-3-1"
  },
  {
      nick:"a1",
      phone:12345667,
      name:"李三",
      subject:"数学",
      job:"经理",
      time:"2021-3-1"
  },
  {
      nick:"a1",
      phone:12345667,
      name:"李二",
      subject:"数学",
      job:"经理",
      time:"2021-3-1"
  }
]

module.exports = [
{
  url: '/vue-admin-template/test/list-table',
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