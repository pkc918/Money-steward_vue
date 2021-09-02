import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

/*
* 1 全局变量太多
* 2 严重依赖 window
* */
// record store
window.recordList = recordListModel.fetch();
window.createRecord = (record: RecordItem) => {
  return recordListModel.create(record)
};

// tag store
window.tagList = tagListModel.fetch();
window.findTag = (id: string) => {
  return window.tagList.filter(item => item.id === id)[0];
};
window.createTag = () => {
  const messageObj = {
    duplicated: () => {window.alert('标签已经存在');},
    success: () => {window.alert('添加成功');}
  };
  const message = tagListModel.create(name);
  messageObj[message]?.();
};
window.removeTag = (id: string) => {
  return tagListModel.remove(id);
};
window.updateTag = (id: string, name: string) => {
  return tagListModel.update(id, name);

};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
