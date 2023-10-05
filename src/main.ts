import './assets/main.css';
import '@vuepic/vue-datepicker/dist/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';

const app = createApp(App);

app.use(createPinia());

app.mount('#app');

//TODO
// Create a calendar to select a date
// Create button to select today's date
// Put data in special object, which can be manipulated
// It is now a Pinia Store, from where the data can be accessed.

// I don't know how to create a file from the information i now have
// Ask heit what he wants with the data
// Rename temp.ts
// Clean up the code, create better names for variables
