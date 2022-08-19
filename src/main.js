import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'material-icons/iconfont/material-icons.css';
import '@/assets/styles/tailwind.css';
import '@/assets/styles/plugin.scss';

const app = createApp(App);
app.use(router).mount('#app');