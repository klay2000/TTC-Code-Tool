import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGrid from '@liqueflies/vue-flex-grid'
import ChallengeCard from "./components/ChallengeCard.vue";
import VueCodemirror from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/clike/clike.js';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import ResultsCard from './components/ResultsCard.vue';
import InfoBar from './components/InfoBar.vue';
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false;

Vue.use(VueGrid);
Vue.use(VueCodemirror);
Vue.use(Vuetify);

Vue.component("challenge-card", ChallengeCard);
Vue.component("results-card", ResultsCard);
Vue.component("info-bar", InfoBar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
