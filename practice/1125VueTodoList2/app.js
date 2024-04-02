const app=Vue.createApp({
    data:function(){
        return{
            todos:[
                {
                    id:'1',
                    title:'打手槍',
                    completed:true
                },

            ],
            inputValue:"",
            visibility:"all",
            cacheTodo:{},
            cacheTitle:'',
        }
    },
    methods:{
        add(){
            if(!this.inputValue){
                return;
            }
            let timeStamp=Math.floor(Date.now());
            this.todos.push({
                id:timeStamp,
                title:this.inputValue.trim(),
                completed:false
            });
            this.inputValue="";
            console.log(this.todos);
        },
        clear(){
            this.todos=[];
        },
        remove(key){

            this.todos.splice(key,1);
        },
        editTodo:function(item){
            console.log(item);
            this.cacheTodo=item;
            this.cacheTitle=item.title;
        }

    },
    computed:{
        filiterTodos:function(){
            if(this.visibility=='all'){
                return this.todos;
            }else if(this.visibility=='active'){
                let newTodos=[];
                this.todos.forEach(function(item){
                   
                    if(!item.completed){
                        newTodos.push(item);
                    }

                })
                return newTodos;
            }else if (this.visibility == 'completed') {
                var newTodos = [];
                this.todos.forEach(function(item){
                    if (item.completed) {
                        newTodos.push(item);
                    }
                })
                return newTodos;
            }
        }

    }



});

app.mount("#app");