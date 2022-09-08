import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "./assets/scss/app.scss";
import Skeleton from 'vue-loading-skeleton';

createApp(App).use(store).use(router).use(Skeleton).mount('#app')
