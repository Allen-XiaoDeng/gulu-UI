import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import cx from './components/cx.vue';
import cx2 from './components/cx2.vue';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: cx},
    {path: '/xxx', component: cx2}
  ]
});

const app =
  createApp(App);
app.use(router);
app.mount('#app');
