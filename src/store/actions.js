import {GetMain,GetDynamic} from '../api'
import {GET_MAIN,GET_DYNAMIC} from './types'
export default {
  getMain({commit}){
    let data=GetMain().then(res=>{
          if(res.data.data.code == 'succeed'){
            let main=JSON.stringify(res.data.data)
              .replace(/\\n[a-z0-9]{4}/g, s => s.fromCodePoint)
            main=JSON.parse(main)
            commit(GET_MAIN,{main})
          }
      }
    )
  },
  getDynamic({commit}){
    let data=GetDynamic().then(res=>{
          if(res.data.data.code == 'succeed'){
           // 进行Unicode解码
            let dynamic=JSON.stringify(res.data.data)
              .replace(/\\n[a-z0-9]{4}/g, s => s.fromCodePoint)
            dynamic=JSON.parse(dynamic)
            commit(GET_DYNAMIC,{dynamic})
          }
      }
    )
  }

}
