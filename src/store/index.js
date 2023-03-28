import { createStore } from 'vuex'
import axios from 'axios'
// Create a new store instance.
const store = createStore({
    state () {
      return {
        projects: [],
        loading: 'idle'
      }
    },
    mutations: {
      setProjects (state,projects) {
        state.projects=projects
      },
      setLoading (state,status) {
        state.status=status
      }
    },
    actions:{
        getProjects({commit}){
          commit('setLoading','loading')
            axios.get('https://gitlab.com/api/v4/projects').then(res=>{
                commit('setProjects',res.data);
                commit('setLoading','idle')
            }).catch(err=>{
              console.log(err);
              commit('setLoading','idle')
            })
        }
    }
    
  })
  
  export default store;