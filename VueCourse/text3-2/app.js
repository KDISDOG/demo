const app =Vue.createApp({
    data:function(){
        return{
            enterValue:" ",
            enterValue2:" ",
            comfirmName1:" "
        }
    },
    methods:{
        showAlert(){
            console.log('aa');
            alert('AAAA');
        },
        inputValue(event){
            this.enterValue=event.target.value;
        },
        inputValue2(event){
            this.enterValue2=event.target.value;
            console.log('asda');
        },
        comfirmName(){
            this.comfirmName1=this.enterValue2;
console.log('5555555');
        },
    }

});
app.mount("#assignment")