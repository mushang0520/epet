import {GetMain} from '../api'
import {GET_MAIN} from './types'
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
  }

}
