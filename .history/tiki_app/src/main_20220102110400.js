import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/app.css"
import "./assets/css/Product_portfolio.css"
import "./assets/css/Product_details.css"
import "./assets/css/Login_register.css"


createApp(App).use(router).mount('#app')
