import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Particles from "vue2-particles";
//importamos vue-router
import VueRouter from 'vue-router'
import 'animate.css';

Vue.use(VueRouter);

Vue.config.productionTip = false
Vue.use(Particles);



import home from './components/Home';
import contact from './components/Contact';
import portfolio from './components/Portfolio';
import about from './components/About';


Vue.component('homeApp', home);
Vue.component('contactApp', contact);
Vue.component('portfolioApp', portfolio);
Vue.component('aboutApp', about);


const routes=[
  {path: '/', component:home, name: 'homeApp'},
  {path: '/contact', component:contact, name: 'contactApp'},
  {path: '/portfolio', component:portfolio, name:'portfolioApp'},
  {path: '/about', component:about, name:'aboutApp'}
]

//crearmos el objeto router
const router = new VueRouter({
  routes, mode:'history'
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
