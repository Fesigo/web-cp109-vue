import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[
      {
        title: "Varanda Jardins",
        description: "Ceviche, bifes e frutos do mar assados na brasa em um restaurante de hotel elegante e iluminado.",
        rating: 4.6,
        tipo: "Churrascaria"
      },
      {
        title: "Le Bife",
        description: "Bistrô francês refinado especializado em cortes de carnes nobres, servidos como bife, hambúrguer e tartar.",
        rating: 4.7,
        tipo: "Churrascaria"
      },
      {
        title: "Bbq Company",
        description: "Pratos brasileiros e mediterrâneos em um local moderno com terraço e um bar que serve aperitivos e drinks.",
        rating: 4.6,
        tipo: "Churrascaria"
      },
      {
        title: "Base Steakhouse",
        description: "Restaurante com foco em carnes e acompanhamentos variados, drinques e sobremesas, em espaço clássico cordial.",
        rating: 4.7,
        tipo: "Churrascaria"
      },
      {
        title: "Sal Gastronomia",
        description: "Entre as entradas, os famosos Steak tartare de mignon com ovo de codorna frito e batata chips e a Polenta cremosa com linguiça com requeijão ao molho de tomate estão entre os mais pedidos.",
        rating: 4.1,
        tipo: "Restaurante"
      },
      {
        title: "Maní",
        description: "Comida brasileira autoral e contemporânea, pela chef Helena Rizzo. premiada nacional e internacionalmente, servida no coração dos Jardins, em São Paulo.",
        rating: 4.5,
        tipo: "Restaurante"
      },
      {
        title: "Jamie’s Italian Restaurant",
        description: "Rede italiana descontraída de chef famoso com cardápio rústico e bar para petiscos.",
        rating: 4.2,
        tipo: "Restaurante"
      },
      {
        title: "Esther Rooftop",
        description: "Espaço moderno com terraço coberto ideal para tomar coquetéis e apreciar pratos gourmet internacionais.",
        rating: 4.5,
        tipo: "Restaurante"
      },
    ],
    title:"Restaurantes",
    title_event:"Eventos",
    events: null,
  },
  mutations: {
    SET_EVENTS(state, payload) {
      state.events = payload
    }
  },
  actions: {
    fetchEvents({commit}) {
      axios.get('https://agenda-balaguer.herokuapp.com/api/event')
      .then(res => {
        const payload  = res.data.values
        commit('SET_EVENTS', payload)
      })
      .catch(err => { console.log(err); })
    }
  },
  modules: {
  },
  getters: {
    bigTitle(state) {
      return state.title.toUpperCase()
    },
    bigTitleEvent(state) {
      return state.title_event.toUpperCase()
    },
  }
})
