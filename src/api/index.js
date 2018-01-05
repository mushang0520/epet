// http://mallcdn.api.epet.com/v3/index/main.html?
// pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1514876419830
import fetch from './fetch'
import axios from 'axios'

/**
 * 获取主页分类信息
 */
let time=new Date()
let data={
      pet_type:'dog',
      version:358,
      is_single:0,
      system:'wap',
      isWeb:1,
      _:time.getTime().toString()
      }
export function GetMain(){
  return axios.get('/api/main')
}
export function GetDynamic(){
  return axios.get('/api/dynamic')
}
//export const getMain = () =>fetch('test/v3/index/main.html',data)


