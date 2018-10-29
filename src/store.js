import Vue from 'vue'
import Vuex from 'vuex'
import axious from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: [],
    loading: false,
    totalMarketCap: 0,
    total24HrVolume: 0,
    totalBTCPercentage: 0
  },
  mutations: {
    UPDATE_COINS(state, payload) {
      if (payload && payload.data) {
        const {data} = payload
        const coins = Object.keys(data).map(key => {
          return data[key]
        })
        console.log("coins: ", coins.length)
        state.coins = coins
      }
    },
    UPDATE_MARKET_DATA(state, payload) {
      if (payload && payload.data) {
        const {data} = payload
        const {quotes} = data
        console.log('quotes.USD: ', quotes.USD)
        state.totalMarketCap = quotes.USD.total_market_cap
        state.total24HrVolume = quotes.USD.total_volume_24h
        //state.totalBTCPercentage = quotes.USD.bitcoin_percentage_of_market_cap
      }
    },
    SET_LOADING(state, payload) {
      state.loading = payload
    }
  },
  actions: {
    getCoins({commit}) {
      commit('SET_LOADING', true)
      axious.get('/api/coins').then(response => {
        commit('UPDATE_COINS', response.data)
        commit('SET_LOADING', false)
      })
    },
    getMarketData({commit}) {
      axious.get('/api/market_data').then(response => {
        console.log('getMarketData returned', response.data)
        commit('UPDATE_MARKET_DATA', response.data)
      })
    }
  },
  getters: {
    coins: state => state.coins,
    totalMarketCap: state => state.totalMarketCap,
    total24HrVolume: state => state.total24HrVolume,
    totalBTCPercentage: state => state.totalBTCPercentage,
    loading: state => state.loading
  }
})
