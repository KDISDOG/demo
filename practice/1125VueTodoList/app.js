const app=Vue.createApp({
    data:function(){
        return{
            todos:['洗澡','吃飯','做愛'],
            inputValue:'',
        };
    },
    methods:{
        addTodo:function(){
            this.todos.push(this.inputValue);
            console.log(this.todos);
            this.inputValue='';
            console.log(this.todos.length);
        },
        removeTodo :function(index){
            this.todos.splice(index,1);
            console.log("A");
        },
        clearAll:function(){
            this.todos=NULL;
            console.log("Clear");
        }
    }

});
app.mount("#assignment");