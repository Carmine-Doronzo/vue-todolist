console.log('hello')
const { createApp } = Vue

  createApp({
    data() {
      return {
        inputDo:'',
        todos :
        [
            // {
            //     text:'fai la spesa',
            //     done: true
            // },
            // {
            //     text:'mangia',
            //     done: false
            // },
            // {
            //     text:'studia',
            //     done: true
            // },
            // {
            //     text:'leggi la documentazione',
            //     done: false
            // },
            // {
            //     text:'allenati',
            //     done: true
            // },
            // {
            //     text:'non arrabbiarti',
            //     done: false
            // },
            // {
            //     text:'riposati',
            //     done: true
            // },
        ]
        
      }
      
    },

    methods:{
        remove(item,i){
            item = this.todos
            item.splice(i,1)
            console.log(this.todos)
        },

        addDo(){
            if(this.inputDo !== ''){
            this.todos.push({text:this.inputDo,done:false})
            let alertEl = document.querySelector('.alert')
            alertEl.innerHTML=''
            }else{
                let alertEl = document.querySelector('.alert')
                alertEl.innerHTML=`Inserisci del testo corretto`
            }
            
            this.inputDo = ''
            
        },
        
        iDo(item){
            if(item.done === false){
            item.done = true
            }else{
                item.done = false
            }
            
        },
        




    },
    mounted(){
        console.log(this.todos.length)
    }
  }).mount('#app')