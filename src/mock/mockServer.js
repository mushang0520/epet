import Mock from 'mockjs'
import data from './data.json'

console.log('mockServer')
// 指定监听的url和对应的json数据模板
Mock.mock('/api/main', {
  code: 0,
  data: data.main
})


// export default xxx  不需要
