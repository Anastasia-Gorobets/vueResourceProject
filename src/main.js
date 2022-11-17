import { createApp } from 'vue';

import App from './App';

var app = createApp(App);

app.mount('#app');

import  BaseCard from './components/UI/BaseCard';

app.component('base-card',BaseCard);