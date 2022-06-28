import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'

const store = () => ({
  state,
  mutations,
  actions,
})

export default store
