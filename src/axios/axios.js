import axios from 'axios'
import Vue from 'vue'


if (mode == "development") {
    axios.defaults.baseURL = 'http://localhost:3000';
} else {
    axios.defaults.baseURL = 'http://www.lb717.com';
}

Vue.prototype.axios = axios;