import {GET_MAIN} from './types'
export default {
  [GET_MAIN](state, {main}) {
    console.log(main);
    state.main = main
  }

}
