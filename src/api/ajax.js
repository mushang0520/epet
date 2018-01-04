import axios from 'axios'
export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {
  console.log('ajax ', url, data)
  type = type.toUpperCase()

  if (type == 'GET') {
    let dataStr = '' //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  }
}
