import {GET_MAIN,GET_DYNAMIC} from './types'

export default {
  [GET_MAIN](state, {main}) {
    console.log(main);
    state.main = main
  },
  [GET_DYNAMIC](state, {dynamic}) {
    console.log(dynamic);
    state.dynamic = dynamic
  }

}
