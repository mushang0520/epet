import '../common/jquery-1.12.4'
import {GetMain,
  GetDynamic,
  GetCategory,
  GetCategoryChildren,
  GetSearchList} from '../api'
import {GET_MAIN,
  GET_DYNAMIC,
  GET_CATEGORY,
  GET_CATEGORY_CHILDREN,
  GET_PLACE,
  SET_PLACE,
  GET_WAP_DATA,
  GET_SEARCH_KEY_WORD_HIS,
  GET_SEARCH_LIST,
  SET_SKW} from './types'

export default {
  getMain({commit}){
    let data=GetMain().then(res=>{
      if(res.data.code == 'succeed'){
        let main=JSON.stringify(res.data)
          .replace(/\\n[a-z0-9]{4}/g, s => s.fromCodePoint)
        main=JSON.parse(main)
        commit(GET_MAIN,{main})
      }
      }
    )
  },
  getSearchList({commit},{keywords}){

    let data=GetSearchList(keywords).then(res=>{
      if(res.data.code == 'succeed'){
        let keyList=JSON.stringify(res.data)
          .replace(/\\n[a-z0-9]{4}/g, s => s.fromCodePoint)
        keyList=JSON.parse(keyList)
        commit(GET_SEARCH_LIST,{keyList})
      }
      }
    )
  },
  getDynamic({commit},{cb}){
    let data=GetDynamic().then(res=>{
      if(res.data.code == 'succeed'){
       // 进行Unicode解码
          let dynamic=JSON.stringify(res.data)
            .replace(/\\n[a-z0-9]{4}/g, s => s.fromCodePoint)
          dynamic=JSON.parse(dynamic)
          commit(GET_DYNAMIC,{dynamic})
        cb()

      }
      }
    )
  },
  getCategory({commit}){
    let data=GetCategory().then(res=>{
      if(res.data.code == 'succeed'){
           // 进行Unicode解码
            let category=JSON.stringify(res.data)
              .replace(/\\n[a-z0-9]{4}/g, s => s.fromCodePoint)
            category=JSON.parse(category)
            commit(GET_CATEGORY,{category})
          }
      }
    )
  },
  getCategoryChildren({commit},{cateid,cb}){
    let data=GetCategoryChildren(cateid).then(res=>{
          console.log('GetCategoryChildren',res);
      if(res.data.code == 'succeed'){
           // 进行Unicode解码
            let categoryChildren=JSON.stringify(res.data)
              .replace(/\\n[a-z0-9]{4}/g, s => s.fromCodePoint)
            categoryChildren=JSON.parse(categoryChildren)
            commit(GET_CATEGORY_CHILDREN,{categoryChildren})
        cb&&cb()
          }
      }
    )
  },
  getPlace({commit},{faid}){
    let time=new Date()
    $.getJSON(`https://mall.api.epet.com/v3/user/address.html?do=getplace&faid=${faid}&system=wap&isWeb=1&version=340&_=${time.getTime()}&callback=?`,
      (data)=>{
        commit(GET_PLACE,{place:data})
    })
  },
  getWapData({commit}){
    let time=new Date()

    $.getJSON(`http://mall.api.epet.com/v3/goodslist.html?do=getHotKeys&system=wap&isWeb=1&version=340&_=${time.getTime()}&callback=?`,
      (data)=>{
        commit(GET_WAP_DATA,{wapData:data})
    })
  },
  getSearchKeyWordHis({commit}){
    let time=new Date()
    $.getJSON(`http://mall.api.epet.com/v3/search/main.html?do=GetSearchKeyWordHis&system=wap&isWeb=1&version=340&_=${time.getTime()}&callback=?`,
      (data)=>{
        commit(GET_SEARCH_KEY_WORD_HIS,{keyWordHis:data})
    })
  },
  setPlace({commit},{cityId,cb}){
    let time=new Date()
    let cities=cityId.split('_')
    $.getJSON(`http://mall.api.epet.com/v3/place.html?do=setPlaceById&province=${cities[0]}&city=${cities[1]}&area=${cities[2]}&high=&street=&system=wap&isWeb=1&version=340&_==${time.getTime()}&callback=?`,
      (data)=>{
      let defaultPlace=data.default_place.place_name
        commit(SET_PLACE,{defaultPlace})
        localStorage.setItem('defaultPlace',defaultPlace)
        cb()
    })
  },
  setSKW({commit},{skw}){
    commit(SET_SKW,{skw})

  }
}
