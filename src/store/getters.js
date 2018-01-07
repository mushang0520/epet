export default {
  ads(state){
    let flag = false;
    let ads=[]
    ads=state.main.datas&&state.main.datas.filter(item => {
      if (!item.is_show) {
        return false
      }
      if (item.type_name === "天天惊喜模板") {
        flag = true
        return false
      }
      return flag
    })
    return ads
  }
}
