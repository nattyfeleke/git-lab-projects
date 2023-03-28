import { createStore } from 'vuex'
import axios from 'axios'
// Create a new store instance.
const store = createStore({
    state () {
      return {
        projects: [],
        status: 'idle'
      }
    },
    mutations: {
      setProjects (state,projects) {
        state.projects=projects
      }
    },
    actions:{
        getProjects({commit}){
            axios.get('https://gitlab.com/api/v4/projects').then(res=>{
                commit('setProjects',res.data)
            })
        }
    }
  })
  
  export default store;