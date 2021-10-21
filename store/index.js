import axios from 'axios'
import CloneDeep from 'lodash/cloneDeep'

export const state = () => ({
    clientes: []
})

export const mutations = {
    setClientes: function (state, payload) {
        state.clientes.push(payload)
    }
}

export const actions = {
    getClientes({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            response => {
                commit("setClientes", response.data)
            }            
        )      
    }
}

export const getters = {
    clienteGetter: (state) => CloneDeep(state.clientes)
}