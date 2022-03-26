import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/app.css"
import "./assets/css/header.css"
import "./assets/css/footer.css"
import "./assets/css/Product_portfolio.css"
import "./assets/css/Product_details.css"
// import "./assets/css/Login_register.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

createApp(App).use(router).mount('#app')
