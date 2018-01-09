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
  [GET_PLACE](state, {place}) {
    state.place = place
  },
  [SET_PLACE](state, {defaultPlace}) {
    state.defaultPlace = defaultPlace
  },
  [GET_WAP_DATA](state, {wapData}) {
    state.wapData = wapData
  },
  [GET_SEARCH_KEY_WORD_HIS](state, {keyWordHis}) {
    state.keyWordHis = keyWordHis
  },
  [GET_SEARCH_LIST](state, {keyList}) {
    state.keyList = keyList
  },
  [SET_SKW](state, {skw}) {
    state.skw = skw
  },

}
