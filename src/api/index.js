// http://mallcdn.api.epet.com/v3/index/main.html?
// pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1514876419830
import fetch from './fetch'
import axios from 'axios'

/**
 * 获取主页分类信息
 */

export function GetMain(){
  let time=new Date()
  return axios.get('/test/v3/index/main.html?pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_='+time.getTime())
}
export function GetDynamic(){
  let time=new Date()
  return axios.get('/test/v3/index/main.html?do=GetDynamicV315&pet_type=dog&version=358&system=wap&isWeb=1&_='+time.getTime()+'&r='+Math.random())
}
export function GetSearchList(keywords){
  let time=new Date()
  return axios.get(`/test/v3/goods/list/main.html?version=355&brandid=0&page=1&orderby=def_desc&cateid=0&pet_type=dog&extend_pam=keyword%3A${keywords}&real_wid=&region=&system=wap&isWeb=1&_=${time.getTime()}`)
}
export function GetCategory(){
  let time=new Date()
  return axios.get('/test/v3/goods/category/main.html?pet_type=dog&system=wap&isWeb=1&version=303&_='+time.getTime())
}
export function GetCategoryChildren(cateid){
  let time=new Date()
  return axios.get(`/test/v3/goods/category/main.html?do=getChildren&owner=${cateid}&pet_type=dog&system=wap&isWeb=1&version=303&_=${time.getTime()}`)
}
//export const getMain = () =>fetch('test/v3/index/main.html',data)


