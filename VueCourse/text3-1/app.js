const app =Vue.createApp({
    data: function(){
        return{
            name:"魏承恩",
            age:21,
            link:'https://th.bing.com/th/id/R.a6918ab99f5ad753415d97a685b1298a?rik=CW5Mpp1Oat1WGA&riu=http%3a%2f%2ftw.mjjq.com%2fbig5_tibet%2fpic%2f051215-tibet-2%2f1134686822_181458739.jpg&ehk=CZJ%2ftfiQSNdyY5NhM76UA1Ns2fWmpP9m6Zs75wlC1GE%3d&risl=&pid=ImgRaw&r=0',
            enterValue:'',
        };
    },
    methods:{
        number(){
            return Math.random();
        }
    }
});
app.mount('#assignment');