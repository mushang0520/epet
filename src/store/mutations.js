import {GET_MAIN,GET_DYNAMIC,GET_CATEGORY,GET_CATEGORY_CHILDREN} from './types'

export default {
  [GET_MAIN](state, {main}) {
    state.main = main
  },
  [GET_DYNAMIC](state, {dynamic}) {
    state.dynamic = dynamic
  },
  [GET_CATEGORY](state, {category}) {
    state.category = category
  },
  [GET_CATEGORY_CHILDREN](state, {categoryChildren}) {
    state.categoryChildren = categoryChildren
  },

}
