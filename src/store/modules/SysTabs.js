const state = () => ({
  // 所有的tabs标签
  tabs: [
    {
      title: '首页',
      name: '/',
      closable: false
    }
  ]
})

const getters = {
  tabs: state => state.tabs
}

const mutations = {
  setTabs (state, tabs) {
    state.tabs = tabs
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
