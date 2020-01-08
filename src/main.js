import Vue from 'vue'
import App from './App.vue'

import shareIt from 'vue-share-it'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/snippet-\w*/];

Vue.use(shareIt);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')