// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/css/ping.css'
import './assets/css/jsplumb.css'
import MyPlugin from './assets/js/plugin'
import JsEncrypt from 'jsencrypt'

import {Button,Radio, InfiniteScroll, Header, Field, Search, Cell,
  Popup, TabContainerItem, TabContainer, TabItem, Navbar, DatetimePicker} from 'mint-ui'
import 'mint-ui/lib/style.css'




Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(MyPlugin)//注册我的组件
Vue.use(InfiniteScroll);

Vue.component(Radio.name, Radio);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Search.name, Search);
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Field.name, Field);
Vue.component(Cell.name, Cell);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Popup.name, Popup);
Vue.component(DatetimePicker.name, DatetimePicker);

axios.defaults.withCredentials=true
Vue.prototype.$axios = axios
Vue.prototype.$companyCode = 'gwHvj2penyCpFW1j'
Vue.prototype.$jsEncrypt = JsEncrypt
/* eslint-disable no-new */

let vue = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

export default vue
