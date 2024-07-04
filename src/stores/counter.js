import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    title: 'This is piania counter!',
    count: 12
  }),
  getters: {
    evenOrOdd: (state) => {
      if (state.count % 2 === 0) return 'even'
      return 'odd'
    }
  },
  actions: {
    increamentCounter(amount) {
      this.count += amount
    },
    decreamentCounter(amount) {
      this.count -= amount
    }
  }
})
