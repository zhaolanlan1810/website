import Vue from 'vue'
import App from './App.vue'
import router from './router'//引入自定义的路由文件router.js，装入根模块
import axios from  'axios'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueToast);
Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.axios=axios;


new Vue({
  router,//将路由器装入根组件
  render: function (h) { return h(App) }
}).$mount('#app')
