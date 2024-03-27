console.log('hello')
const { createApp } = Vue

  createApp({
    data() {
      return {
        todos :
        [
            {
                text:'fai la spesa',
                done: true
            },
            {
                text:'mangia',
                done: false
            },
            {
                text:'studia',
                done: true
            },
            {
                text:'leggi la documentazione',
                done: false
            },
            {
                text:'allenati',
                done: true
            },
            {
                text:'non arrabbiarti',
                done: false
            },
            {
                text:'riposati',
                done: true
            },
        ]
      }
    },

    methods:{
        remove(item,i){
            this.todos.splice(i,1)
        }

    }
  }).mount('#app')