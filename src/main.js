import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import 'material-icons/iconfont/material-icons.css';
import '@/assets/styles/tailwind.css';
import '@/assets/styles/plugin.scss';
import 'virtual:svg-icons-register';

const app = createApp(App);
app.use(router).use(i18n).mount('#app');