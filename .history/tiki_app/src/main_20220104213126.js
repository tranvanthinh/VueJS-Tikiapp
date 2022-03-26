import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/app.css"
import "./assets/css/header.css"
import "./assets/css/footer.css"
import "./assets/css/Product_portfolio.css"
import "./assets/css/Product_details.css"
// import "./assets/css/Login_register.css"
import VueAxios from 'vue-axios'
import axios from 'axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)

const app = createApp(App).use(router)
app.use(VueAxios, { $requet: axios })
app.mount('#app')
