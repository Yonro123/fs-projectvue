import './assets/main.css';

import { createApp } from 'vue';
import router from '@/plugins/router';
import App from './App.vue';

import HeaderDefault from '@/components/HeaderDefault.vue';
import MyInput from '@/components/MyInput.vue';

const app = createApp(App);

app.use(router);

app.component('HeaderDefault', HeaderDefault).component('MyInput', MyInput);
app.mount('#app');
