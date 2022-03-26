import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/app.css"
import "./assets/css/Product_portfolio.css"
import "./assets/css/Product_details.css"
// import "./assets/css/Login_register.css"
import "url('https://fonts.googleapis.com/css?family=Montserrat:400,800')";


createApp(App).use(router).mount('#app')
