const app =Vue.createApp({
    data: function(){
        return{
            courseGoal: 'Finish the course and learn Vue!',
            vueLink:'https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463138#overview'
        };
    }
});
app.mount('#user-goal');