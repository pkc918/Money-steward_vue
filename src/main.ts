import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

window.tagList = tagListModel.fetch();
window.createTag = () => {
  const messageObj = {
    duplicated: () => {window.alert('标签已经存在');},
    success: () => {window.alert('添加成功');}
  };
  const message = tagListModel.create(name);
  messageObj[message]?.();
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
