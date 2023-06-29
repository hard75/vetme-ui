import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { gapi } from 'gapi-script';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import './assets/main.css';

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus)
  .mount('#app')


const startGapi = () => {
  gapi.load('client', async () => {
    await gapi.client.init({
      apiKey: 'AIzaSyB8-eJR-CSZEN6jtbnsniQ38l34ROhX4Nk',
      clientId: '181706391015-f7tq07jdjrq350hjeko1pja0odomooec.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/calendar',
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
    });
  });
}

startGapi();