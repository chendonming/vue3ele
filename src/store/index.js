import { createStore } from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

const modules = {}
const arrs = require.context('./modules', false, /\.js$/).keys()
arrs.forEach(v => {
  const name = v.substring(2, v.lastIndexOf('.'))
  modules[name] = require(`./modules/${name}`).default
})

export default createStore({
  modules,
  strict: debug
})
