const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      inputValue:0,
    };
  },
  methods:{
    add(){
      this.counter=this.counter+inputValue;
     console.log(typeof(inputValue));

    },
    minus(number){
      this.counter=this.counter-number;
      console.log(typeof(number));
    },
    setName(event,lastName){
      this.name=event.target.value+' '+lastName;
    },
    equal(event){
      inputValue=event.target.value;
      inputValue=parseInt(inputValue);
    }
  }
});

app.mount('#events');
