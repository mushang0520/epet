import {GetMain,GetDynamic,GetCategory,GetCategoryChildren} from '../api'
import {GET_MAIN,GET_DYNAMIC,GET_CATEGORY,GET_CATEGORY_CHILDREN} from './types'
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

}
