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
        },
        removeTodo :function(index){
            this.todos.splice(index,1);
        },
        clearAll:function(){
            this.todos=[];
        }
    }

});
app.mount("#assignment");